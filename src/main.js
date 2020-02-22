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
