import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import svgLoader from 'vite-svg-loader'
import eslint from 'vite-plugin-eslint'
import removeConsole from 'vite-plugin-remove-console'
import Inspect from 'vite-plugin-inspect'

export default function getPluginsList() {
  return [
    vue(),
    // jsx、tsx语法支持
    vueJsx(),
    eslint(),
    // https://github.com/jpkleemans/vite-svg-loader
    svgLoader(),
    // Auto import APIs on-demand for Vite, Webpack, Rollup and esbuild. With TypeScript support
    AutoImport({
      imports: [
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        'vue',
        'vue-router',
        {
          // '@vueuse/core': [
          //   // named imports
          //   'useMouse', // import { useMouse } from '@vueuse/core',
          //   // alias
          //   ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
          // ],
          // 'axios': [
          //   // default imports
          //   ['default', 'axios'], // import { default as axios } from 'axios',
          // ],
          // '[package-name]': [
          //   '[import-names]',
          //   // alias
          //   ['[from]', '[alias]'],
          // ],
        }
      ],
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      // Filepath to generate corresponding .d.ts file.
      // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
      // Set `false` to disable.
      dts: false
    }),
    // Vue 的按需组件自动导入
    Components({
      // By default this plugin will import components in the src/components path. You can customize it using the dirs option.
      // relative paths to the directory to search for components.
      // dirs: ['src/components'],
      // resolvers for custom components
      // enabled by default if `typescript` is installed
      dts: false,
      resolvers: [
        // 自动注册图标组件
        // Then you can use any icons as you want without explicit importing. Only the used icons will be bundled.
        // <i-carbon-accessibility/>
        IconsResolver({
          // 默认是i，此处改为icon
          // {prefix}-{collection}-{icon}
          // prefix: 'icon',
          enabledCollections: ['ep']
          // customCollections: ['my-icons']
          // this is optional, default enabling all the collections supported by Iconify
          // enabledCollections: ['mdi'],
        }),
        ElementPlusResolver()
      ]
    }),
    // VueI18nPlugin({
    //   /* options */
    //   include: [fileURLToPath(new URL('./src/assets/locales/**', import.meta.url))]
    // }),
    Icons({
      autoInstall: true,
      customCollections: {
        'my-svg-icons': FileSystemIconLoader('./src/assets/svg', (svg) =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        )
      }
      // use
      // import IconBar from '~icons/my-icons/bar'
    }),
    // 线上环境删除console
    removeConsole({ external: ['src/assets/*'] }),
    Inspect()
  ]
}
