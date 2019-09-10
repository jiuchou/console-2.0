<template>
  <div class="main">
    <div class="main-wrapper">
      <div v-if="openCoverflow" class="coverflow-container">
        coverflow
      </div>
      <div class="main-container">
        <div class="main-content">
          main-container
        </div>
      </div>
      <div class="footer-container">
        <div class="copyright">
          Copyright © 2018-2019 DevOpsClub 保留所有权利.
          <a href="//tongji">网站统计</a>
        </div>
        <div class="beian">
          <a>
            <span>
              系统稳定运行:
              <span id="run_time" style="color: #0196e3;">run_time</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style lang="scss" scoped>
.main:before {
  position: fixed;
  width: 100%;
  height: 100%;
  background: url('~@/assets/background/bl.png') no-repeat fixed bottom left, url('~@/assets/background/tr.png') no-repeat fixed top right, #f0f2f7;
  content: '';
  z-index: -999;
}

.main {
  display: flex;
  position: relative;
  background: url('~@/assets/background/bl.png') no-repeat fixed bottom left, url('~@/assets/background/tr.png') no-repeat fixed top right, #f0f2f7;
  padding-top: 58px;

  .main-wrapper {
    .coverflow-container {
    }

    .main-container {
      padding-right: 15px;
      padding-left: 15px;
      margin: 0 auto;

      .main-content {
        width: calc(100% - 80px) !important;
        max-width: 1680px !important;
      }
    }

    .footer-container {
      float: left;
      font-size: 12px;
      width: 100% !important;
      background: #e1e5eb;
      text-align: center;
      line-height: 2em;
      padding: 30px 0;
      // border-top: 1px solid #d3d8e0;
      // padding-bottom: calc(30px + env(safe-area-inset-bottom));

      .copyright a[href] {
        color: #20a0ff;
        // 不适用下划线
        text-decoration: none;
      }

      .beian a {
        color: #99a9bf;
      }
    }
  }
}
</style>
