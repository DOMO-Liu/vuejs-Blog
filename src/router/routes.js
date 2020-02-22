// 配置文件

export default [
	{
		// 首页路由配置
		path: '/vuejs-Blog/dist/',
		name: 'Home',
		alias: '/topics',
		// alias 选项用来指定别名,该路径的访问实际上就是对首页的访问。
		component: () => import('@/views/Home')
	},
	{
		//// 其他未配置的路由都跳转到首页
		path: '*',
		// 重定向
		redirect: '/vuejs-Blog/dist/'
	},
	{
		path: '/vuejs-Blog/dist/auth/register',
		name: 'Register',
		component: () => import('@/views/auth/Register')
	},
	{
		path: '/vuejs-Blog/dist/auth/login',
		name: 'Login',
		component: () => import('@/views/auth/Login')
	},
	{
		path: '/articles/create',
		name: 'Create',
		component: () => import('@/views/articles/Create'),
		meta: { auth: true }
	},
	{
		path: '/vuejs-Blog/dist/articles/:articleId/content',
		name: 'Content',
		component: () => import('@/views/articles/Content')
	},
	{
		path: '/vuejs-Blog/dist/articles/:articleId/edit',
		name: 'Edit',
		component: () => import('@/views/articles/Create'),
		meta: { auth: true }
	},
	{
		path: '/vuejs-Blog/dist/sort',
		name: 'Sort',
		component: () => import('@/views/articles/Sort')
	},
	{
		path: '/vuejs-Blog/dist/categories/:sortId',
		name: 'Categories',
		component: () => import('@/views/articles/Categories')
	},
	{
		path: '/vuejs-Blog/dist/friends',
		name: 'Friends',
		component: () => import('@/views/Friends')
	}
]

//如果不需要懒加载可以先引入组件,再配置
// import Register from '@/views/auth/Register'

// const routes = [
// 		{
//    		path: '/auth/register',
//    		name: 'Register',
// 			component: Register
// 		}
// ]