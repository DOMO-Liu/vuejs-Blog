<template>
	<div class="">
		<div class="" v-for="article in articles" :key="article.id">
			<Content :articlePId="article.articleId"/>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Content from './articles/Content.vue'

export default {
	neme:'TheHeader',
	data () {
		return {
		}
	},
	computed:{
		...mapState([
			'articles'
		])
	},
	components:{
		Content
	},
}
</script>

<style>
</style>
