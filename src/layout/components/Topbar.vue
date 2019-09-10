<template>
  <div class="topbar">
    <div class="topbar-container">
      <div class="logo">
        <a href="//">
          <img src="@/assets/logo_opslab.png">
        </a>
      </div>

      <div class="menu-wrapper">
        temp
      </div>
      <div class="search-wrapper">
        search
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar'
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.topbar {
  height: 58px;
  // opacity: 1;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 999;
  background: #f0f2f7;
  // backdrop-filter: blur(8px);
  box-shadow: 0 1px #d8e0ea, 0 0 transparent, 0 2px rgba(255,255,255,1);

  .topbar-container {
    width: calc(100% - 80px) !important;
    max-width: 1680px !important;
    margin: 0 auto;

    .logo {
      height: 58px;
      width: 20%;
      display: flex;
      align-items: center;
      position: relative;
      float: left;
      background-size: contain;

      img {
        height: 48px;
      }
    }

    .menu-wrapper {
      height: 58px;
      width: 70%;
      align-items: center;
      position: relative;
      float: left;
      background-size: contain;
      line-height: 58px;
      text-align: right;
    }

    .search-wrapper {
      height: 58px;
      width: 10%;
      align-items: center;
      position: relative;
      float: left;
      background-size: contain;
      line-height: 58px;
      text-align: right;
    }
  }
}
</style>
