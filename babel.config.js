// 脚手架serve 开发环境命令 vue-cli-service serve --mode development --dashboard
// 脚手架build 生成环境命令 vue-cli-service build --mode production --target app --dashboard
// 这项目发布阶段需要用到的 babel插件
const prodPlugins = []
if (process.env.NODE_ENV === 'production') {
  prodPlugins.push('transform-remove-console')
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    // 这里是全局配置文件, 会导致开发环境和测试环境下, 所有的console.log都会被移除
    // 虽然是一劳永逸, 但是不利于开发和测试环节
    // 'transform-remove-console'
    // #
    // 发布产品时候的插件数组
    ...prodPlugins,
    '@babel/plugin-syntax-dynamic-import'
  ]
}
