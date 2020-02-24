<template>
	<footer class="footer">
		<div class="footer-img"></div>
		<div class="footer-contact">
			<p class="footer-top-xsm">{{ description }}</p>
			<span v-for="item in contacts" :key="item.id"  class="footer-contact-icon">
				<a v-if="item.link" :href="item.link" :class="`fa fa-${item.icon} footer-icon`"
				target="_blank" >
				</a>
				<router-link v-else  to="/vuejs-Blog/dist/friends"
				:class="`fa fa-${item.icon} footer-icon`"> 
				</router-link>
			</span>
			<div class="footer-des">
				Designed by
				<span>❤</span>
				<a href="https://github.com/DOMO-Liu" target="_blank">DOMO</a>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	neme: 'TheFooter',
	data() {
		return {
			description: '本站记录我前端之旅的沿途风景!' ,
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
			]
		}
	}
}
</script>

<style>
</style>
