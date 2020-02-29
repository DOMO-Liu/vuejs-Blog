import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入全局验证指令,下面是缩写 ./directives/index.js
import './directives'
//全局组件
import './components'
import store from './store'
// 过滤器
import './filters'
//引入测试文件
import { mockArticles } from './mock/data'
import ls from './utils/localStorage'


/* eslint-disable no-unused-vars */
const AddMockData = (() => {
	// 是否加入测试数据
	const isAddMockData = true
	// 用户数据
	let userArticles = ls.getItem('articles')

	if (Array.isArray(userArticles)) {
		userArticles = userArticles.filter(article => parseInt(article.uid) === 1)
	} else {
		userArticles = []
	}

	if (isAddMockData) {
		// 合并用户数据和测试数据，使用合并值作为所有文章
		store.commit('UPDATE_ARTICLES', [...userArticles, ...mockArticles(15)])
	} else {
		// 使用用户数据作为所有文章
		store.commit('UPDATE_ARTICLES', userArticles)
	}
})()

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
	router,
	store,
	created() {
		console.log('this.$options',this.$options,) // => '#app'
	},
	render: h => h(App),
}).$mount('#app')
   