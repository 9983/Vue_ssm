<template>
  <div>
    <!-- 导航条 -->
    <el-menu    router="true" style="margin-top: -50px;"  class="el-menu-demo" mode="horizontal" >
      <el-menu-item index="/" style="margin-left: 400px;" >首页</el-menu-item>

      <!-- 课程展示  -->
      <el-submenu index="2" >
        <template slot="title">热门课程</template>
        <el-menu-item index="AllCourse">热门课程</el-menu-item>
        <el-menu-item index="AllCourse">推荐课程</el-menu-item>
        <el-menu-item index="AllCourse">所有课程</el-menu-item>
      </el-submenu>

      <!-- 教师展示 -->

        <el-menu-item index="3">优秀教师</el-menu-item>

      <!-- 我的学习 登录后显示 -->

        <el-menu-item index="4" >我的课程</el-menu-item>

      <!-- 个人信息 登录后显示 -->

      <el-submenu index="5">
        <template slot="title">个人信息</template>
      </el-submenu>

      <!-- 意见反馈  登录后展示 -->

      <el-submenu index="6">
        <template slot="title">意见反馈</template>
      </el-submenu>

      <!-- 加入我们 -->

        <el-menu-item index="7">加入我们</el-menu-item>

      <!-- 消息中心 登陆后展示 -->
      <!-- <el-menu-item index="8" disabled>消息中心</el-menu-item> -->
    </el-menu>
    <div class="line"></div>
    <!-- 面包屑-->
    <div style="height: 50px;">

      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-top: 30px;">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/AllCourse'}">全部课程</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/ReadCourse'}">课程详情</el-breadcrumb-item>
      </el-breadcrumb>

    </div>

    <!-- 主图展示 -->
    <div  id="back" style="height: 550px;">

        <el-row style="width: 400px;height: 500px; margin: auto;">
          <el-col      :key="1" :offset="1 > 0 ? 2 : 0"  style="margin-top: 10px; margin-top: 175px;" >
            <el-card :body-style="{ padding: '0px' }"  shadow="hover">
              <!-- 评分-->
              <el-rate style="margin-top: 30px;"
                v-model="score"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
              </el-rate>
             <!-- 文字 spart -->
             <div  style="margin-top: 25px;">
               <h1>{{a.courseName}}</h1>
             </div>
             <!-- 教师 -->
            <font size="3"><a href="#" style="text-decoration:none; color: #B3D7FF"   > 莎拉·帕克（Sarah Parker)</a></font>
              <!--文字 end -->
             <br /> <br /> <br /> <br />
            </el-card>
          </el-col>
        </el-row>

    </div>

    <!-- 选项卡内容 -->
    <div style="margin-top: 100px; margin-left: 450px;width: 700px;">


         <el-button type="primary" style="width: 400px; ">购买课程 &nbsp; ${{a.courseMoney}}</el-button>

        <el-row :gutter="12" style="margin-top: 50px;" >

          <el-col :span="8" @click.native="ChangnCard(1)">
            <el-card shadow="hover">
              课程描述
            </el-card>
          </el-col>

          <el-col :span="8" @click.native="ChangnCard(2)">
            <el-card shadow="hover">
              课程评分
            </el-card>
          </el-col>

          <el-col :span="8" @click.native="ChangnCard(3)">
            <el-card shadow="hover">
              课程会员
            </el-card>
          </el-col>
        </el-row>




        <!--课程描述  -->
        <el-card class="box-card" style="margin-top: 50px; width: 700px;" v-show="card_show1">
          <div slot="header" class="clearfix" style="text-align: left;">
            <span><h2>关于本课程</h2></span>
          </div>
          <div style="text-align: left;"><font style="color: #7F7F7F;">{{a.courseBak}}</font></div>

        </el-card>

        <!--课程描述  -->
        <el-card class="box-card" style="margin-top: 50px; width: 700px;" v-show="card_show1">
          <div slot="header" class="clearfix" style="text-align: left;">
            <span><h2>所有讲师</h2></span>
          </div>
            <div v-for="index in 5">

             <el-card  class="box-card" style="margin-top: 10px; width: 500px;height: 120px ; margin-left: 70px;" v-show="card_show1">

              <img src="../../../static/img/diy-img/weidenglu.png" class="image" style="width: 120px; margin-left: -379px; margin-top: -20px;" />

             </el-card>
            </div>

        </el-card>

        <!-- 课程评分 -->

        <!-- 评分-->
        <el-card class="box-card" style="margin-top: 50px; width: 700px;" v-show="card_show2">
          <div slot="header" class="clearfix" style="text-align: left;">
            <span>课程评论</span>
          </div>
           <div style="text-align: left;"><font style="color: #7F7F7F;">{{a.courseBak}}</font></div>
        </el-card>

        <el-card class="box-card" style="margin-top: 50px; width: 700px;" v-show="card_show2">
          <div slot="header" class="clearfix" style="text-align: center;">

             <!-- 评分-->
             <div> <h1>{{score}}</h1> </div>
            <el-rate style="margin-top: 30px;"
              v-model="score"
              disabled
              show-score
              text-color="#ff9900"
              score-template="">
            </el-rate>
          </div>
        </el-card>

        <!-- 评论 -->
        <el-card class="box-card" style="margin-top: 50px; width: 700px;" v-show="card_show2">

        </el-card>

        <el-card class="box-card" style="margin-top: 50px; width: 700px;" v-show="card_show2">

        </el-card>

        <!-- 课程会员 -->

        <el-card class="box-card" style="margin-top: 50px; width: 700px;" v-show="card_show3">
          <div slot="header" class="clearfix" style="text-align: left;">
            <span>课程会员</span>
          </div>

        </el-card>

    </div>


  <!--  <div style="margin-top: 1000px;">

      --------
    </div> -->

  </div>
</template>

<script>

export default{

  data: function () {
    return {

      a: '111',
      score: 3.7,
      card_show1: true,
      card_show2: false,
      card_show3: false,
      url: 'static/img/diy-img/weidenglu.jpg'
    }
  },
  methods: {

    // 获取上个页面传递的id
    getCourseId: function () {
      let item = this.$route.params.item
      this.a = item
    },
    // 改变面板方法
    ChangnCard: function (index) {
      this.card_show1 = false
      this.card_show2 = false
      this.card_show3 = false

      if (index == 1) {
        this.card_show1 = true
      } else if (index == 2) {
        this.card_show2 = true
      } else if (index == 3) {
        this.card_show3 = true
      }
    }

  },
  created () {
    this.getCourseId()
  },
  mounted () {
    let back = document.getElementById('back')
    back.style.backgroundImage = 'url(' + this.a.courseUrl + ')'
    back.style.backgroundSize = '100%'
  }

}

</script>

<style>

   .text {
      font-size: 14px;
    }

    .item {
      margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both
    }

    .box-card {
      width: 480px;
    }

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
