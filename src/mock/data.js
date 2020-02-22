import Mock from 'mockjs'
import ls from '../utils/localStorage'

/* eslint-disable no-unused-vars */
// Mock.Random 用来生成各种随机数据
const Random = Mock.Random
const localArticles = ls.getItem('articles')
const localUser = ls.getItem('user')
const localUserName = localUser ? localUser.name : undefined
let nextArticleId = 1

if (Array.isArray(localArticles) && localArticles.length) {
	nextArticleId = parseInt(localArticles[localArticles.length - 1].articleId) + 1
}

// 生成测试文章，参数 num 是生成数量
export const mockArticles = (num = 10) => {
	const forbiddenNames = [localUserName, 'topics']
	let articles = []

	// 限制生成数量，因为 localStorage 有储存限制
	num = num > 50 ? 50 : num

	// 生成测试文章，不包含点赞用户和评论
	const arr = [...Array(num)].forEach((article, index) => {
		articles.push({
			uid: 1,
			articleId: nextArticleId + index,
			// 随机生成 10 - 20 字的中文标题
			title: Random.ctitle(10, 20),
			// 随机生成 3 - 5 个的中文段落
			content: Random.cparagraph(3, 5),
			wordcount: Random.cparagraph(3, 5).length,
			date: new Date(),
			sortId: '日记本',
			year: new Date().getFullYear()
		})
	})

	// 返回测试文章
	return articles.reverse()
}

// 获取指定数量的随机的不重复文章
function getRandomArticles(articles, num = 5) {
	const randomNum = Math.floor(Math.random() * num + 1)
	const randomArticles = [...Array(randomNum)].map(() => articles[Math.floor(Math.random() * articles.length)])
	// Set 类似于数组，但其成员的值都是唯一的，因此可以使用下面的方法去重
	return [...new Set(randomArticles)]
}
