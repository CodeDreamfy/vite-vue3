const { spacing, height, width, colors } = require("./tailwind/config.js");

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // 是否启用tailwind预设css初始化样式,如果提供了自己的reset可以开启此选项
  // corePlugins: {
  //   preflight: false
  // },
  theme: {
    extend: {
      colors,
      spacing,
      height,
      minHeight: height,
      maxHeight: height,
      width,
      minWidth: width,
      maxWidth: width,
      lineHeight: {
        "12.5": "3.125rem",
      },
    },
  },
  plugins: [

  ],
}
