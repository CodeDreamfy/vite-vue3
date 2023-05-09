import http from '@/plugins/request'

/** 登录 */
export const getLogin = (data) => {
  return http.post('/login', { data })
}

export const getInfo = () => {
  return http.get('/info')
}

export default {
  getLogin
}
