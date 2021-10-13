<template>
	<view class="content">
		首页
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		async onLoad() {
			// this.$u.get('https://api.shop.eduwork.cn/api/index').then(res => {
			// 	console.log(res)
			// })
			console.log(this.vuex_version)
			this.$u.vuex('vuex_name','DDDD')
			
			console.log(this.vuex_name)
			
			// const res = await this.$u.api.index()
			// console.log(res)
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	
</style>
