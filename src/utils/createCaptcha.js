//验证码功能
export default function(num = 6, letters = 'QWERTYUIOPLKJHGFDSAZXCVBNM1234567890') {
	let tpl = ''
	let captcha = []

	try {
		//通过扩展运算符得到一个空6位的数组,最终得到一个随机字符的数组
		captcha = [...Array(num)].map(() => letters[Math.floor(Math.random() * letters.length)])
	} catch (e) {
		console.log('错误')
	}
	
	//再生成html字符串
	captcha.forEach(item => {
		tpl += `<span class="flex1 hcenter">${item}</span>`
	})

	captcha = captcha.join('')

	return {
		tpl,
		captcha
	}
}