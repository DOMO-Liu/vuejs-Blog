<template> 
  <div id="wrap"> 
    <TheHeader /> 
	<div id="main">
		<router-view />
		<TheSidebar ref="Sidebar" class="sidebar" />
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
	},
	methods: {
		//右侧边栏浮动
		handleScroll() {
			console.log(this.$refs.Sidebar.$el.style.top)
			if (window.scrollY > 470) {
				this.$refs.Sidebar.$el.style.top = 100
				console.log(this.$refs.Sidebar.$el.style.top)
			}
		}
	}
}
</script>

<style lang="scss">
$fa-font-path: "~font-awesome/fonts/";
@import "~font-awesome/scss/font-awesome";
@import url("./styles/mian1.css");
@import url("./styles/font.css");
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
