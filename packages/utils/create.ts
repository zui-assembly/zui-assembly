// block 代码块   element 元素   modifier 装饰  state 状态

// z-element
// z-element__primary
// z-element__primary--disabled
// is-disabled is-checked is-enabled

// :class=[bem.b()]

// 前缀名字   z-button-box__element--modifier
function _bem(prefixName: string, blockSuffix: string, element: string, modifier: string) {
  if (blockSuffix) {
    prefixName += `-${blockSuffix}`;
  }
  if (element) {
    prefixName += `__${element}`;
  }
  if (modifier) {
    prefixName += `--${modifier}`;
  }
  return prefixName;
}

function createBEM(prefixName: string) {
  const b = (blockSuffix = '') => _bem(prefixName, blockSuffix, '', '');
  const e = (element = '') => (element ? _bem(prefixName, '', element, '') : '');
  const m = (modifier = '') => (modifier ? _bem(prefixName, '', '', modifier) : '');

  const be = (blockSuffix = '', element = '') =>
    blockSuffix && element ? _bem(prefixName, blockSuffix, element, '') : '';
  const bm = (blockSuffix = '', modifier = '') =>
    blockSuffix && modifier ? _bem(prefixName, blockSuffix, '', modifier) : '';
  const em = (element = '', modifier = '') => (element && modifier ? _bem(prefixName, '', element, modifier) : '');
  const bem = (blockSuffix = '', element = '', modifier = '') =>
    blockSuffix && element && modifier ? _bem(prefixName, blockSuffix, element, modifier) : '';

  const is = (name: string, state: string | boolean) => (state ? `is-${name}` : '');
  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is
  };
}

// prefixName = z-button
export function createNamespace(name: string) {
  const prefixName = `z-${name}`;
  // 创建 BEM 规范的函数
  return createBEM(prefixName);
}
