import Axios from 'axios'
import { stringify } from 'qs'
import { ElMessage } from 'element-plus'
// import showCodeMessage from '@/api/code'
import { getToken, formatToken } from '@/utils/auth.js'
import NProgress from '../progress'

const BASE_PREFIX = import.meta.env.VITE_API_BASEURL

// 相关配置请参考：www.axios-js.com/zh-cn/docs/#axios-request-config-1
const defaultConfig = {
  // 前缀
  baseURL: BASE_PREFIX,
  // 请求超时时间
  timeout: 1000 * 30,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  // 数组格式参数序列化（https://github.com/axios/axios/issues/5142）
  paramsSerializer: {
    serialize: stringify
  }
}

export class PureHttp {
  constructor(options = {}) {
    this.axiosInstance = Axios.create(Object.assign(defaultConfig, options))
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }

  /* 请求拦截 */
  httpInterceptorsRequest() {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        // 开启进度条动画
        NProgress.start()
        // 优先判断post/get等方法是否传入回调，否则执行初始化设置等回调
        if (typeof config.beforeRequestCallback === 'function') {
          config.beforeRequestCallback(config)
          return config
        }
        /** 请求白名单，放置一些不需要token的接口（通过设置请求白名单，防止token过期后再请求造成的死循环问题） */
        const whiteList = ['/login']
        return whiteList.some((v) => config.url.indexOf(v) > -1)
          ? config
          : new Promise((resolve) => {
              // eslint-disable-next-line no-param-reassign
              config.headers.Authorization = formatToken(getToken())
              resolve(config)
            })
      },
      (error) => Promise.reject(error)
    )
  }

  /* 响应拦截 */
  httpInterceptorsResponse() {
    this.axiosInstance.interceptors.response.use(
      (response) => {
        // 关闭进度条动画
        NProgress.done()
        const $config = response.config
        // 优先判断post/get等方法是否传入回调，否则执行初始化设置等回调
        if (typeof $config.beforeResponseCallback === 'function') {
          $config.beforeResponseCallback(response)
          return response.data
        }
        if (response.status === 200) {
          return response.data
        }
        ElMessage.info(JSON.stringify(response.status))
        return response.data
      },
      (error) => {
        const $error = error
        $error.isCancelRequest = Axios.isCancel($error)
        // 关闭进度条动画
        NProgress.done()
        // 所有的响应异常 区分来源为取消请求/非取消请求
        return Promise.reject($error)
      }
    )
  }

  request(method, url, param, axiosConfig) {
    const config = {
      method,
      url,
      ...param,
      ...axiosConfig
    }
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request(config)
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
  }

  get(url, data, config = {}) {
    return this.request('get', url, { params: data }, config)
  }

  post(url, data, config = {}) {
    return this.request('post', url, data, config)
  }
}

export default new PureHttp()
