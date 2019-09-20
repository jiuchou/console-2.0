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
