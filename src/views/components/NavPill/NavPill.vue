<template>
  <div class="nav-wrapper position-relative end-0">
    <ul class="nav nav-pills nav-fill p-1" role="tablist">
      <nav-pill-item v-for="{tab, link, index} of NavPillData" :key="index" :tab="tab" :link="link" />
    </ul>
  </div>
</template>
<script setup>
import {onMounted} from 'vue'
import NavPillItem from './NavPillItem.vue'
import setNavPills from '@/assets/js/nav-pills.js'
import {data} from './NavPillData.json'
const NavPillData = data

onMounted(() => {
  setNavPills()
})
</script>
