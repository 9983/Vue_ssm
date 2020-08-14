<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

      <el-input v-model="test1"></el-input>
      <el-button type="primary" @click="GetTest1()">主要按钮</el-button>

      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
          label="ID"
          prop="userId">
        </el-table-column>

        <el-table-column
          label="账号"
          prop="userAccount">
        </el-table-column>

        <el-table-column
          label="姓名"
          prop="userName">
        </el-table-column>
        <el-table-column
          label="性别"
          prop="userSex">
        </el-table-column>
        <el-table-column
          label="年龄"
          prop="userAge">
        </el-table-column>
        <el-table-column
          label="注册时间"
          prop="userDate">
        </el-table-column>


          <el-table-column
            align="right">
            <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>

  </div>
</template>

<script>
export default {
  name: 'test_2',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      test1: null,
      tableData: null,
      search: ''

    }
  },
  methods: {

    GetTest1: function () {
      console.log(this.test1)
      this.$message.success(this.test1)

      this.axios.post(this.axios.urls.SSM_USER_SELECTALL, {

        username: this.test1

      }).then(resp => {
        
        
        console.log(resp.data)
        this.tableData = resp.data
        
        
      }).catch(resp => {
        console.log(resp)
      })
    },

    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
