import { defineStore } from 'pinia'
import { getLogin } from '@/api/user'
import { setToken, removeToken } from '@/utils/auth'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    username: sessionStorage.getItem('username')
  })

  async function Login() {
    const { info, token } = await getLogin()
    // 正常情况下，登陆成功后将会获取到token已经基本的用户信息和roles
    setToken(token)
    Promise.resolve(info)
  }
  async function loginOut() {
    await removeToken()
  }
  return {
    user,
    Login,
    loginOut
  }
})

export default {}
