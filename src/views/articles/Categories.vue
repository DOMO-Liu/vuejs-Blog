<template>
	<div class="main-container categories-header ">
		<div class="content-left">
				<h1 class="article-header">
					{{sortId}}
				</h1>
			<ul>
				<li v-for="article in articles" class="blog-list-title" :key="article.id">
					<div>
						<div class="point"></div>
						<span class="meta">
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
	}
}	
</script>

<style>
</style>
