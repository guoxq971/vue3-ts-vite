module.exports = {
  //此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  //此项指定环境的全局变量，下面的配置指定为浏览器环境
  env: {
    browser: true,
    node: true,
    es6: true
  },
  //此项是用来指定eslint解析器的，解析器必须符合规则
  parser: 'vue-eslint-parser',
  //此项是用来指定javaScript语言类型和风格
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module', //用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
  },
  extends: [
    'prettier', //使得@typescript-eslint中的样式规范失效，遵循prettier中的样式规范
    // 下面这个冲突了, 没找到解决方法
    // 'plugin:prettier/recommended' //使用prettier中的样式规范，且如果使得ESLint会检测prettier的格式问题，同样将格式问题以error的形式抛出
  ],
  // 此项是用来提供插件的
  plugins: [],
  rules: {
    'semi': [2, 'always'], // 语句强制分号结尾
    // 函数前的空格 const test = async ()=>{}
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'always',
      'asyncArrow': 'always'
    }],
    // 大括号内的间距一致 const obj = { name:'zhangsan' }
    'object-curly-spacing': ['error', 'always'],
  }
}
