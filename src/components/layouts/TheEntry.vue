<template>
	<div v-if="auth" class="navbar-right">
		<span class="navbar-create">
			<a v-dropdown href="javascript:;">
				<i class="fa fa-plus text-md"></i>
			</a>
			<ul class="dropdown-menu">
				<li>
					<router-link to="/articles/create">
						<i class="fa fa-paint-brush text-md"></i>
						创作
					</router-link>
				</li>
			</ul>
		</span>
		<span class="navbar-login">
			<a v-dropdown href="javascript:;">
				<span v-if="user">
					<img v-if="user.avatar" :src="user.avatar" class="avatar-topnav">
					<span class= "avatar-topname" v-if="user.name">{{ user.name }}</span>
				</span>
				<span v-else>佚名</span>
				<span class="caret"></span>
			</a>
			<ul class="dropdown-menu">
				<li><a href="javascript:;" @click="logout"><i class="fa fa-sign-out text-md"></i>退出</a></li>
			</ul>
		</span>
	</div>
	<!-- 未登录，显示登录注册 -->
	<div v-else class="github-login">
		<router-link to="/vuejs-Blog/dist/auth/login" class="btn btn-default login-btn">
			<i class="fa fa-user"></i> 登 录
		</router-link>
		<!-- <router-link> 组件支持用户在具有路由功能的应用中导航，通过 <router-link> 上的 to 属性可以指定目标地址， -->
		<!-- 这里是一个字符串 /auth/register，对应路由配置中的 path -->
		<router-link to="/vuejs-Blog/dist/auth/register" class="btn btn-default login-btn">
			<i class="fa fa-user-plus"></i> 注 册
		</router-link>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name:'TheEntry',
	
	computed: {
		...mapState([
			'auth',
			'user'
		])
	},
	
	methods: {
		logout() {
			this.$store.dispatch('logout')
		}
	},
}
</script>

<style>
</style>
