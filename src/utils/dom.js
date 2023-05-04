import _ from 'lodash'
/**
 * 通过JS动态计算根元素的字体大小，根据不同设备的屏幕宽度和设计稿的宽度之比来计算出一个缩放比例，
 * 然后将根元素的字体大小设置为该比例乘以一个基准字体大小，比如16px。例如：如果设计稿是750px宽度，
 * 而当前设备的屏幕宽度是375px，则缩放比例为0.5，根元素的字体大小就会被设置为8px（0.5*16px）
 * iPhone6/7/8      1rem = (375 / 750) * 75 = 37.5px
 * iPhone6/7/8 Plus 1rem = (414 / 750) * 75 = 41.4px
 */
export const setDomFontSize = () => {
  let width = document.documentElement.clientWidth || document.body.clientWidth;
  let rem = 750 / 10; // 以一个设计稿进行参考，此处750是以iPhone6/7/8进行换算
  let fontsize = (width / 750) * rem + 'px';
  (document.getElementsByTagName('html')[0].style)['font-size'] = fontsize;
  console.log('fontSize:', fontsize)
}

let setDomFontSizeDebounce = _.debounce(setDomFontSize, 400)
window.addEventListener('resize', setDomFontSizeDebounce); // 浏览器加入收缩监听防抖，重新计算rem配置