//标题弹窗指令
// 在 el 元素的上方显示或隐藏一个内容为 title 的提示框
function showTitle(el, title) {
	const popover = getPopover()
	const popoverStyle = popover.style

	if (title === undefined) {
		//隐藏
		popoverStyle.display = 'none'
	} else {
		//getBoundingClientRect获取元素相对于视窗的位置集合
		const elRect = el.getBoundingClientRect()
		//getComputedStyle获取元素上的所有CSS属性对象,包括伪元素
		const elComputedStyle = window.getComputedStyle(el, null)
		//getPropertyValue获取获取padding-right属性的值,让弹窗水平居中
		const rightOffset = parseInt(elComputedStyle.getPropertyValue('padding-right')) || 0
		// const topOffset = parseInt(elComputedStyle.getPropertyValue('padding-top')) || 0
		const topOffset = 0
		//visibility 属性规定元素是否可见。默认visible可见,hidden不可见
		popoverStyle.visibility = 'hidden'
		popoverStyle.display = 'block'
		//textContent设置指定节点的文本内容
		popover.querySelector('.popover-content').textContent = title
		popoverStyle.left = elRect.left - popover.offsetWidth / 2 + (el.offsetWidth - rightOffset) / 2 + 'px'
		popoverStyle.top = elRect.top - popover.offsetHeight + topOffset + 'px'
		popoverStyle.display = 'block'
		popoverStyle.visibility = 'visible'
	}
}

// 创建或者返回一个提示框
function getPopover() {
	let popover = document.querySelector('.title-popover')

	if (!popover) {
		const tpl = `
			<div class="popover title-popover top fade in" style="position:fixed;">
				<div class="arrow"></div>
				<div class="popover-content"></div>
			</div>
		`
			//createRange() 方法创建 Range 对象。插入tpl
			const fragment = document.createRange().createContextualFragment(tpl)

			document.body.appendChild(fragment)
			popover = document.querySelector('.title-popover')
		}

	return popover
}

export default {
  //指令定义对象的指定钩子函数 bind：只调用一次，指令第一次绑定到元素时调用，在这里可以进行一次性的初始化设置；
  //el:指令所绑定的元素，可以用来操作 DOM ；
  //binding：一个对象，binding.name 指令名, binding.arg 传给指令的参数, binding.modifiers 一个包含修饰符的对象
  //binding.value 表示指令的绑定值，如 v-title="'我是标题'" 中，绑定值为'我是标题'；
	bind(el, binding) {
		const events = ['mouseenter', 'mouseleave', 'click']
		//声明一个处理器，以根据不同的事件类型传不同的参数
		const handler = (event) => {
			if (event.type === 'mouseenter') {
				showTitle(el, binding.value)
			} else {
				// 隐藏一个提示框
				showTitle()
			}
		}
	
		// 在 el 元素上添加事件监听
		events.forEach((event) => {
			el.addEventListener(event, handler, false)
		})

		// 在 el 元素上添加一个属性，以在其他钩子进行访问
		el.destroy = () => {
			events.forEach((event) => {
				el.removeEventListener(event, handler, false)
			})
			// 移除 el 元素上的 destroy
			el.destroy = null
		}
	},
	//unbind：只调用一次，指令与元素解绑时调用，在这里可以移除绑定的事件和其他数据；
	unbind(el) {
		// 移除事件监听和数据绑定
		el.destroy()
	}
}