const config = {
  plugins: [
    // require('postcss'),
    require('tailwindcss'),
    require('autoprefixer'),
    // require('postcss-px-to-viewport')({
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
    // })
    // require('postcss-pxtorem')({
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
    // })
  ]
}

module.exports = config