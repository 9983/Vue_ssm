<template>
  <div class="login-wrap">
    <el-form label-width="100px" :model="ruleForm"  class="demo-ruleForm login-container">
      <h3 class="title">用户登录</h3>
      <el-form-item label="用户:" prop="User_name">
        <el-input v-model="uname" ></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="User_pwd">
        <el-input type="password" v-model="upwd"></el-input>
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
      uname: null,
      upwd: null
    }
  },
  methods: {
    doLogin: function () {
      /* let url = this.axios.urls.SERVER + this.axios.urls.SYSTEM_USER_DOLOGIN
      this.axios.post(url, {
        uname: this.uname,
        upwd: this.upwd
      }).then((response) => {
        if (response.data != null) {
          console.log(response)
          this.$message.success('登录成功！')
          setTimeout(() => {
            this.$router.push({
              name: 'index'
            })
          })
        }
      }).catch((response) => {
        console.log(response)
      }) */
      if (this.uname == 'admin' & this.upwd == 123) {
        this.$message.success('登陆成功!')

        this.$router.push({
          name: 'index'
        })
      } else {
        this.$message.error('登录失败!')
      }
    },
    doRegister: function () {
      this.$router.push({
        name: 'Register'
      })
    },
    doResetting: function () {
      this.uname = ''
      this.upwd = ''
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
