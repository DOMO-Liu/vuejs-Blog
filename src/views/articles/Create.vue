<template>
	<div class="blog-container content-left">
		<div class="blog-pages">
			<h2 class="text-center">{{ articleId ? '编辑文章' : '创作文章' }}</h2>
			<hr>
			<div data-validator-form>
				<div class="form-group creat-header">
					<div v-dropdown class="creat-sort form-control">
						{{sortId}}
						<div class="caret"></div>
						<div class="dropdown-menu creat-menu">
							<div @click="sortId = item" v-for="item in creat" :key="item.id" class="creat-sort-item">
								{{item}}
							</div>
						</div>
					</div>
					<input v-validator:blur.required="{ title: '标题' }" type="text" 
					class="form-control create-title" placeholder="请填写标题" v-model.trim="title" @input="saveTitle">
				</div>
				<div class="form-group">
					<textarea id="editor"></textarea>
				</div>
				<br>
				<div class="form-group">
					<button class="btn-primary" type="submit" @click="post">发 布</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
/* eslint-disable no-unused-vars */

// 引入Markdown 编辑器simplemde
import SimpleMDE from 'simplemde'
// 语法高亮
import hljs from 'highlight.js'
import ls from '@/utils/localStorage'

// 添加全局变量
window.hljs = hljs

export default {
	name: 'Create',
	data() {
		return {
			title: '',
			content: '',
			wordcount: 0,
			articleId: '',
			creat: ['日记本', '分享境', '闲言语', '创作集', '事件薄'],
			sortId: '日记本',
		}
	},
	beforeRouteEnter(to, from, next) {
		next(vm => {
			vm.setArticleId(vm.$route.params.articleId)
		})
	},
	beforeRouteLeave(to, from, next) {
		this.clearData()
		next()
	},
	watch: {
		'$route'(to) {
			this.clearData()
			this.setArticleId(to.params.articleId)
		}
	},
	mounted() {
		const simplemde = new SimpleMDE({
			element: document.querySelector('#editor'),
			placeholder: '请使用 Markdown 格式书写 ;-)，代码片段黏贴时请注意使用高亮语法。',
			spellChecker: false,
			// 不用下载FontAwesome了
			autoDownloadFontAwesome: false,
			// 启用自动保存，uniqueId 是一个用于区别于其他站点的标识
			autosave: {
				enabled: true,
				uniqueId: 'DOMO-Blog'
			},
			// 启用代码高亮，需要引入 highlight.js
			renderingConfig: {
				codeSyntaxHighlighting: true
			}
		})
		
		// 监听编辑器，修改content
		simplemde.codemirror.on('change', () => {
			this.content = simplemde.value()
			this.wordcount = simplemde.value().length
		})
		
		this.simplemde = simplemde
	},
	methods: {
		saveTitle() {
			ls.setItem('smde_title', this.title)
		},
		fillContent(articleId) {
			let simplemde = this.simplemde
			let smde_title = ls.getItem("smde_title")
			
			if (articleId !== undefined) {
				let article = this.$store.getters.getArticleById(articleId)
				
				if (article) {
					let { title, content } = article
					
					this.title = smde_title || title
					this.content = simplemde.value() || content
					simplemde.value(this.content)
				}
			} else {
				this.title = smde_title
				this.content = simplemde.value()
			}
		},
		post() {
			let title = this.title
			let content = this.content
			let wordcount = this.wordcount
			let sortId = this.sortId
			
			if (title !== '' && content.trim() !== '') {
				let article = {
					title, 
					content,
					wordcount,
					sortId
				}
				// 为 => 分发 post 事件，并附带参数 { article }
				this.$store.dispatch('post', { article, articleId: this.articleId })
				this.clearData()
			}
		},
		clearData() {
			this.title = ''
			ls.removeItem('smde_title')
			this.simplemde.value('')
			this.simplemde.clearAutosavedValue()
		},
		setArticleId(articleId) {
			let localArticleId = ls.getItem('articleId')
			
			if (articleId !== undefined && !(articleId === localArticleId)) {
				this.clearData()
			}
			
			this.articleId = articleId
			this.fillContent(articleId)
			ls.setItem('articleId', articleId)
		}
	}
}
</script>

<style scoped>
textarea { height: 200px; }
</style>