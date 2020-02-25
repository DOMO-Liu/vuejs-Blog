<template> 
	<div class="main-container"> 
		<div class="content-left">
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
						<h1 v-if="articlePId == undefined" class="article-header-title">{{ title }}</h1>
						<h1 v-else class="article-header-title">
							<router-link :to="`/vuejs-Blog/dist/articles/${articleId}/content`">{{title}}</router-link>
						</h1>
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
								<div v-else>
									<div class="Appreciate">
										<router-link style="color: white;" to="/vuejs-Blog/dist/friends" >赞赏</router-link>
									</div>
									<hr />
									<div class="actions-switch">
										<a v-if="articleLastId !== ''" style="color: #555; float: left;" 
										@click="switchPath(articleLastId)" href="javascript:;">
											<i class="fa fa-angle-left"></i> 上一篇
										</a>
										<a v-if="articleNextId !==''" style="color: #555;; float: right;" 
										@click="switchPath(articleNextId)"  href="javascript:;">
											下一篇 <i class="fa fa-angle-right"></i>
										</a>
									</div>
									
								</div>
								<br />
								<div v-if="auth && articlePId === undefined" class="content-body-footer">
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
			articleNextId: '', //下一篇文章
			articleLastId: '', //上一篇文章
		}
	},
	computed: {
		...mapState([
			'auth',
			'user',
			'articles'
		])
	},
	//实例生成后
	created() {
		this.getArticle()
		
	},
	watch: {
		'$route'(to) {
			this.getArticle(to.params.articleId)
		}
	},
	methods: {
		// 进入修改文章页
		editArticle() {
			this.$router.push({ name: 'Edit', params: { articleId: this.articleId}})
		},
		// 删除文章
		deleteArticle() {
			this.$store.dispatch('post', { articleId: this.articleId })
		},
		// 进入文章归档
		setArticle(sortId) {
			this.$router.push({ name: 'Categories', params: { sortId: sortId } })
		},
		//获取上一篇文章和下一篇文章的id
		actionsSwitch(articleId) {
			let articles = this.articles
			for ( let i = 0; i < articles.length; i++) {
				let id = articles[i].articleId
				if (articleId === String(id)) {
					//下一篇文章id
					if (articles[i + 1] !== undefined) {
						this.articleNextId = String(articles[i + 1].articleId)
					}
					//上一篇文章id
					if (articles[i - 1] !== undefined) {
						this.articleLastId = String(articles[i - 1].articleId)
					}
				}
			}
		},
		switchPath(articleId){
			this.articleNextId = this.articleLastId = ''
			this.$router.push({ name: 'Content', params: { articleId: articleId } })
		},
		//获取文章
		getArticle(articleId) {
			if (this.articlePId === undefined) {
				articleId = this.articleId = this.$route.params.articleId
				this.actionsSwitch(this.articleId)
			} else {
				articleId = this.articleId = this.articlePId
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
				
				// 如果在首页，那么只截取开头一段话
				if (this.articlePId !== undefined) {
					if (typeof content === 'string') {
						let fromindex = content.indexOf('</p>')
						// 随机生成的文章页文字没有分段，所以截取20个字符
						if (content.indexOf('</p>', fromindex + 4) === -1) {
							this.content = content.slice(0,20)
						} else {
							// 否则窃取文章的第一段话
							this.content = content.slice(0, fromindex + 4)
						}
					}
				}
				this.$nextTick(() => {
					this.$el.querySelectorAll('pre code').forEach((el) => {
						hljs.highlightBlock(el)
					})
				})
			}
		},
		
	}
}
</script>

<style scoped>

</style>