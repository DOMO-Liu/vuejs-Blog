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

// // 返回指定 uid 下的所有文章，参数 uid 是用户 ID，user 是用户名
// export const getArticlesByUid = (state, getters) => () => {
// 	let articles = state.articles

// 	if (Array.isArray(articles)) {
// 		// 使用指定 uid 过滤所有文章
// 		articles = articles.filter(article => 1 === parseInt(article.uid))
// 	} else {
// 		articles = []
// 	}
	
// 	return articles
// }