<template>
  <!--
  Topbar
  AppMain
    ShowBox
    LongWripper
  Footerbar
  -->
  <div class="app-wrapper">
    <topbar />
    <app-main />
    <footerbar />
  </div>
</template>

<script>
import { Topbar, AppMain, Footerbar } from './components/index'

export default {
  name: 'Layout',
  components: {
    Topbar,
    AppMain,
    Footerbar
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
