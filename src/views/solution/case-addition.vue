<template>
  <div class="filter-container" style="margin: 0 20px;">
    <hr size="5" width="100%" align="left">
    <p style="margin-left: 20px;">添加案例</p>
    <div>
      <td>
        <el-button class="el-icon-success" size="mini" style="margin-left: 20px;" @click.prevent="handleAdd()">
          添加
        </el-button>
      </td>
      <td>
        <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />
      </td>
    </div>
    <hr size="5" width="100%" align="left">

    <el-table
      ref="caseList"
      v-loading="loading"
      :data="caseList"
      :header-cell-style="{
        'background-color': '#fafafa',
        'color': 'rgb(0, 0, 0)',
        'border-bottom': '1px rgb(103, 194, 58) solid'
      }"
      size="mini"
      border
      fit
      highlight-current-row
      style="width: 100%; font-size: 14px;"
      @selection-change="selectRow"
    >
      <el-table-column type="selection" />
      <el-table-column label="序号" type="index" prop="id" sortable="custom" align="center" width="60px" />

      <el-table-column label="case_key" prop="case_key" min-width="150px">
        <template slot-scope="scope">
          <el-input v-model="scope.row.case_key" clearable />
        </template>
      </el-table-column>
      <el-table-column label="case_info" prop="case_info" min-width="150px">
        <template slot-scope="scope">
          <el-input v-model="scope.row.case_info" clearable />
        </template>
      </el-table-column>
      <el-table-column label="case_type" prop="case_type" min-width="150px">
        <template slot-scope="scope">
          <el-input v-model="scope.row.case_type" clearable />
        </template>
      </el-table-column>
      <el-table-column label="case_description" prop="case_description" min-width="150px">
        <template slot-scope="scope">
          <el-input v-model="scope.row.case_description" clearable />
        </template>
      </el-table-column>
      <el-table-column label="case_solution" prop="case_solution" min-width="150px">
        <template slot-scope="scope">
          <el-input v-model="scope.row.case_solution" clearable />
        </template>
      </el-table-column>
      <el-table-column label="case_remark" prop="case_remark" min-width="150px">
        <template slot-scope="scope">
          <el-input v-model="scope.row.case_remark" clearable />
        </template>
      </el-table-column>
    </el-table>

    <p style="margin-left: 20px;">
      <el-button class="el-icon-plus" size="mini" @click.prevent="addRow()" />
      <el-button class="el-icon-minus" size="mini" @click.prevent="delRow()" />
    </p>
  </div>
</template>

<script>
import { addCase } from '@/api/solution'
import UploadExcelComponent from '@/components/Upload/UploadExcel.vue'

export default {
  components: { UploadExcelComponent },
  inject: ['reload'],
  data() {
    return {
      loading: false,
      caseList: [],
      selectCaseList: []
    }
  },
  methods: {
    handleAdd() {
      this.loading = true
      addCase(this.caseList).then(() => {
        this.loading = false
        this.$message({
          title: '成功',
          message: '操作成功',
          type: 'success',
          duration: 2000
        })
        this.caseList = []
        this.reload()
      }).catch(err => {
        this.loading = false
      })
    },
    selectRow(val) {
      this.selectCaseList = val
    },
    addRow() {
      var caseList = {
        id: this.caseList.length + 1,
        case_key: this.caseList.case_key,
        case_info: this.caseList.case_info,
        case_type: this.caseList.case_type,
        case_description: this.caseList.case_description,
        case_solution: this.caseList.case_solution,
        case_remark: this.caseList.case_remark
      }
      this.caseList.push(caseList)
    },
    delRow() {
      for (let i = 0; i < this.selectCaseList.length; i++) {
        var val = this.selectCaseList
        val.forEach((val, index) => {
          this.caseList.forEach((v, i) => {
            if (val.id === v.id) {
              this.caseList.splice(i, 1)
            }
          })
        })
      }
      this.$refs.caseList.clearSelection()
    },
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1

      if (isLt1M) {
        return true
      }

      this.$message({
        message: 'Please do not upload files larger than 1m in size.',
        type: 'warning'
      })
      return false
    },
    handleSuccess({ results }) {
      this.caseList = []
      for (let i = 0; i < results.length; i++) {
        var cases = {
          id: this.caseList.length + 1,
          case_key: results[i].case_key,
          case_info: results[i].case_info,
          case_type: results[i].case_type,
          case_description: results[i].case_description,
          case_solution: results[i].case_solution,
          case_remark: results[i].case_remark
        }
        this.caseList.push(cases)
      }
    }
  }
}
</script>
