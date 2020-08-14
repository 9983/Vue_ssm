/**
 * 对后台请求的地址的封装，URL格式如下：
 * 模块名_实体名_操作
 */
export default {
  'SERVER': 'http://localhost:8080/IDEA_WorkSpace', // 服务器
  'SYSTEM_USER_DOLOGIN': '/user/username', // 登陆
  'SYSTEM_USER_DOREG': '/user/AddUser', // 注册
  'SSM_USER_SELECTALL': '/SsmUser/selectUserAll', // 查询所有用户
  'SSMUSER_SELECTUSERBYID': '/SsmUser/selectUserByID', // 根据ID查询单个用户对象
  'SSMCOURSE_SELECTCOURSELIKENAME': '/SsmCourse/SelectCourseLikeName',// 模糊查询课程
  'getFullPath': k => { // 获得请求的完整地址，用于mockjs测试时使用
    return this.SERVER + this[k]
  }
}
