
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
