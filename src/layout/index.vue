<template>
  <!--
  Topbar
  AppMain
    ShowBox
    LongWripper
  Footerbar
  -->
  <div>
    <topbar />
    <app-main />
  </div>
</template>

<script>
import { Topbar, AppMain } from './components/index'

export default {
  name: 'Layout',
  components: {
    Topbar,
    AppMain
  }
}
</script>

