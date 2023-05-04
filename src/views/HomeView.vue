<script setup>
// import { toRefs } from 'vue'
import { useI18nStore } from '@/stores/i18n'
import { storeToRefs } from 'pinia'
import { SUPPORT_LOCALES } from '@/modules/i18n'
// 为了从 store 中提取属性时保持其响应性，你需要使用 storeToRefs(), 避免直接解构，和 `props` 一样解构后将失去响应式
// https://pinia.vuejs.org/zh/core-concepts/
const i18nStore = useI18nStore()
const { locale } = storeToRefs(i18nStore)
const { toggleLocale } = i18nStore
</script>

<template>
  <main class="">
    <div class="container flex gap-2">
      <h2>国际化切换 {{ locale }}</h2>
      <el-button :class="{ active: locale === 'cn' }" @click="toggleLocale('cn')">中文</el-button>
      <el-button :class="{ active: locale === 'en' }" @click="toggleLocale('en')">英文</el-button>

      <el-select v-model="$i18n.locale" class="locales" @change="toggleLocale">
        <!-- <el-option v-for="lang in $i18n.availableLocales" :key="`locale-${lang}`" :value="lang">{{ -->
        <el-option v-for="lang in SUPPORT_LOCALES" :key="`locale-${lang}`" :value="lang">{{
          lang
        }}</el-option>
      </el-select>
      <p>{{ $t('index.name') }}</p>
    </div>
    <i-ep-add-location />
    <AppLink
      to="/home/list"
      class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700 focus:outline-none"
      active-class="border-indigo-500 text-gray-900 focus:border-indigo-700"
      inactive-class="text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"
      >{{ $t('index.jumpTo') }}</AppLink
    >
    <div class="h-200 container">
      <router-view></router-view>
    </div>
    <el-empty> </el-empty>
  </main>
</template>

<style lang="scss" scoped>
.active {
  background-color: aqua;
}
/* reset */
select {
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1rem 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  color: inherit;
}
/* end of reset */

.locales {
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 5rem;
  border: 1px solid currentColor;
  border-radius: 2rem;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;

  &::after {
    position: absolute;
    content: '';
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;
    width: 0.8em;
    height: 0.5em;
    background-color: currentColor;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
}
</style>
