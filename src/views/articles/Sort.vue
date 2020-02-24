<template>
	<div class="main-container">
		<div class="content-left sort">
			<h1 class="article-header blog-sort">
				归档 
			</h1>
			<div class="blog-sort-content">
				<div >
					<h2 class="sort-title">分类</h2>
					<ul class="blog-all-title ">
						<li v-for="item in creat" :key="item.id">
							<a @click="setArticle(item.sort)"  href="javascript:;">
								{{item.sort}}
							</a>
							({{item.num}})
						</li>
					</ul>
				</div>
				<ul v-for="item in years" :key="item.id">
					<h2>{{ item }}</h2>
					<li v-for="article in articlesort[item]" class="blog-list-title" :key="article.id">
						<div>
							<div class="point"></div>
							<span>
								<span class="blog-title-timeago">{{ article.date | moment("MM") }}-{{ article.date | moment("DD") }}</span>
							</span>
							<router-link :to="`/vuejs-Blog/dist/articles/${article.articleId}/content`" class="blog-title-title">
								{{ article.title }}
							</router-link>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
/* eslint-disable no-unused-vars */
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
		this.years = years.sort().reverse()
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
