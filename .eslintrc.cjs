// eslint-env node */
// https://eslint.vuejs.org/user-guide/
require('@rushstack/eslint-patch/modern-module-resolution')
const path = require('node:path')
const createAliasSetting = require('@vue/eslint-config-airbnb/createAliasSetting')

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-essential', // 加上防止错误或意外行为的规则
    'plugin:vue/vue3-strongly-recommended', // 加上可显着提高代码可读性和/或开发体验的规则
    '@vue/eslint-config-airbnb',
    'plugin:vue/vue3-recommended', // 加上强制执行主观社区默认设置以确保一致性的规则
    'plugin:tailwindcss/recommended',
    '@vue/eslint-config-prettier', // /skip-formatting
    './.eslintrc-auto-import.json'
  ],
  plugins: ['vue', 'tailwindcss'], // , 'tailwindcss'
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-debugger': process.env === 'development' ? 'off' : 'on',
    'no-console': process.env === 'development' ? 'off' : 'on',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [0, { 'packageDir ': './src/' }],
    'max-len': [
      'error',
      {
        code: 160,
        ignorePattern: 'class="([\\s\\S]*?)"|d="([\\s\\S]*?)"', // ignore classes or svg draw attributes
        ignoreUrls: true
      }
    ],
    'vue/multi-word-component-names': 'off'
  },
  settings: {
    ...createAliasSetting({
      '@': `${path.resolve(__dirname, './src')}`
    }),
    // 'import/core-modules': ['@intlify/vite-plugin-vue-i18n/messages'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', 'svg'],
        moduleDirectory: ['node_modules', 'src/']
      },
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', 'svg'],
        map: [['@', './src']]
      }
    }
  }
}
