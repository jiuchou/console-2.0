<template>
  <div class="login-container pull-height" @keyup.enter.native="handleLogin">
    <div class="login-border animated fadeInRight">
      <div class="login-main">
        <h4 class="login-title">登录</h4>
        <el-tabs v-model="activeName">
          <el-tab-pane label="用户登陆" name="domain">
            <domain-login />
          </el-tab-pane>
          <el-tab-pane label="DevOps" name="jiuchou">
            <dev-login />
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <div class="login-info text-white animated fadeInLeft">
      <h2 class="login-info-title">
        DevOpsClub
      </h2>
    </div>
  </div>
</template>

<script>
import DomainLogin from './modules/domain-login.vue'
import DevLogin from './modules/dev-login.vue'

export default {
  name: 'Login',
  components: {
    DomainLogin,
    DevLogin
  },
  props: {},
  data() {
    return {
      activeName: 'domain'
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss">
.login-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  height: 100%;
}
.login-container::before {
  z-index: -999;
  content: '';
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/background/login.png');
  background-size: cover;
}
.login-info {
  padding-left: 60px;
  margin-bottom: 30%;
}
.login-info-title {
  line-height: 90px;
  font-size: 50px;
  font-weight: bolder;
  // color: #76838f;
  color: #009a61;
}
.login-info-item {
  font-size: 14px;
}
.login-border {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px 50px 25px 50px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 2px #eee;
}
.login-main {
  border-radius: 3px;
  box-sizing: border-box;
  background-color: #fff;
}
.login-main > h3 {
  margin-bottom: 20px;
}
.login-main > p {
  color: #76838f;
}
.login-title {
  margin: 0 0 20px;
  text-align: center;
  color: #009a61;
  letter-spacing: 3px;
}
.login-submit {
  margin-top: 20px;
  width: 100%;
  border-radius: 28px;
}
.login-form {
  margin: 10px 0;
  .el-form-item__content {
    width: 270px;
  }
  .el-form-item {
    margin-bottom: 12px;
  }
  .el-input {
    input {
      text-indent: 5px;
      border-color: #dcdcdc;
      border-radius: 3px;
    }
    .el-input__prefix {
      i {
        padding: 0 5px;
        font-size: 16px !important;
      }
    }
  }
}

.el-tabs__item.is-active {
  color: #009a61;
}

.el-tabs__item:hover {
  color: #009a61;
}

.el-checkbox__input.is-checked+.el-checkbox__label {
  color: #009a61;
}

.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #009a61;
  border-color: #009a61;
}

.el-button--small, .el-button--small.is-round {
  background-color: #009a61;
  &:hover {
    background-color: #009a61;
  }
}
</style>
