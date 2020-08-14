<template>
  <div>
    <!-- 导航条 -->
    <el-menu    router="true" style="margin-top: -50px;" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="index" style="margin-left: 400px;" >首页</el-menu-item>

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

 <!-- 热门课程 -->
 <!-- <div style="  margin-top: 50px;">

      <h1></h1>

      <el-row style="margin-top: 50px; margin-right: 100px;">
        <el-col  :span="5"   :key="1" :offset="1 > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }"  shadow="hover">
            <img :src="sss[0]" class="image" >
            <div style="padding: 14px;">
            <div> <font size="5" style=" ">英语语法</font>  <span>刘教授</span> </div>
              <span><font size="2">{{ssstest[0]}}</font></span>
              <div class="bottom clearfix">
                <time class="time">{{date}}</time>
                <el-button type="success" style="width: 55px; height: 40px;"  class="button">$80</el-button>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col  :span="5"   :key="2" :offset="1 > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }"  shadow="hover">
            <img :src="sss[1]" class="image"  >
            <div style="padding: 14px;">
              <span>{{ssstest[1]}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ date }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col  :span="5"   :key="3" :offset="1 > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }"  shadow="hover">
            <img :src="sss[2]" class="image" >
            <div style="padding: 14px;">
              <span>{{ssstest[2]}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ date }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col  :span="5"   :key="4" :offset="1 > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }"  shadow="hover">
           <img :src="sss[3]" class="image" >
           <div style="padding: 14px;">
              <span>{{ssstest[3]}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ date }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col  :span="5"   :key="5" :offset="1 > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }"  shadow="hover">
           <img :src="sss[3]" class="image" >
           <div style="padding: 14px;">
              <span>{{ssstest[3]}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ date }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col  :span="5"   :key="6" :offset="1 > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }"  shadow="hover">
           <img :src="sss[3]" class="image" >
           <div style="padding: 14px;">
              <span>{{ssstest[3]}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ date }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col  :span="5"   :key="4" :offset="1 > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }"  shadow="hover">
           <img :src="sss[3]" class="image" >
           <div style="padding: 14px;">
              <span>{{ssstest[3]}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ date }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>

      </el-row>

    </div> -->

    <el-input v-model="text"></el-input>
    <el-button @click="SelectCourseLike()" type="primary">查询</el-button>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      date: new Date().getTime(),
      sss: [
        '../../../static/img/bg-img/c1.jpg',
        '../../../static/img/bg-img/c2.jpg',
        '../../../static/img/bg-img/c3.jpg',
        '../../../static/img/bg-img/c4.jpg'],
      ssstest: [
        'Klng ipsum dolor坐下，一直保持良好状态。Fusce enim nulla，mollis eu metus in，人马座',
        'Lorem ipsum dolor坐下，一直保持良好状态。Fusce enim nulla，mollis eu metus in，人马座',
        'Gink ipsum dolor坐下，一直保持良好状态。Fusce enim nulla，mollis eu metus in，人马座',
        'Sping ipsum dolor坐下，一直保持良好状态。Fusce enim nulla，mollis eu metus in，人马座'

      ],
      imgList: [
        {url: require('../../../static/img/blog-img/山.jpg')},
        {url: require('../../../static/img/bg-img/e2.jpg')},
        {url: require('../../../static/img/bg-img/e3.jpg')}
      ],
      list: '',
      text: null

    }
  },
  methods: {

    SelectCourseLike: function () {
      // 提交
      console.log('前台:' + this.text)

      this.axios.post(this.axios.urls.SSMCOURSE_SELECTCOURSELIKENAME, {

        userId: this.text
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
 .time {
     font-size: 13px;
     color: #999;
   }

   .bottom {
     margin-top: 13px;
     line-height: 12px;
   }

   .button {
     padding: 0;
     float: right;
   }

   .image {
     width: 100%;
     display: block;
   }

   .clearfix:before,
   .clearfix:after {
       display: table;
       content: "";
   }

   .clearfix:after {
       clear: both
   }

    .el-row {
       margin-bottom: 20px;
       &:last-child {
         margin-bottom: 0;
       }
     }
     .el-col {
       border-radius: 4px;
     }
     .bg-purple-dark {
       background: #99a9bf;
     }
     .bg-purple {
       background: #d3dce6;
     }
     .bg-purple-light {
       background: #e5e9f2;
     }
     .grid-content {
       border-radius: 4px;
       min-height: 36px;
     }
     .row-bg {
       padding: 10px 0;
       background-color: #f9fafc;
     }

   .el-carousel__item h3 {
     color: #475669;
     font-size: 18px;
     opacity: 0.75;
     line-height: 300px;
     margin: 0;
   }

   .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
   }

   .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
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
