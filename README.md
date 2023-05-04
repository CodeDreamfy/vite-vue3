# Vue3+Vite+iconify+elementPlus 实践

This template should help get you started developing with Vue 3 in Vite.


## Feature
* 使用了WindiCSS
* 使用了`unplugin-auto-import/vite`
  * 'vue' 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
  * 'vue-router'
* `unplugin-vue-components/vite`自动导入并注册组件和`icon`
  * 默认自动将`src/components/`下的组件自动注册
  * 导入了`elementplus-icons`
  * 按需导入注册`elementplus-ui`
* `@intlify/unplugin-vue-i18n/vite`，默认注册导入指定目录下的语言包
* 使用了`iconify`，目前导入了`ep`即`elementplus-icons`
* 使用了ESLint
  
## 使用说明
如果想使用`element-plus`的`icons`直接参考`https://icones.js.org/collection/ep`上面的，如果还需要其他的`icon`，通过`pnpm install`添加`collection`，使用格式为：`{prefix}-{collection}-{icon}`

[`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import#install) 作用是为 Vite、Webpack、Rollup 和 esbuild 提供按需自动导入 API
[`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) 作用是为Vue 提供按需组件自动导入，比如导入ElementUI-Plus等第三方UI框架等
[@vueuse/core](https://github.com/vueuse/vueuse) 提供一些useEffect方法

### 支持svg
```js
import MyIcon from './my-icon.svg'
<MyIcon />
```

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
yarn dev
# localhost:8080
```

### Compile and Minify for Production

```sh
yarn run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
