<template>
  <el-form ref="loginForm" :rules="loginRules" :model="loginForm" class="login-form" status-icon label-width="0">
    <el-form-item prop="userid">
      <el-input v-model="loginForm.userid" auto-complete="off" size="small" placeholder="请输入用户名" @keyup.enter.native="handleLogin">
        <i slot="prefix" class="icon-yonghu" />
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="loginForm.password" :type="passwordType" auto-complete="off" size="small" placeholder="请输入密码" @keyup.enter.native="handleLogin">
        <i slot="suffix" class="el-icon-view el-input__icon" @click="showPassword" />
        <i slot="prefix" class="icon-mima" />
      </el-input>
    </el-form-item>
    <el-checkbox v-model="checked">记住账号</el-checkbox>
    <el-form-item>
      <el-button :loading="loading" class="login-submit" size="small" type="primary" @click.native.prevent="handleLogin">
        登录
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { validUserid } from '@/utils/validate'

export default {
  name: 'DevLogin',
  props: {},
  data() {
    const validateUserid = (rule, value, callback) => {
      if (!validUserid(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      loginForm: {
        userid: 'jiuchou',
        password: '123456'
      },
      checked: true,
      loginRules: {
        userid: [
          { required: true, trigger: 'blur', validator: validateUserid }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
        ]
      },
      passwordType: 'password'
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    showPassword() {
      this.passwordType === ''
        ? (this.passwordType = 'password')
        : (this.passwordType = '')
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/' })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style>
</style>
