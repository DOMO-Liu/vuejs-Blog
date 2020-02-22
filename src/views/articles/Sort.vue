<template>
	<div class="blog-sort content-left blog-container">
		<header class="blog-header">
			<h1 class="article-header blog-sort-header">
				归档 
			</h1>
			<h2 class="blog-sort-header" ref="head">
				分类
				<ul class="blog-all-title ">
					<li v-for="item in creat" :key="item.id">
						<a @click="setArticle(item.sort)"  href="javascript:;">
							{{item.sort}}
						</a>
						({{item.num}})
					</li>
				</ul>
			</h2>
		</header>
		<h2>
			<ul class="blog-sort-header" v-for="item in years" :key="item.id">
				<div class="blog-list-year">{{ item }}</div>
				<!-- 使用 v-for 指令渲染文章列表 -->
				<li v-for="article in articlesort[item]" class="blog-list-title" :key="article.id">
					<div>
						<div class="point"></div>
						<span class="meta">
							<span class="blog-title-timeago">{{ article.date | moment("MM") }}-{{ article.date | moment("D") }}</span>
						</span>
						<router-link :to="`/vuejs-Blog/dist/articles/${article.articleId}/content`" class="blog-title-title">
							{{ article.title }}
						</router-link>
					</div>
				</li>
			</ul>
		</h2>
	</div>
</template>

<script>
/* eslint-disable no-unused-vars */
// 引入 mapState 辅助函数
import { mapState } from 'vuex'

export default {
	name: 'List',
	data() {
		return{
			creat: [
				{ sort: '日记本', num: 0 },
				{ sort: '闲言语', num: 0 },
				{ sort: '分享境', num: 0 },
				{ sort: '创作集', num: 0 },
				{ sort: '事件薄', num: 0 },
			],
			years: [],
			articlesort: [],
		}
	},
	computed: {
		...mapState([
			'articles',
		]),
		
	},
	created() {
		// 数据初始化
		let creat = this.creat
		let year = []
		let articles = this.articles
		let articlessort = {}
		for (let i = 0; i < articles.length; i++) {
			// 保存年份
			year.push(articles[i].year)
			for (let n = 0; n < creat.length; n++) {
				if (articles[i].sortId === creat[n].sort) {
					creat[n].num += 1
					break
				}
			}
		}
		//去重
		let years = []
		for(let i = 0; i < year.length; i++) {
			if(years.indexOf(year[i]) < 0) {
				years.push(year[i])
			} 
		}
		
		for (let i = 0; i < years.length; i++) {
			articlessort[years[i]] = this.articlesYesrs(years[i])
		}
		//对应年份的文章
		this.articlesort = articlessort
		//标签
		this.creat = creat
		//年份
		this.years = years
	},
	methods: {
		articlesYesrs(item) {
			let articles = this.articles
			let fiflter =[]
			for (let i = 0; i < articles.length; i++) {
				if (articles[i].year === item) {
					fiflter.push(articles[i])
				}
			}
			return fiflter
		},
		setArticle(sortId) {
			this.$router.push({ name: 'Categories', params: { sortId: sortId } })
		}
	},
}
</script>

<style scoped>

</style>
