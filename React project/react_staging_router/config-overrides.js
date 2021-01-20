const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {// 按需引入css样式项的配置方法：
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // 自定义主题
  addLessLoader({
      lessOptions:{
        javascriptEnabled: true,
        modifyVars: { '@primary-color': 'orange' },
      }
    }),
);