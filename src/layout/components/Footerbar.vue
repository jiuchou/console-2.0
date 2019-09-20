<template>
  <div class="footer-wrapper">
    <div class="copyright">
      Copyright © 2018-2019 DevOpsClub 保留所有权利.
      <a href="//tongji">网站统计</a>
    </div>
    <div class="beian">
      <a>
        <span>
          系统稳定运行:
          <span id="runTime" style="color: #0196e3;">
            {{ run_time }}
          </span>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footerbar',
  data() {
    return {
      run_time: 1
    }
  },
  methods: {
    formatTakeUpTime(time) {
      let takeUpTime = ''
      if (('' + time).length === 10) {
        time = parseInt(time) * 1000
      } else {
        time = +time
      }

      if (time > 60 && time < 60 * 60) {
        takeUpTime = parseInt(time / 60.0) + '分钟' +
                    parseInt((parseFloat(time / 60.0) -
                    parseInt(time / 60.0)) * 60) + '秒'
      } else if (time >= 60 * 60 && time < 60 * 60 * 24) {
        takeUpTime = parseInt(time / 3600.0) + '小时' + parseInt((parseFloat(time / 3600.0) -
                    parseInt(time / 3600.0)) * 60) + '分钟' +
                    parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
                    parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) + '秒'
      } else {
        takeUpTime = parseInt(time) + '秒'
      }
      return takeUpTime
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-wrapper {
  font-size: 12px;
  width: 100% !important;
  background: #e1e5eb;
  text-align: center;
  line-height: 2em;
  padding: 10px 0;
  border-top: 1px solid #d3d8e0;
  // padding-bottom: calc(30px + env(safe-area-inset-bottom));

  .copyright a[href] {
    color: #20a0ff;
    // 不使用下划线
    text-decoration: none;
  }

  .beian a {
    color: #99a9bf;
  }
}
</style>
