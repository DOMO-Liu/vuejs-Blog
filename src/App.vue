<template>
  <div id="wrap">
    <TheHeader />
	<div id="main-container" class="main-container">
		<TheSidebar ref="Sidebar"/>
		<router-view />
	</div>
	<TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue'
import TheFooter from './components/layouts/TheFooter.vue'
import TheSidebar from './components/layouts/TheSidebar.vue'

export default {
	name: 'App',
	components: {
		TheHeader,
		TheFooter,
		TheSidebar
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll, true)
		let articles = [
			{
				uid: 1,
				articleId: 26,
				title: "使用说明",
				content: "注册登录之后可以添加、修改、删除文章，修改标签↵↵显示文章详细的字数，发表时间，标签等功能",
				date: "2020-02-22T06:00:00.343Z",
				wordcount: 45,
				sortId: "日记本",
				year: 2020,
			},
			{
				uid: 1,
				articleId: 25,
				title: "《JavaScript高级程序设计》读书笔记(1-6)",
				content: "笔记",
				date: "2020-02-21T15:41:22.273Z",
				wordcount: 11096,
				sortId: "日记本",
				year: 2020,
			},
			{
				uid: 1,
				articleId: 5,
				title: "寂静之城 (The Silence City)",
				content: "文章",
				date: "2019-11-25T16:00:00.000Z",
				wordcount: 29343,
				sortId: "分享境",
				year: 2019,
			},
			{
				uid: 1,
				articleId: 4,
				title: "慢慢的 就没有了 就像从未存在过",
				content: "文章",
				date: "2018-11-25T16:00:00.000Z",
				wordcount: 3007,
				sortId: "分享境",
				year: 2018,
			}
		]
		for (let i = 0; i < articles; i++){
			let arr = articles[i]
			this.$store.dispatch('post', { arr })
		}
		
	},
	methods: {
		handleScroll() {
			if (window.scrollY > 300) {
				this.$refs.Sidebar.$el.style.position = 'fixed'
				this.$refs.Sidebar.$el.style.top = '10px'
				this.$refs.Sidebar.$el.style.left = '63%'
				this.$refs.Sidebar.$el.style.width = '17%'
			} else {
				this.$refs.Sidebar.$el.style.position = ''
				this.$refs.Sidebar.$el.style.top = ''
				this.$refs.Sidebar.$el.style.left = ''
				this.$refs.Sidebar.$el.style.width = ''
			}
		}
	}
}
</script>

<style lang="scss">
$fa-font-path: "~font-awesome/fonts/";
@import "~font-awesome/scss/font-awesome";
@import url("./styles/mian.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
};
// Markdown编辑器 simplemde 样式
@import 'simplemde/dist/simplemde.min';
// 语法高亮 highlight 样式
@import 'highlight.js/styles/paraiso-dark';
</style>
