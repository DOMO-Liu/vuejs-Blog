import Vue from 'vue'
import Message from './Message'

const components = {
	Message,
}

//Object.entries 返回给定对象的键值对数组
for (const [key, value] of Object.entries(components)) {
	Vue.component(key, value)
}