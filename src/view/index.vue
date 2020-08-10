<template>
  <div  >
    <h1>我是首页</h1>

    {{date}}

    {{uname}}
    {{upwd}}

    <el-form :model="ruleForm" status-icon   ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

    <br /><br /><br />
     <el-table
        :data="tableData.filter(data => !search )"
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

      <!--  <el-table-column
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
        </el-table-column> -->
      </el-table>

    <br/><br /><br />

    <el-button type="primary" icon="el-icon-search"><a @click="selectUserAll()">查询所有用户</a></el-button>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      date: new Date().getTime(),
      uname: '测试用户',
      upwd: '测试密码',
      tableData: [],
      search: '',
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      }

    }
  },
  methods: {

    // 查询所有用户方法
    selectUserAll: function () {
      this.axios.post(this.axios.urls.SSM_USER_SELECTALL, {
        
      }).then((resp) => {
        console.log(resp.data)

        this.tableData = resp.data
        console.log(this.tableData)
      }).catch((resp) => {
        console.log(resp)
      })
    },
    // 提交
    submitForm: function () {
      let a = this.ruleForm.pass
      console.log('------------前台：' + a)

      // var ss = parseInt(a)
      console.log(typeof (a))
      this.axios.post(this.axios.urls.SSMUSER_SELECTUSERBYID, {
        userId: a
      }).then(resp => {
        console.log(resp.data)
      }).catch((resp) => {
        console.log(resp)
      })
    }

  }
}
</script>

<style scoped>
  .login-wrap {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-top: 10%;
    /* background-color: #112346; */
    background-repeat: no-repeat;
    background-position: center right;
    background-size: 100%;
  }

  .login-container {
    border-radius: 10px;
    margin: 0px auto;
    width: 350px;
    padding: 30px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    text-align: left;
    box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  }

  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .remember {
    margin: 0px 0px 35px 0px;
  }

  .code-box {
    text-align: right;
  }

  .codeimg {
    height: 40px;
  }
</style>
