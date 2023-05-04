import * as RouterAlias from "src/router/alias"

export const beforeEach = (to, from, next) => {
  const matched = to.matched
  if (matched && matched.length) {
    document.title = to.name
    next()
  } else {
    // 如果当前路由无匹配状态，则默认跳转至 404 页面
    next({
      name: RouterAlias.NotFount.name
    });
  }
}