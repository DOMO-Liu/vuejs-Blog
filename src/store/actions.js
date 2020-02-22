import router from '../router'

export const post = ({ commit, state }, { article, articleId }) => {
	let articles = state.articles

	if (!Array.isArray(articles)) articles = []
	if (article) {
		const uid = 1
		const { title, content, wordcount, sortId } = article
		const date = new Date()
		const year = date.getFullYear()

		if (articleId === undefined) {
			const lastArticle = articles[0]

			if (lastArticle) {
				articleId = parseInt(lastArticle.articleId) + 1
			} else {
				articleId = articles.length + 1
			}
			
			articles.unshift({
				uid,		//用户id
				articleId,	//文章id
				title,		//标题
				content,	//内容
				date,		//日期
				wordcount,	//字数
				sortId,		//标签
				year,		//年份
			}) 
		} else {
				for (let article of articles) {
					if (parseInt(article.articleId) === parseInt(articleId)) {
						article.title = title
						article.content = content
						article.wordcount = wordcount
						article.sortId = sortId
						break
				}
			}
		}
		commit('UPDATE_ARTICLES', articles)
		router.push({ name: 'Content', params: { articleId } })
	} else {
		for (let article of articles) {
			if (parseInt(article.articleId) === parseInt(articleId)) {
				articles.splice(articles.indexOf(article), 1)
				break
			}
		}
		commit('UPDATE_ARTICLES', articles)
		router.push({ name: 'Home'})
	}
}
