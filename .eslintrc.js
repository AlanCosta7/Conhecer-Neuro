module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  plugins: ['vue'], // enable vue plugin
  extends: ['plugin:vue/essential', 'prettier'] // activate vue related rules
}
