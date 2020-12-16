// ESlint的语法检测
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {

    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-unused-vars": [2, {
      // 允许声明未使用变量
      "vars": "local",
      // 参数不检查
      "args": "none"
    }],
    // 关闭语句强制分号结尾
    "semi": [0],
    //key值前面是否要有空格
    "key-spacing": [0, {
      "singleLine": {
        "beforeColon": false,
        "afterColon": true
      }, "multiLine": {
        "beforeColon": true,
        "afterColon": true,
        "align": "colon"
      }
    }],
    "no-multiple-empty-lines": [0, { "max": 100 }],
    //关闭禁止混用tab和空格
    "no-mixed-spaces-and-tabs": [0],
    //数组第一个指定是否启用这个规则，第二个指定几个空格
    "indent": [1, 2],
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        mocha: true
      }
    }
  ]
};
