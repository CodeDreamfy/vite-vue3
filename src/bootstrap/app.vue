<script setup>
  import { ElConfigProvider } from 'element-plus'
  import { elementUIOptions } from '@/plugins/i18n'
</script>
<template>
  <el-config-provider v-bind="elementUIOptions">
    <router-view></router-view>
  </el-config-provider>
</template>
