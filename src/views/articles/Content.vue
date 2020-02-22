<template>
	<div class="blog-container content-left">
		<div class="post-date">
			<div class="post-date-month">{{ date | moment("MMM") }}</div>
			<div class="post-date-day">{{ date | moment("D") }}</div>
		</div>
		<div class="post-badge">
			<a @click="setArticle(sortId)"  href="javascript:;">{{sortId}}</a> 
		</div>
		<div class="blog-pages">
			<div class="post-block">
				<header class="article-header">
					<h1 class="article-header-title">{{ title }}</h1>
					<div class="article-header-meta">
						<span class="article-header-time">
							<i class="fa fa-clock-o"></i>发表于 {{ date | moment('L') }}
						</span>
						<span class="dividers">
							•
						</span>
						<span class="article-header-wordcount">
							<i class="fa fa-bar-chart"></i>字数统计 {{ wordcount }}
						</span>
					</div>
				</header>
				<div class="article-body content-body">
					<div class="article-meta text-center">
					</div>
					<div class="entry-content">
						<div class="content-body entry-content panel-body ">
							<div class="markdown-body" v-html="content"></div>
							
							<div v-if="articlePId !== undefined" class="post-contens">
								<router-link :to="`/vuejs-Blog/dist/articles/${articleId}/content`"
								class="scaleup post-contens-button">
									阅读全文
								</router-link>
							</div>
							
							<div v-if="auth && uid === 1 && articlePId === undefined" class="content-body-footer">
								<div class="actions">
									<a @click="deleteArticle" class="admin" href="javascript:;"><i class="fa fa-trash-o"></i></a>
									<a @click="editArticle" class="admin" href="javascript:;"><i class="fa fa-pencil-square-o"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SimpleMDE from 'simplemde'
import hljs from 'highlight.js'
import emoji from 'node-emoji'
import { mapState } from 'vuex'

export default {
	name: 'Content',
	props: {
		// 是否显示消息框
		articlePId: {
			type: Number,
		}
	},
	data() {
		return {
			title: '', // 文章标题
			content: '', // 文章内容
			date: ',' ,//创建时间
			wordcount: 0, //字数统计
			uid: 1, //用户ID
			sortId: '', //分类标签
		}
	},
	computed: {
		...mapState([
			'auth',
			'user'
		])
	},
	//实例生成后
	created() {
		let articleId = this.$route.params.articleId
		if (this.articlePId !== undefined) {
			articleId = this.articlePId
		}
		let article = this.$store.getters.getArticleById(articleId)
		if (article) {
			let { title, content, date, wordcount, uid, sortId } = article
			
			this.uid = uid,
			this.title = title
			this.date = date
			this.wordcount = wordcount
			this.sortId = sortId
			content = SimpleMDE.prototype.markdown(emoji.emojify(content, name => name))
			this.content = content
			if (this.articlePId !== undefined) {
				if (typeof content === 'string') {
					this.content = content.slice(0, content.indexOf('</p>') + 4)
				}
			}
			

			this.$nextTick(() => {
				this.$el.querySelectorAll('pre code').forEach((el) => {
					hljs.highlightBlock(el)
				})
			})
		}
		this.articleId = articleId
	},
	methods: {
		editArticle() {
			this.$router.push({ name: 'Edit', params: { articleId: this.articleId}})
		},
		deleteArticle() {
			this.$store.dispatch('post', { articleId: this.articleId })
		},
		setArticle(sortId) {
			this.$router.push({ name: 'Categories', params: { sortId: sortId } })
		}
	}
}
</script>

<style scoped>

</style>