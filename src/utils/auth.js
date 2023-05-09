import Cookies from 'js-cookie'

export const sessionKey = 'user-info'
export const TokenKey = 'authorized-token'

/** 获取`token` */
export function getToken() {
  // 此处与`TokenKey`相同，此写法解决初始化时`Cookies`中不存在`TokenKey`报错
  return Cookies.get(TokenKey) ?? sessionStorage.getItem(sessionKey)
}

export function setToken(token, expires) {
  if (expires) {
    Cookies.set(TokenKey, token, { expires })
  } else {
    Cookies.set(TokenKey, token)
  }
  sessionStorage.setItem(TokenKey, token)
}

/** 格式化token（jwt格式） */
export const formatToken = (token) => {
  return `Bearer ${token}`
}

export const removeToken = () => {
  Cookies.remove(TokenKey)
  sessionStorage.removeItem(TokenKey)
}
