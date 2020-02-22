/* eslint-disable no-unused-vars */
// 返回指定分类的所有文章,参数 categories 是类别名
export const getArticlesBySort = (state, getters) => (categories) => {
	// 获取所有文章
	let articles = state.articles

	if (Array.isArray(articles)) {
		// 过滤所有文章
		articles = articles.filter(article => article.sortId === categories)
	} else {
		articles = []
	}
	
	return articles
}