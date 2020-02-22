<template>
	<div class="">
		<div class="" v-for="article in articles" :key="article.articleId">
			<Content :articlePId="article.articleId"/>
		</div>
		<div class="pager-footer">
			<Pagination :currentPage="currentPage" :total="total" :pageSize="pageSize" :onPageChange="changePage" />
		</div>
	</div>
</template>

<script>
/* eslint-disable no-unused-vars */
import Content from './articles/Content.vue'

export default {
	neme:'TheHeader',
	data () {
		return {
			articles: [],
			total: 0, // 文章总数
			pageSize: 5, // 每页条数
		}
	},
	computed:{
		// 当前页，从查询参数 page 返回
		currentPage() {
			return parseInt(this.$route.query.page) || 1
		}
	},
	components:{
		Content
	},
	beforeRouteEnter(to, from, next) {
		next(vm =>{
			vm.setDataByFilter()
		})
		
	},
	watch: {
		// 监听 '$route'，在查询参数变化后，设置相关数据
		'$route'() {
			this.setDataByFilter()
		}
	},
	methods:{
		setDataByFilter() {
			// 每页条数
			const pageSize = this.pageSize
			// 当前页
			const currentPage = this.currentPage
			//所有文章
			const allArticles = this.$store.state.articles
			// 文章总数
			this.total = allArticles.length
			//当前页面文章
			this.articles=allArticles.slice(pageSize * (currentPage - 1), pageSize * currentPage)
		},
		// 回调，组件的当前页改变时调用
		changePage(page) {
			// 在查询参数中混入 page，并跳转到该地址
			// 混入部分等价于 Object.assign({}, this.$route.query, { page: page })
			this.$router.push({ query: { ...this.$route.query, page } })
		}
	}
}
</script>

<style>
</style>
