import Vue from 'vue'
import Message from './Message'
import Pagination from './Pagination'

const components = {
	Message,
	Pagination
}

//Object.entries 返回给定对象的键值对数组
for (const [key, value] of Object.entries(components)) {
	Vue.component(key, value)
}