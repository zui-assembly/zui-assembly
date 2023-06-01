import { RangeOptions, VirtualOptions, updateType } from './props';

const enum CALC_TYPE {
  INIT = 'INIT',
  FIXED = 'FIXED',
  DYNAMIC = 'DYNAMIC'
}

const enum DIRECTION {
  END = 'END',
  FRONT = 'FRONT',
  BEHIND = 'BEHIND'
}

export function initVirtual(params: VirtualOptions, update: updateType) {
  let calcType = CALC_TYPE.INIT; // 滚动模式 定高|动态高
  let offsetValue = 0; // 滚动的偏移量
  let lastScrollY = params.offsetTop || 0; // 上一次滚动的偏移量
  let direction = ''; // 滚动的方向
  let ticking = false; // 是否在滚动中
  let fixedSizeVal = 0; // 固定高度
  let firstRangeAvg = 0; // 第一次渲染的平均高度
  const sizeMap = new Map<string | number, number>(); // 保存每一项的高度
  const range: RangeOptions = {
    start: 0,
    end: 0,
    padFront: 0,
    padBehind: 0
  };

  function isFixed() {
    return calcType === CALC_TYPE.FIXED;
  }

  // 根据开始的索引值计算出上偏移量
  function getIndexOffset(idx: number) {
    if (!idx) return 0;
    let _offset = 0;
    // 累加
    for (let i = 0; i < idx; i++) {
      // sizeMap中保存了我们滚动的时候保存的每一项的动态高度
      // 如果sizeMap中有这个值, 就直接取出来, 否则就是动态高度, 就取第一次渲染的平均高度
      _offset +=
        typeof sizeMap.get(params.uniqueIds[i]) === 'number'
          ? (sizeMap.get(params.uniqueIds[i]) as number)
          : getSourceHeight();
    }

    return _offset;
  }

  function getPadFront() {
    // 准确计算 上偏移量
    if (isFixed()) {
      return range.start * getSourceHeight();
    } else {
      return getIndexOffset(range.start);
    }
  }

  function getBehind() {
    const lastIndex = params.uniqueIds.length - 1;
    return (lastIndex - range.end) * getSourceHeight();
  }

  // 更新渲染的范围参数
  function updateRange(start: number, end: number) {
    range.start = start;
    range.end = end;
    range.padFront = getPadFront();
    range.padBehind = getBehind();

    update({ ...range });
  }

  function checkUpdate(start: number, end: number) {
    const total = params.uniqueIds.length;
    const keeps = params.keeps;
    // 如果数据源的总长度小于指定的渲染个数
    if (total < keeps) {
      start = 0;
      end = total - 1;
    } else if (end - start < keeps - 1) {
      // 滚动到100, 71-100
      // start = 90 -> end = 100 就是要根据keeps的范围来计算
      start = end - keeps + 1;
    }
    updateRange(start, end);
  }

  function getSourceHeight() {
    // 如果是固定高度就直接返回每一项的固定高度值, 否则就是动态高度, 就返回第一次渲染的平均高度
    return isFixed() ? fixedSizeVal : firstRangeAvg || params.sourceSize;
  }

  // 获取结束的索引值
  function getEndByStart(start: number) {
    const computedEnd = start + params.keeps - 1;
    // 如start加上keeps的值大于数据源的长度, 则end就是数据源的长度减1, 否则就是start加上keeps的值
    const minEnd = Math.min(computedEnd, params.uniqueIds.length - 1);
    return minEnd;
  }

  function getScrollOvers() {
    // getEstimateSize() 这个值是预估的 我们要精确的找到滚动了多少个

    if (isFixed()) {
      return Math.floor(offsetValue / getSourceHeight());
    } else {
      // 获取最接近的滚动的那一项，计算每一项的偏移量，然后取最接近的那一项
      // [10,30,50,200,900,1200]  -> 1300  二分查找  O(n)
      let low = 0;
      let high = params.uniqueIds.length;
      let middle = 0;
      let middleOffset = 0;

      while (low <= high) {
        // 二分查找 O(logn)
        // 取中间值
        middle = Math.floor((low + high) / 2);
        // 获取中间值的偏移量
        middleOffset = getIndexOffset(middle);
        if (middleOffset === offsetValue) {
          return middle;
        }
        // 如果 middleOffset 小于 offsetValue, 说明滚动的偏移量在middle后面
        if (middleOffset < offsetValue) {
          low = middle + 1;
        } else if (middleOffset > offsetValue) {
          // 如果 middleOffset 大于 offsetValue, 说明滚动的偏移量在middle前面
          high = middle - 1;
        }
      }

      return low > 0 ? --low : 0;

      // 如果用这个平均值去算出滚动了多少个, 数据量大的时候可能会出现误差, 会有一小段的空白
      // return Math.floor(offsetValue / getSourceHeight());
    }
  }

  function handleFront() {
    const overs = getScrollOvers() as number;
    // 比如当前range.start为10, overs为9,
    if (overs > range.start) {
      return;
    }

    // 当滑动过了第一项的时候, overs为1, buffer为3, 那么start就是1 - 3 = -2, 小于0, 则start还是为0
    const start = Math.max(overs - params.buffer, 0);
    checkUpdate(start, getEndByStart(start));
  }

  function handleBehind() {
    const overs = getScrollOvers() as number; // 滚动了1000像素, 每一项80的高度, 就是滚动了12.5项, 向下取个整(12)

    // 比如我滚动了4条数据, start为0, keeps渲染范围为30条，那么buffer就是 30 / 3 = 10, 那么此时的overs就是4 - 10 = -6, 小于0, 就不需要更新start和end
    if (overs < range.start + params.buffer) {
      return;
    }

    checkUpdate(overs, getEndByStart(overs));
  }

  function updateScrollDir(offset: number) {
    // 判断方向
    direction = offset > lastScrollY ? DIRECTION.BEHIND : DIRECTION.FRONT;
    lastScrollY = offset > 0 ? offset : 0;
    // 更新偏移量
    offsetValue = offset;
    if (direction === DIRECTION.FRONT) {
      handleFront();
    } else {
      handleBehind();
    }
    setTimeout(() => {
      ticking = false;
    }, 200);
  }

  function initScroll(offset: number) {
    // hack: 解决在某些情况往上滚动的时候因为节流的原因导致到达边界后无法再次触发滚动更新数据的问题
    if (offset === 0) {
      checkUpdate(0, getEndByStart(0));
      return false;
    }
    // 做了一层节流
    if (direction === DIRECTION.END) return false;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateScrollDir(offset);
      });
      ticking = true;
    }
  }

  /**
   *
   * @param id 每一项的唯一标识
   * @param size 每一项的高度
   * @description 在首次加载的时候会调用这个方法先保存一开始渲染的keeps数量的高度, 用于后面的计算, 记录fixedSizeVal的值, 然后更改 calcType 状态为固定模式
   *              如果滚动过程加载下一次数据触发 saveSize 的时候, 判断 size 与刚开始保存的 fixedSizeVal 不一样, 就认为是动态高度, 就把 calcType 状态改为动态模式
   */
  function saveSize(id: string | number, size: number) {
    sizeMap.set(id, size);

    if (calcType === CALC_TYPE.INIT) {
      // 第一个元素加载完毕后默认认为是固定高度
      fixedSizeVal = size;
      calcType = CALC_TYPE.FIXED;
    } else if (calcType === CALC_TYPE.FIXED && fixedSizeVal !== size) {
      // 如果是固定高度，但是后面的元素高度不一致，就认为是动态高度
      calcType = CALC_TYPE.DYNAMIC;
      fixedSizeVal = 0;
    }

    // 动态高度的情况下，需要重新计算平均高度
    if (calcType === CALC_TYPE.DYNAMIC) {
      if (sizeMap.size < Math.min(params.keeps, params.uniqueIds.length)) {
        firstRangeAvg = Math.round([...sizeMap.values()].reduce((prev, curr) => prev + curr, 0) / sizeMap.size);
      }
    }
  }

  // 例子：0-29
  checkUpdate(0, params.keeps - 1);
  return {
    initScroll,
    updateScrollDir,
    saveSize
  };
}
