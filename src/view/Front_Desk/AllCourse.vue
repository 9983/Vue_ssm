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

 <!-- 所有课程 -->
     <h1>全部课程</h1>
 <div style="  margin-top: 50px;" >

      <el-row>

      <el-col   v-for="(item,index) in CourseList" :span="5"    :key="index" :offset="1 > 0 ? 2 : 0"  style="margin-top: 10px;" >
        <el-card :body-style="{ padding: '0px' }"  shadow="hover">
          <!-- 图片-->
         <img :src="CourseList[index].courseUrl" class="image"   @click="ReadCourse(item)">
         <!-- 文字 spart -->
         <div>
           <h4>{{CourseList[index].courseName}}</h4>
         </div>
         <div style="padding: 14px;">
            <span>{{CourseList[index].courseBak}}</span>
            <div class="bottom clearfix" style="margin-bottom: -5px;">
              <time class="time" style="margin-left: -200px;margin-bottom: -10px;">课时:{{CourseList[index].courceCount}}</time>
              <el-button type="success" class="button" @click="BuyCourse(CourseList[index].courseId)"   style="width: 45px; height: 40px; margin-right: -5px; " >${{CourseList[index].courseMoney}}</el-button>
            </div>
          </div>

          <!--文字 end -->
        </el-card>
      </el-col>

      </el-row>

    </div>

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
      CourseList: [],
      text: null
    }
  },
  methods: {

    SelectCourseLike: function () {
      // 提交
      console.log('前台:' + this.text)
      this.axios.post(this.axios.urls.SSMCOURSE_SELECTCOURSELIKENAME, {
        CourseName: this.text
      }).then(resp => {
        this.CourseList = resp.data
        for (var i = 0; i < this.CourseList.length; i++) {
          console.log(this.CourseList[i])
        }
      }).catch((resp) => {
        console.log(resp)
      })
    },
    /* 查看事件 */
    ReadCourse: function (item) {
      console.log('查看事件:' + item)
      this.$router.push({
        name: 'ReadCourse', params: {item: item}
      })
    },
    /* 购买 */
    BuyCourse: function (courseId) {
      console.log('购买事件:' + courseId)
    }
  },
  // 在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
  created () {
    this.SelectCourseLike()
  },
  // 在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
  mounted () {

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
