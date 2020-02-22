<template>
	<footer class="footer">
		<div class="footer-img"></div>
		<div class="footer-contact">
			<p class="padding-top-xsm">{{ description }}</p>
			<div class="footer-contact">
				<div v-for="item in contacts" :key="item.id" class="footer-icon ">
					<a v-if="item.link" :href="item.link" :style="contactStyle" target="_blank"  v-title="item.title">
						<i :class="`fa fa-${item.icon}`"></i>
					</a>
					<router-link v-else  to="/vuejs-Blog/dist/friends" :style="contactStyle" v-title="item.title">
						<i :class="`fa fa-${item.icon}`" ></i>
					</router-link>
				</div>
				<span style="font-size:0.9em">Designed by
					<span style="color: #e27575;font-size: 14px;">❤</span>
					<a href="https://github.com/DOMO-Liu" target="_blank" style="color:inherit">DOMO</a>
				</span>
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
			],
			//设置图标的右内边距据
			contactStyle: {
				paddingRight: '8px',
			},
		}
	}
}
</script>

<style>
</style>
