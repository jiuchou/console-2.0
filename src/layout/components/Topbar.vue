<template>
  <div class="topbar">
    <div class="topbar-container">
      <div class="logo">
        <a href="/"><img src="@/assets/logo_opslab.png"></a>
        <!--
        <div class="header-title"><font size="10" color="green">运维管理平台</span></div>
        <div class="header-title-foo"><font size="10" color="green">Ops Management Platform</span></div>
        -->
      </div>

      <div v-if="online" class="user-wrapper">
        <span>
          欢迎您, {{ userName }}
        </span>
        <el-dropdown class="avatar-container hover-effect" trigger="hover">
          <div>
            <img src="@/assets/profile/male.png" class="user-avatar" alt="用户头像">
          </div>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/">
              <el-dropdown-item>首页</el-dropdown-item>
            </router-link>
            <router-link to="/user-info">
              <el-dropdown-item>用户信息</el-dropdown-item>
            </router-link>
            <el-dropdown-item divided>
              <span style="display:block;" @click="logout">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div v-else class="user-wrapper">
        <td>
          <el-button size="medium" @click.prevent="login()" style="color: #F3F3F3; background-color: #009a61;">
            立即登录
          </el-button>
        </td>
        <td>
          <el-button size="medium" @click.prevent="help()" style="color: #009a61; background-color: #F3F3F3;">
            帮助说明
          </el-button>
        </td>
      </div>

      <div class="search-wrapper">
        <!--
          增加搜索功能
        -->
        <el-input v-model="searchContent" placeholder="搜索问题或关键字">
          <el-button icon="el-icon-search" />
        </el-input>
      </div>
      <div class="menu-wrapper">
        <topbar-menu />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TopbarMenu from './TopbarMenu/index.vue'

export default {
  name: 'Topbar',
  components: {
    TopbarMenu
  },
  data() {
    return {
      searchContent: '',
      userName: '杨凯歌',
      userAvatar: require('@/assets/profile/male.png')
    }
  },
  computed: {
    ...mapGetters([
      'online'
    ])
  },
  methods: {
    login() {
      this.$router.push('/login')
    },
    help() {},
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push({ path: this.redirect || '/' })
    }
  }
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
      width: 15%;
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
      max-width: 65%;
      align-items: center;
      position: relative;
      float: right;
      background-size: contain;
      line-height: 58px;
      text-align: right;
    }
    .search-wrapper {
      height: 58px;
      line-height: 58px;
      width: 10%;
      min-width: 160px;
      padding: 0 10px;
      align-items: center;
      position: relative;
      float: right;
      background-size: contain;
      line-height: 58px;
      text-align: right;
    }
    .user-wrapper {
      font-size: 14px;
      height: 58px;
      line-height: 58px;
      width: 10%;
      min-width: 160px;
      padding: 0 10px;
      align-items: center;
      position: relative;
      float: right;
      background-size: contain;
      text-align: right;
      &.hover-effect {
        cursor: pointer;
        transition: background .3s;
        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
      .avatar-container {
        .user-avatar {
          cursor: pointer;
          width: 34px;
          height: 34px;
          border-radius: 34px;
          margin-left: 10px;
          vertical-align: middle;
        }
      }
    }
  }
  .el-button--medium {
    border: 0px solid;
    width: 80px;
    padding: 10px;
  }
}
//dropdown
.el-dropdown-menu {
  position: absolute;
  top: 40px !important;
  padding: 10px 0;
  margin: 5px 0;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  width: 100px;
}
</style>
