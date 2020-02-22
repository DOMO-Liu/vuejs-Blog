<template>
	<header class="navbar">
		<div class="navbar-top">
			<div class="navbar-top-site">
				<ul class="navbar-site-menu">
					<li v-for="item in navList" :key="item.id" 
					:class="{ navbaractive: titleCurrentPage === item.path}">
						<router-link :to="`/vuejs-Blog/dist/${item.path}`" >{{item.title}}</router-link>
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
	data() {
		return {
			navList:[
				{ id: 1, title: '首页', path: '' }, 
				{ id: 2, title: '归档', path: 'Sort' }, 
				{ id: 3, title: '关于我', path: 'Friends' },
			],
			titleCurrentPage: ''
		}
	},
	watch: {
		'$route'() {
			let path = this.$route.path.slice(17)
			if (path !== 'Sort' && path !== 'Friends') {
				this.titleCurrentPage = ''
			} else {
				this.titleCurrentPage = path
			}
		}
	},
	components: {
		TheEntry
	}
}
</script>

<style>
</style>
