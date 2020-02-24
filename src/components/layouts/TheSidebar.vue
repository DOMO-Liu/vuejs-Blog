<template>
	<aside class="mian-sidebar">
		<div class="sidebar-header">
			<img src="../../assets/card.jpg" class="sidebar-img"/>
			<p class='sidebar-img-description'>你能看到我吗?</p>
			<div class="sidebar-nav">
				<span class="scaleup sidebar-nav-list" v-for="item in contacts" :key="item.id">
					<a v-if="item.link" :href="item.link" target="_blank" >
						<i :class="`fa fa-${item.icon} sidebar-nav-fa`">
							<span></span>
						</i>
					</a>
					<router-link v-else to="/vuejs-Blog/dist/friends" >
						<i :class="`fa fa-${item.icon} sidebar-nav-fa`">
							<span></span>
						</i>
					</router-link>
				</span>
				<div class="xxx">
					<i class="fa fa-heart"></i>
					正在建设中...(文章随机生成，但是并不影响展示)
				</div>
			</div>
		</div>
	</aside>
</template>

<script>
export default {
	name: 'TheSidebar',
	data() {
		return {
			contacts: [
				{
				icon: 'envelope',
				title: '反馈问题',
				link: 'mailto:719780122@qq.com'
				},
				{
				icon: 'github',
				title: 'GitHub',
				link: 'https://github.com/DOMO-Liu'
				},
				{
				icon: 'weixin',
				title: '加我微信',
				}
			],
		}
	}
}
</script>

<style>
</style>
