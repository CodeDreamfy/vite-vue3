import { createPinia } from 'pinia'

const store = createPinia()

function setupStore(app) {
  app.use(store)
}
export { setupStore, store }
