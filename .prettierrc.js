module.exports = {
  "$schema": "https://json.schemastore.org/prettierrc",
  "semi": false,
  "tabWidth": 2,
  "singleQuote": true,
  vueIndentScriptAndStyle: true,
  "printWidth": 100,
  "trailingComma": "none",
  endOfLine: 'auto',
  plugins: ['prettier-plugin-packagejson'],
  overrides: [
    {
      files: '.*rc',
      options: {
        parser: 'json',
      },
    },
  ],
}
