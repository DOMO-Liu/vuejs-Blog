<template>
	<header class="navbar">
		<div class="navbar-top">
			<div class="navbar-top-site">
				<ul class="navbar-site-menu">
					<li v-for="item in navList" :key="item.id">
						<router-link :to="`/vuejs-Blog/dist/${item.path}`">{{item.title}}</router-link>
					</li>
				</ul>
				<div class="navbar-right">
					<!-- 注册 -->
					<TheEntry />
				</div>
			</div>
		</div>
		
		<div class="navbar-site-master">
			<img alt="navbar-site-master" class="scaleup" src='../../assets/logo.png' />
			<h2 class="site-master-description scaleup">喔哟，崩溃啦！</h2>
		</div>
	</header>
</template>

<script>
import TheEntry from './TheEntry.vue'

export default {
	neme:'TheHeader',
	data () {
		return {
			navList:[{ title: '首页', path: 'Home' }, { title: '归档', path: 'Sort' }, { title: '关于我', path: 'Friends' }]
			
		}
	},
	components:{
		TheEntry
	},
}
</script>

<style>
</style>
