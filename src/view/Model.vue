<template>
  <div  >
    <h1>我是首页</h1>
    {{date}}

  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      date: new Date().getTime()

      }

    }
  },
  methods: {



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
