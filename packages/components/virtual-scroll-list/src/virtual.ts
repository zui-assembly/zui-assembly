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
  const firstRangeAvg = 0; // 第一次渲染的平均高度
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

  function getPadFront() {
    // 准确计算 上偏移量
    if (isFixed()) {
      return range.start * getSourceHeight();
    } else {
      return 0;
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

  function getEndByStart(start: number) {
    const computedEnd = start + params.keeps - 1;
    const minEnd = Math.min(computedEnd, params.uniqueIds.length - 1);
    return minEnd;
  }

  function getScrollOvers() {
    // getEstimateSize() 这个值是预估的 我们要精确的找到滚动了多少个
    if (isFixed()) {
      return Math.floor(offsetValue / getSourceHeight());
    } else {
      return 0;
    }
  }

  function handleFront() {
    const overs = getScrollOvers();

    // 比如当前range.start为10, overs为9,
    if (overs > range.start) {
      return;
    }

    // 当滑动过了第一项的时候, overs为1, buffer为3, 那么start就是1 - 3 = -2, 小于0, 则start还是为0
    const start = Math.max(overs - params.buffer, 0);
    checkUpdate(start, getEndByStart(start));
  }

  function handleBehind() {
    const overs = getScrollOvers(); // 滚动了1000像素, 每一项80的高度, 就是滚动了12.5项, 向下取个整(12)

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
    setTimeout(() => {
      ticking = false;
    }, 200);
    // 更新偏移量
    offsetValue = offset;
    if (direction === DIRECTION.FRONT) {
      handleFront();
    } else {
      handleBehind();
    }
  }

  function initScroll(offset: number) {
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
  }

  // 例子：0-29
  checkUpdate(0, params.keeps - 1);
  return {
    initScroll,
    updateScrollDir,
    saveSize
  };
}
