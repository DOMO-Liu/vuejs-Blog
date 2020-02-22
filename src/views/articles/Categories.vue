<template>
	<div class="blog-sort content-left blog-container">
		<div class="categories-header">
			<h1 class="categories-header-title">
				{{sortId}}
			</h1>
		</div>
		<ul>
			<li v-for="article in articles" class="blog-list-title" :key="article.id">
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
	</div>
</template>

<script>
	/* eslint-disable no-unused-labels */
export default {
	data() {
		return {
			articles: [],
			sortId: '',
		}
	},
	beforeRouteEnter(to, from, next) {
		next(vm => {
			vm.setDataByParams(to.params)
			
		})
	},
	methods: {
		setDataByParams(params) {
			this.sortId = params.sortId
			this.articles = this.$store.getters.getArticlesBySort(params.sortId)
		}
	},
}	
</script>

<style>
</style>
