<template>
	<div class="panel-v">
		<Message :show.sync="msgShow" :type="msgType" :msg="msg"/>
		
		<div class="panel panel-default">
			<div class="panel-heading">
				<h3 class="panel-title">请注册</h3>
			</div>
			
			<!-- 外层元素添加一个data-属性，使其成为所有验证项的父级，逻辑处理需要 -->
			<div class="panel-body" data-validator-form>
				<div class="form-group">
					<label class="control-label">用户名</label>
					<!-- 表单验证指令 v-validator ，已src/directives/index.js中全局注册了，所以不需要在组件内引入和注册了-->
					<input v-model.trim="username" v-validator:input.required="{ regex: /^[a-zA-Z]+\w*\s?\w*$/, error: '用户名要求以字母开头的单词字符' }" type="text" class="form-control" placeholder="请填写用户名">
				</div>
				<div class="form-group">
					<label class="control-label">密码</label>
					<input id="password" v-model.trim="password" v-validator.required="{ regex: /^\w{6,16}$/, error: '密码要求 6 ~ 16 个单词字符' }" type="password" class="form-control" placeholder="请填写密码">
				</div>
				<div class="form-group">
					<label class="control-label">确认密码</label>
					<!-- v-model指令可以在表单 <input> 及 <textarea> 元素上创建双向数据绑定-->
					<!-- .trim 是一个修饰符,用于过滤用户输入的首尾空白字符 -->
					<input v-model.trim="cpassword" v-validator.required="{ target: '#password' }" type="password" class="form-control" placeholder="请填写确认密码">
				</div>
				<div class="form-group">
					<label class="control-label">图片验证码</label>
					<input v-model.trim="captcha" v-validator.required="{ title: '图片验证码' }" type="text" class="form-control" placeholder="请填写验证码">
				</div>
				<div class="thumbnail" title="点击图片重新获取验证码" @click="getCaptcha">
					<div class="captcha vcenter" v-html="captchaTpl"></div>
				</div>
				<span @click="register">
					<button type="submit" class="btn btn-lg btn-success btn-block">
						<i class="fa fa-btn fa-sign-in"></i>注册
					</button>
				</span>
			</div>
		</div>
	</div>
	
</template>

<script>
import createCaptcha from '@/utils/createCaptcha'	

export default {
	name: 'Register',
	data() {
		return {
			captchaTpl: '', // 验证码模板
			username: '', // 用户名
			password: '', // 密码
			cpassword: '', // 确认密码
			captcha: '', // 验证码
			msg: '', // 消息
			msgType: '', // 消息类型
			msgShow: false // 是否显示消息，默认不显示
		}
	},
	//生命周期钩子 created 在实例创建完成后被立即调用，能访问实例的数据对象和方法
	created() {
		this.getCaptcha()
	},
	methods: {
		//获取验证码
		getCaptcha() {
			const { tpl, captcha } = createCaptcha()
			this.captchaTpl = tpl
			this.localCaptcha = captcha
		},
		// 注册
		register(e) {
			//$nextTick 方法用于在下次 DOM 更新循环结束之后执行延迟回调
			//表单验证指令有为按钮添加一个 canSubmit 的属性，但 DOM 没有立即更新，所以需在 $nextTick 的延迟回调里，获取更新后的元素属性，此时的 canSubmit 才是正确的值。
			this.$nextTick(() => {
				const target = e.target.type === 'submit' ? e.target : e.target.parentElement
		
				if (target.canSubmit) {
					this.submit()
				}
			})
		},
		// 提交数据
		submit() {
			// 检查验证码是否匹配
			if (this.captcha.toUpperCase() !== this.localCaptcha) {
				this.showMsg('验证码不正确')
				this.getCaptcha()
			} else {
				// 用户信息
				const user = {
					name: this.username,
					password: this.password,
					// 根据用户名，从线上返回一张头像
					avatar: `https://api.adorable.io/avatars/200/${this.username}.png`,
					
				}
				// 比对里仓库的用户信息
				const localUser = this.$store.state.user

				if (localUser) {
					if (localUser.name === user.name) {
						this.showMsg('用户名已存在')
					} else {
						this.login(user)
					}
				} else {
					this.login(user)
				}
			}
		},
		// 登陆
		login(user) {
			// $store.dispatch分发 login 事件，以保存用户信息和登录
			this.$store.dispatch('login', user)
			this.showMsg('注册成功', 'success')
		},
		//控制消息栏的显示
		showMsg(msg, type = 'warning') {
			this.msg = msg
			this.msgType = type
			this.msgShow = false
		
			this.$nextTick(() => {
				this.msgShow = true
			})
		}
	}
}
</script>

<style>
</style>
