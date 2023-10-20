module.exports = {
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  semi: false,
  arrowParens: 'avoid',
  bracketSpacing: false,

  plugins: ['prettier-plugin-sort-json'],

  // Options for prettier-plugin-sort-json
  jsonRecursiveSort: true,
}
