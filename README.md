# Vue3+Vite+iconify+TailWindcss+ElementPlus+VueI18n+Pinia+ESLint(Airbnb) 实践

This template should help get you started developing with Vue 3 in Vite.


## Feature
* 使用了WindiCSS
* 使用了`unplugin-auto-import/vite`
  * `vue` 自动导入 `Vue` 相关函数，如：`ref, reactive, toRef` 等
  * `vue-router`
* `unplugin-vue-components/vite`自动导入并注册组件和`icon`
  * 默认自动将`src/components/`下的组件自动注册
  * 导入了`elementplus-icons`
  * 按需导入注册`elementplus-ui`
* 国际化语言包按需加载
* 使用了`iconify`，目前导入了`ep`即`elementplus-icons`
* 使用了ESLint + Airbnb，并自动进行格式修复
* 支持tailwindcss的类名检查
* 

> `@intlify/unplugin-vue-i18n/vite`因为在ESLint下报错，暂无法解决，因此取消使用
## 使用说明
如果想使用`element-plus`的`icons`直接参考`https://icones.js.org/collection/ep`上面的，如果还需要其他的`icon`，通过`pnpm install`添加`collection`，使用格式为：`{prefix}-{collection}-{icon}`

[`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import#install) 作用是为 Vite、Webpack、Rollup 和 esbuild 提供按需自动导入 API
[`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) 作用是为Vue 提供按需组件自动导入，比如导入ElementUI-Plus等第三方UI框架等
[@vueuse/core](https://github.com/vueuse/vueuse) 提供一些useEffect方法

### Pinia
为了从 `store` 中提取属性时[保持其响应性](https://pinia.vuejs.org/zh/core-concepts/)，你需要使用 `storeToRefs()`, 避免直接解构，或者使用`toRefs()`进行包裹
```js
import { storeToRefs } from 'pinia'
```
### 支持svg
支持自定义的icon图标进行使用，也可以注册成组件
```js
// import IconBar from '~icons/my-icons/bar' 或直接导入
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
