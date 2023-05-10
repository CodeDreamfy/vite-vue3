# Vue3+Vite+iconify+TailWindcss+ElementPlus+VueI18n+Pinia+ESLint(Airbnb) 实践

This template should help get you started developing with Vue 3 in Vite.

## Feature

* 因为WindiCSS停止维护，转而使用了TailWindCSS
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
* 使用了`mitt`进行事件订阅
* 按需引入了`echart`
* 使用了[husky](https://typicode.github.io/husky/#/?id=create-a-hook)，可以参看[约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/),[commitlint文档](https://commitlint.js.org/#/./guides-local-setup?id=guides-local-setup)

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

### Sass

当使用`Sass`的 `Tailwind` 时，使用！重要与@apply需要您使用插值来正确编译

```css
.alert {
  @apply bg-red-500 #{!important};
}
```

### [.env 文件](https://create-react-app.dev/docs/adding-custom-environment-variables)

* .env                # 所有情况下都会加载
* .env.local          # 所有情况下都会加载，但会被 git 忽略
* .env.[mode]         # 只在指定模式下加载
* .env.[mode].local   # 只在指定模式下加载，但会被 git 忽略

> 加载的环境变量也会通过 import.meta.env 以字符串形式暴露给客户端源码，为了防止意外地将一些环境变量泄漏到客户端，只有以 `VITE_` 为前缀的变量才会暴露给经过 `vite` 处理的代码
> .env.*.local 文件应是本地的，可以包含敏感变量。你应该将 .local 添加到你的 .gitignore 中，以避免它们被 git 检入

以下左侧优先级要高于右侧:

* npm start:  .env.development.local, .env.local, .env.development, .env
* npm run build: .env.production.local, .env.local, .env.production, .env
* npm test:  .env.test.local, .env.test, .env (note .env.local is missing)

These variables will act as the defaults if the machine does not explicitly set them.

### 支持svg

支持自定义的icon图标进行使用，也可以注册成组件

```js
// import IconBar from '~icons/my-icons/bar' 或直接导入
import MyIcon from './my-icon.svg'
<MyIcon />
```

### mobile支持

在`postcss.config`下加入以下其中一个配置即可

```js
plugins: {
  'postcss-px-to-viewport': {
    //   unitToConvert: 'px',    // 需要转换的单位，默认为"px"
    //   viewportWidth: 375,     // 设计稿的视窗宽度
    //   unitPrecision: 4,       // 单位转换后保留的精度
    //   propList: ['*', '!font-size'],        // 能转化为 vw 的属性列表
    //   viewportUnit: 'vw',     // 希望使用的视窗单位
    //   fontViewportUnit: 'vw', // 字体使用的视窗单位
    //   selectorBlackList: [],  // 需要忽略的 CSS 选择器，不会转为视窗单位，使用原有的 px 等单位
    //   minPixelValue: 1,       // 设置最小的转换数值，如果为 1 的话，只有大于 1 的值会被转换
    //   mediaQuery: false,      // 媒体查询里的单位是否需要转换单位
    //   replace: true,          // 是否直接更换属性值，而不添加备用属性
    //   exclude: undefined,     // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
    //   include: /\/src\//,     // 如果设置了include，那将只有匹配到的文件才会被转换
    //   landscape: false,       // 是否添加根据 landscapeWidth 生成的媒体查询条件
    //   landscapeUnit: 'vw',    // 横屏时使用的单位
    //   landscapeWidth: 1125,   // 横屏时使用的视窗宽度
    },
  'postcss-pxtorem': {
    // // rootValue参数用于计算CSS中像素单位（px）转换为相对长度单位（rem）时所需的比例值，而这个比例值又取决于html根结点的fontSize大小
    //   rootValue: 37.5, //换算基数，代表根元素的字体大小或根据输入参数返回根元素的字体大小
    //   propList: ['*'],
    //   selectorBlackList: [],
    //   exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
    //   // selectorBlackList: [], //要忽略并保留为px的选择器
    //   // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
    //   // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
    //   mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
    //   // minPixelValue: 3, //设置要替换的最小像素值(3px会被转rem)。 默认 0
    // }
}
```

### 提交规范

[@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)

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
