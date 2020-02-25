import Vue from 'vue'
import Vuex from 'vuex'
import ls from '../utils/localStorage'
import router from '../router'
import * as moreActions from './actions'
import * as moreGetters from './getters'

Vue.use(Vuex)
/* eslint-disable no-unused-vars */
const state = {
	user: ls.getItem('user'),
	auth: ls.getItem('auth'),
	articles: ls.getItem('articles'),
	// origin: location.origin
	// origin:	location.origin.indexOf('github.io') !== -1 ? `${location.origin}/vuejs-Blog/dist` : location.origin 
}

const mutations = {
	// 更新用户账户
	UPDATE_USER(state, user) {
		state.user = user
		ls.setItem('user', user)	
	},
	// 添加 UPDATE_AUTH 来更改当前用户的登录状态
	UPDATE_AUTH(state, auth) {
		state.auth = auth
		ls.setItem('auth', auth)
	},
	// 更改所有文章的事件类型
	UPDATE_ARTICLES(state, articles) {
		state.articles = articles
		ls.setItem('articles', articles)
	},
}

const actions = {
	//action 的第一个参数是一个与仓库实例具有相同方法和属性的 context 对象，
	//可以从 context.state 访问仓库的 state，使用 context.commit 提交一个事件类型
	//登录功能 context.commit,解包
	login({ commit }, user) {
		if (user) commit('UPDATE_USER', user)
		commit('UPDATE_AUTH', true)
		// push 是路由的一个方法，用来跳转到一个新的地址，第一个参数是字符串或者一个描述地址对象
		router.push('/')
	},
	logout({ commit }) {
		commit('UPDATE_AUTH', false)
		router.push({ name: 'Home'})
	},
	// 更新个人信息
	updateUser({ state, commit }, user) {
		// 获取仓库的个人信息
		const stateUser = state.user
	
		// 简单的数据类型判断
		if (stateUser && typeof stateUser === 'object') {
			// 合并新旧个人信息，等价于 user = Object.assign({}, stateUser, user)
			user = { ...stateUser, ...user }
		}
		commit('UPDATE_USER', user)
	},
	...moreActions
}

// 添加 getters
const getters = {
	// 第一参数是 state，因为要传 id，所以这里返回一个函数
	getArticleById: (state, getters) => (id) => {
		// // 从仓库获取所有文章
		let articles = state.articles
		// 使用派生状态 computedArticles 作为所有文章
		// let articles = getters.computedArticles()
		
		// 所有文章是一个数组时
		if (Array.isArray(articles)) {
			// 传进来的 id 和文章的 articleId 相同时，返回这些文章
			articles = articles.filter(article => parseInt(id) === parseInt(article.articleId))
			// 根据文章长度，返回文章或者 null
			return articles.length ? articles[0] : null
		} else {
			return null
		}
	},
	...moreGetters
}



//创建一个 store（仓库）实例
const store = new Vuex.Store({
	state, 	//state：共享的状态,不能直接更改状态,但是可以像 store.state.user 这样访问一个状态
	// 注册 getters
	getters,
	mutations,	//mutations：更改状态的方法，可以在这里更改状态，
				//调用方法是用 store.commit('UPDATE_USER', user) 这样提交UPDATE_USER事件类型，不能包含异步操作；
	actions,	//类似于 mutations，不在这里直接更改状态，而是提交前面的 mutation，
				//调用方法是像 store.dispatch('login') 这样分发一个事件，这里可以包含异步操作；
})

export default store