import * as echarts from 'echarts/core'
// 引入柱状图、饼图、折线图图表，图表后缀都为 Chart
import { PieChart, BarChart, LineChart } from 'echarts/charts'
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  GridComponent,
  TitleComponent,
  LegendComponent,
  GraphicComponent,
  ToolboxComponent,
  TooltipComponent,
  DataZoomComponent,
  VisualMapComponent
} from 'echarts/components'
// 标签自动布局、全局过渡动画等特性
// import { LabelLayout, UniversalTransition } from 'echarts/features'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'

const { use } = echarts

use([
  PieChart,
  BarChart,
  LineChart,
  CanvasRenderer,
  GridComponent,
  TitleComponent,
  LegendComponent,
  GraphicComponent,
  ToolboxComponent,
  TooltipComponent,
  DataZoomComponent,
  VisualMapComponent
])

/**
 * @description 按需引入echarts
 * @see {@link https://echarts.apache.org/handbook/zh/basics/import#%E6%8C%89%E9%9C%80%E5%BC%95%E5%85%A5-echarts-%E5%9B%BE%E8%A1%A8%E5%92%8C%E7%BB%84%E4%BB%B6}
 * @see 温馨提示：必须将 `$echarts` 添加到全局 `globalProperties` ，为了配合 https://pure-admin-utils.netlify.app/hooks/useEcharts/useEcharts.html 使用
 */
export function useEcharts(app) {
  // eslint-disable-next-line no-param-reassign
  app.config.globalProperties.$echarts = echarts
}

export default echarts
