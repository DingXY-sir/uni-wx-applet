
const install = (Vue, vm) => {
	/**
	 * 自定义功能
	 */
	
	//自定义全局导航守卫
	let isLogin = () => {
		const token = vm.vuex_token
		if(!token){
			vm.$u.toast('请您先登录！')
			setTimeout(() => {
			    vm.$u.route({
					type:'redirect',
					url: 'pages/login/login'
				})
			}, 1500)
		}
	}
	

	vm.$u.utils = {
		isLogin
	};
}

export default {
	install
}