<template>
  <el-menu
    :default-active="activeMenu"
    :background-color="variables.menuBg"
    :text-color="variables.menuText"
    :active-text-color="variables.menuActiveText"
    :unique-opened="true"
    menu-trigger="hover"
    :collapse-transition="false"
    mode="horizontal"
  >
    <topbar-menu-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
  </el-menu>
</template>

<script>
import variables from '@/styles/variables.scss'
import TopbarMenuItem from './TopbarMenuItem.vue'

export default {
  name: 'TopbarMenu',
  components: {
    TopbarMenuItem
  },
  computed: {
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables() {
      return variables
    },
    routes() {
      return this.$router.options.routes
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  border: 0px solid;
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
}

.el-menu.el-menu--horizontal {
  background-color: #f0f2f7;
  font-weight: bolder;
}
</style>
