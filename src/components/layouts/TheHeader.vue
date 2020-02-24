<template>
	<header class="navbar">
		<div class="navbar-top-color">
			<div class="navbar-top collapse">
				<div class="navbar-top-menu">
					<span v-for="item in navList" :key="item.id" 
					:class="{ navbarActive: titleCurrentPage === item.path }">
						<router-link :to="`/vuejs-Blog/dist/${item.path}`" > {{item.title}}</router-link>
					</span>
					<TheEntry class="navbar-login"/>
				</div>
			</div>
		</div>
		
		<div class="navbar-bottom">
			<div class="brand">
				<div class="site-title">
					<div class="animate" >
						<span v-for="item in title" :key="item.id">
							<svg>
								<use :xlink:href="`#stroke${item}`">
								</use>
							</svg> 
						</span>
					</div>
					<br />
					<div class=" animate-two" >
						<span v-for="item in title" :key="item.id">
							<svg>
								<text :id="`stroke${item}`">{{item}}</text>
							</svg> 
						</span>
					</div>
				</div>
			</div>
			<div class="navbar-site-master">
				<img class="navbar-bottom-png scaleup" src='../../assets/logo.png' />
				<h2 class="site-master-description scaleup">写代码是热爱，写到世界充满爱！</h2>
			</div>
			
		</div>
	</header>
</template>
 
<script>
import TheEntry from './TheEntry.vue'
import { mapState } from 'vuex'

export default {
	neme:'TheHeader',
	data() {
		return {
			navList:[
				{ id: 1, title: '首页', path: '' }, 
				{ id: 2, title: '归档', path: 'Sort' }, 
				{ id: 3, title: '关于我', path: 'Friends'},
			],
			titleCurrentPage: '',
			title: ['D', 'O', 'M', 'O']
		}
	},
	computed: {
		...mapState([
			'auth',
			'user'
		])
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
