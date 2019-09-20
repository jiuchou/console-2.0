<template>
  <div class="filter-container" style="margin: 0 20px;">
    <hr size="5" width="100%" align="left">
    <p style="margin-left: 20px;">查看案例</p>
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
    >
      <el-table-column label="序号" type="index" prop="id" sortable="custom" align="center" width="60px" />

      <el-table-column label="case_key" prop="case_key" min-width="150px">
        <template slot-scope="scope">
          <span>{{ scope.row.case_key }}</span>
        </template>
      </el-table-column>
      <el-table-column label="case_info" prop="case_info" min-width="150px">
        <template slot-scope="scope">
          <span>{{ scope.row.case_info }}</span>
        </template>
      </el-table-column>
      <el-table-column label="case_type" prop="case_type" min-width="150px">
        <template slot-scope="scope">
          <span>{{ scope.row.case_type }}</span>
        </template>
      </el-table-column>
      <el-table-column label="case_description" prop="case_description" min-width="150px">
        <template slot-scope="scope">
          <span>{{ scope.row.case_description }}</span>
        </template>
      </el-table-column>
      <el-table-column label="case_solution" prop="case_solution" min-width="150px">
        <template slot-scope="scope">
          <span>{{ scope.row.case_solution }}</span>
        </template>
      </el-table-column>
      <el-table-column label="case_remark" prop="case_remark" min-width="150px">
        <template slot-scope="scope">
          <span>{{ scope.row.case_remark }}</span>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getCaseList" />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination/index.vue' // Secondary package based on el-pagination
import { getCase } from '@/api/solution'

export default {
  components: { Pagination },
  data() {
    return {
      loading: false,
      caseList: [],
      total: 0,
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  created() {
    this.getCaseList()
  },
  methods: {
    getCaseList() {
      this.loading = true
      getCase(this.listQuery).then(response => {
        this.caseList = []
        this.total = response.total
        this.cases = response.case_list
        let i = 1
        for (const caseInfo of this.cases) {
          const caseRow = {}
          caseRow.id = i
          caseRow.case_key = caseInfo.case_key
          caseRow.case_info = caseInfo.case_info
          caseRow.case_type = caseInfo.case_type
          caseRow.case_description = caseInfo.case_description
          caseRow.case_solution = caseInfo.case_solution
          caseRow.case_remark = caseInfo.case_remark
          this.caseList.push(caseRow)
          i = i + 1
        }
        this.loading = false
      }).catch(err => {
        this.loading = false
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.el-pagination button,
.el-pagination span:not([class*='suffix']) {
  display: inline-block;
  font-size: 12px;
  min-width: 35.5px;
  height: 28px;
  line-height: 28px;
  vertical-align: top;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.el-pagination__sizes .el-input .el-input__inner {
  font-size: 12px;
  padding-left: 8px;
}
</style>
