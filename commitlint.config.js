const types = [
  'feat', // 新功能
  'fix', // bug修复
  'perf', // 性能优化
  'refactor', // 功能重构
  'docs', // 文档更新
  'revert', // 回滚操作
  'style', // 样式变动
  'build', // 编译相关的修改，例如发布版本、对项⽬构建或者依赖的改动
  'chore', // 其他修改, ⽐如改变构建流程、或者增加依赖库、⼯具等
  'ci', // 持续集成修改
  'test' // 测试⽤例修改
];

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', types]
    // 'scope-empty': [2, 'never']
  }
};
