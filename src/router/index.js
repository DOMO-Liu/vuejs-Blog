import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

//引入 vue-router 后，需要使用 Vue.use 来使用插件
Vue.use(Router)

//创建一个新的路由实例
/* eslint-disable no-unused-vars */
const router = new Router({
	//mode：路由模式，默认值 'hash' 使用井号（ # ）作路由，
	//值 'history' 可利用 History API 来完成页面跳转且无须重新加载
	mode: 'history',
	//linkExactActiveClass 的值是一个类名,用来添加到与当前路由对应的 <router-link> 上，
	//以显示当前精确激活的 <router-link>,其默认值是 'router-link-exact-active',改为 'active' 以利用 Bootstrap 的激活样式。
	linkExactActiveClass: 'active',
	// 指定滚动行为
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
		// 有锚点时，滚动到锚点
			return { selector: to.hash }
		} else if (savedPosition) {
			// 有保存位置时，滚动到保存位置
			return savedPosition
		} else {
			// 默认滚动到页面顶部
			return { x: 0, y: 0 }
		}
	},
	//routes 引入的具体的路由配置列表
	routes
})

router.beforeEach((to, from, next) => {
	const app = router.app
	const store = app.$options.store
	const auth = store.state.auth
	const articleId = to.params.articleId

	if (auth && to.path.indexOf('/auth/') !== -1 ||
			(!auth && to.meta.auth) ||
			// 有 articleId 且不能找到与其对应的文章时，跳转到首页
			(articleId && !store.getters.getArticleById(articleId))
	) {
		next('/')
	} else {
		next()
	}
})

export default router