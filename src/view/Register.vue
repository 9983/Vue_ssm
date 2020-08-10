<template>
	<div class="login-wrap">
		<el-form label-width="100px" class="demo-ruleForm login-container">
			<h3 class="title">用户注册</h3>
			<el-form-item label="用户名称:">
				<el-input v-model="uname" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="用户密码:">
				<el-input type="password" v-model="upwd" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="确认密码:">
				<el-input type="password" v-model="upwd2" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="doRegister()" style="width: 250px;" round plain>提交</el-button>
			</el-form-item>
			<el-form-item>
				<el-link type="primary" @click='dologin()'>返回>></el-link>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		name: 'Register',
		data() {
			return {
				uname: null,
				upwd: null,
				upwd2: null
			}
		},
		methods: {
			doRegister: function() {
				if (this.upwd != this.upwd2) {
					this.$message.error("两次密码输入不一致！");
				} else {
					let url = this.axios.urls.SERVER + this.axios.urls.SYSTEM_USER_DOREG;
					this.axios.post(url, {
						uname: this.uname,
						upwd: this.upwd,
					}).then((response) => {
						if (response.data != null) {
							this.$message.success("注册成功！");
						}
					}).catch((response) => {
						console.log(response);
					});
				}
			},
			dologin: function() {
				this.$router.push({
					name: 'Login'
				});
			}
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
