import Vue from 'vue'
import title from './title'
import validator from './validator.js'
import dropdown from './dropdown'

//注册全局验证指令,在main.js里引用
//注册全局指令需要使用 Vue.directive，第一个参数 'validator' 是指令名称，第二个参数 validator 是指令对象或者指令函数，
//这里是指令对象。全局注册的好处是，可以在实例内部的所有组件中使用，而不用在每个组件内部单独引用和注册。
// Vue.directive('validator', validator)

const directives = {
	title,
	validator,
	dropdown
}

// Object.entries返回一个给定对象自身可枚举属性的键值对数组
//[['validator', {...}], ['dropdown', {...}]]
for (const [key, value] of Object.entries(directives)) {
	Vue.directive(key, value)
}