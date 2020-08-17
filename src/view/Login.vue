<template>
  <div class="login-wrap">
    <el-form label-width="100px" :model="ruleForm"  class="demo-ruleForm login-container">
      <h3 class="title">用户登录</h3>
      <el-form-item label="用户:" prop="userAccount">
        <el-input v-model="userAccount" ></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="userpwd">
        <el-input type="password" v-model="userpwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="doLogin()" style="width: 160px;" round plain>提交</el-button>
        <el-button type="info" style="width: 75px;" @click="doResetting()" round plain>重置</el-button>
      </el-form-item>
      <el-form-item>
        <el-link type="primary" @click="doRegister()" style='float: right;'>快速注册>></el-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      userAccount: null,
      userpwd: null
    }
  },
  methods: {
    doLogin: function () {
      let url = this.axios.urls.SERVER + this.axios.urls.SSMUSER_LOGIN
      this.axios.post(url, {
        userAccount: this.userAccount,
        userpwd: this.userpwd
      }).then((resp) => {
        if (resp.data != '1' && resp.data != '2') {
          console.log(resp.data)
          this.$message.success('登录成功！')

          /* 将登陆对象放入localStorage中 */
          localStorage.setItem('user', resp.data)

          setTimeout(() => {
            this.$router.push({
              name: 'index'
            })
          })
        } else if (resp.data == '1') {
          this.$message.error('密码错误!')
        } else if (resp.data == '2') {
          this.$message.error('该账号不存在!')
        }
      }).catch((resp) => {
        console.log(resp)
      })
    },
    doRegister: function () {
      this.$router.push({
        name: 'Register'
      })
    },
    doResetting: function () {
      this.userAccount = ''
      this.userpwd = ''
    },
    // 获取上个页面传递的id
    getAccount: function () {
      let Account = this.$route.params.userAccount
      this.userAccount = Account
    }
  },
  created () {
  },
  mounted () {
    this.getAccount()
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
