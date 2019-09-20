<template>
  <section class="app-main">
    <div class="main-container">
      <router-view :key="key" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      // alert(this.$route.fullPath)
      return this.$route.fullPath
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main:before {
  position: fixed;
  background: url('~@/assets/background/bl.png') no-repeat fixed bottom left, url('~@/assets/background/tr.png') no-repeat fixed top right, #f0f2f7;
  content: '';
  z-index: -999;
  height: 100%;
}

.app-main {
  display: flex;
  position: relative;
  background: url('~@/assets/background/bl.png') no-repeat fixed bottom left, url('~@/assets/background/tr.png') no-repeat fixed top right, #f0f2f7;
  padding-top: 58px;
  height: calc(100% - 69px);


  .main-container {
    margin: 0 auto;
    width: calc(100% - 80px) !important;
    max-width: 1680px !important;
  }
}
</style>
