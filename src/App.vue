<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import { ref, onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const hw = ref(null)
const msg = ref('you did it')
onMounted(() => {
  setTimeout(() => {
    msg.value = 'you update it'
    console.log(msg.value)
  }, 2000)
})
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld ref="hw" :msg="msg" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
