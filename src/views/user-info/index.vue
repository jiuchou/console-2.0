<template>
  <div class="app-container">
    <switch-roles @change="handleRolesChange" />

    <el-row :gutter="20">
      <el-col :span="8">
        <div class="user_img">
          <img v-if="newImageUrl" :src="newImageUrl" alt="用户头像">
          <img v-else :src="personalInfo.avatar" alt="用户头像">
          <el-upload :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/">
            <!--  <img v-if="imageUrl" :src="imageUrl" class="avatar"> -->
            <!-- <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
            <button type="button" class="el-button filter-item el-button--primary" style="margin-top:10px">
              <i class="fa fa-cloud-upload" aria-hidden="true" />
              <span>上传头像</span>
            </button>
          </el-upload>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="user_info">
          <h2>
            个人信息
            <el-button v-if="!editable" size="small" style="float:right;" icon="edit" @click="editable=true">
              编辑
            </el-button>
          </h2>
          <div v-if="editable" class="user_info_form">
            <el-form :model="personalInfo" label-position="right" label-width="100px">
              <el-form-item label="用户账号">
                <el-input v-model="personalInfo.username" disabled />
              </el-form-item>
              <el-form-item label="用户权限：">
                <el-input v-model="personalInfo.roles" disabled />
              </el-form-item>
              <el-form-item label="真实姓名">
                <el-input v-model="personalInfo.truename" />
              </el-form-item>
              <el-form-item label="性别">
                <el-radio-group v-model="personalInfo.sex">
                  <el-radio label="male">男</el-radio>
                  <el-radio label="female">女</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="邮件地址">
                <el-input v-model="personalInfo.email" disabled />
              </el-form-item>
              <el-form-item label="个人简介">
                <el-input v-model="personalInfo.introduction" type="textarea" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm()">提交</el-button>
                <el-button @click="resetForm()">取消</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div v-else class="user_info_text">
            <el-form :model="personalInfo" label-position="right" label-width="100px">
              <el-form-item label="用户账号：">{{ personalInfo.username }}</el-form-item>
              <el-form-item label="用户权限：">{{ personalInfo.roles }}</el-form-item>
              <el-form-item label="真实姓名：">{{ personalInfo.truename }}</el-form-item>
              <el-form-item label="性别：">
                <span v-if="personalInfo.sex == 'female'">女</span>
                <span v-else>{{ personalInfo.sex }}</span>
              </el-form-item>
              <el-form-item label="邮件地址：">{{ personalInfo.email }}</el-form-item>
              <el-form-item label="个人简介：">{{ personalInfo.introduction }}</el-form-item>
            </el-form>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      editable: false,
      personalInfo: {},
      newImageUrl: require('@/assets/profile/male.png'),
      key: 1
      // personalInfo_init:store.getters.userInfo
    }
  },
  computed: {
    ...mapGetters([
      // 映射 this.personalInfo_init 为 store.getters.userInfo
      // personalInfo_init: 'userInfo'
      'name',
      'avatar',
      'roles',
      'truename',
      'sex',
      'email',
      'introduction'
    ])
  },
  mounted() {
    this.resetForm()
  },
  methods: {
    // 重置表单
    resetForm() {
      this.editable = false
      // vm.personalInfo = JSON.parse(JSON.stringify(vm.personalInfo_init))
      this.personalInfo = {
        username: this.name,
        roles: this.roles,
        truename: this.truename,
        sex: this.sex,
        email: this.email,
        introduction: this.introduction
      }
    },
    handleRolesChange() {
      this.key++
    },
    // 提交表单
    submitForm() {
      this.editable = false
      var par = {
        username: this.personalInfo.username,
        roles: this.personalInfo.roles,
        truename: this.personalInfo.truename,
        sex: this.personalInfo.sex,
        email: this.personalInfo.email,
        introduction: this.personalInfo.introduction
      }
      console.log('修改信息入参为：', par)
    },
    // 上传头像
    uploadAvatar() {
      alert('稍后补上')
    },
    handleAvatarSuccess(res, file) {
      this.newImageUrl = URL.createObjectURL(file.raw)
      alert('修改头像成功')
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.user_img {
  /*width: 80%;*/
  padding: 20px;
  text-align: center;
  border: 1px solid #dee1e2;
  img {
    max-width: 200px;
    max-height: 200px;
    border-radius: 50%;
  }
}
.user_info {
  /*padding-bottom: 20px;*/
  border: 1px solid #dee1e2;
  h2 {
    margin: 0;
    font-weight: normal;
    padding: 10px 20px;
    border-bottom: 1px solid #dee1e2;
    .i_edit {
      float: right;
      font-size: 16px;
      color: #7ab8ed;
    }
  }
}
.user_info_form,
.user_info_text {
  padding: 20px;
}
#income,
#interest {
  width: 100%;
  height: 400px;
}

.el-form-item {
  margin-bottom: 0;
}
.avatar-uploader {
  margin-bottom: 32px;
}
</style>
