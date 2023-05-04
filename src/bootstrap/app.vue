<script setup>
import { ElConfigProvider } from 'element-plus'
import { elementUIOptions } from '@/modules/i18n'
</script>
<template>
  <el-config-provider v-bind="elementUIOptions">
    <router-view></router-view>
  </el-config-provider>
</template>
