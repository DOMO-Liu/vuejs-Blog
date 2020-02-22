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
