module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // 禁用 console
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    // 禁止使用debugger
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    // ====== 自定义eslint rules ======
    // 未使用变量
    "no-unused-vars": "warn",
    "vue/no-side-effects-in-computed-properties": "off",
    // 語句分號結尾
    "semi": ["error", "never"],
    // 不允許重複聲明
    "no-redeclare": "error",
    // 調用函數時，函數名和括號之間不能有空格
    "no-spaced-func": "error",
    // 不允許在語句後存在多餘的空格
    "no-trailing-spaces": "error",
    // 註釋前需要一個空格
    "spaced-comment": "warn",
    // 屬性命名規則必须使用駝峰命名法(never / always)
    // "camelcase": ["error", {
    //   "properties": "always"
    // }],
    // 函數或者條件判斷時需要統一使用大括號
    "curly": ["error", "all"],
    // 代碼間間隔出現一行
    "eol-last": "error",
    // disallow async functions which have no await expression
    // "require-await": "error",
    // require var declarations be placed at the top of their containing scope
    "vars-on-top": "error",
    // disallow the use of undefined as an identifier
    "no-undefined": "error",
    // 变数宣告禁使用var，改用let
    "no-var": "error",
    // 宣告未使用的components
    "vue/no-unused-components": "warn",
    // 函數後面不允許空一格: 設定為0: 排除驗證
    "space-before-function-paren": 0,
    // 關掉 tab錯誤提示
    'indent': ["off", "tab"],
    // html self close要關閉
    'vue/html-self-closing': 0
  }
}
