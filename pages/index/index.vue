<template>
	<view class="content">
		<!-- 轮播图 -->
		<view class="">
			<u-swiper :list="slides" height="320" name="img_url"></u-swiper>
		</view>
		<!-- 首页商品展示 -->
		<view class="u-m-20">
			<u-tabs :list="goodsList" :is-scroll="false" :current="current" @change="change" font-size="32" item-width="160" bar-width="80"></u-tabs>
			<!-- 商品 -->
			<view class="">
				<u-row gutter="16">
					<u-col span="6" v-for="item in goods">
						<goods-card :item="item"></goods-card>
					</u-col>
				</u-row>
				<!-- 加载数据显示 -->
				<u-loadmore class="u-m-20" :status="status" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsList:[
					{name:'默认'},
					{name:'热销'},
					{name:'推荐'},
					{name:'最新'}
				],
				current:0,
				slides:[],
				goods:[],
				page:1,
				status:'loadmore'
				
			}
		},
		onLoad() {
			// this.$u.get('https://api.shop.eduwork.cn/api/index').then(res => {
			// 	console.log(res)
			// })
			//console.log(this.vuex_version,"显示vuex内的key")
			//使用vuex保存读取数据
			//this.$u.vuex('vuex_name','Dxy')
			
			//console.log(this.vuex_name)
		    this.getData()
		},
		methods: {
			change(index){
				this.current = index
				//重置商品列表 和 分页的初始值
				this.goods = []
				this.page = 1
			    this.getData()
			},
			async getData() {
				const params = {
					page : this.page
				}
				//选择分类获取数据
				if (this.current == '1') params.sales = '1'
				if (this.current == '2') params.recommend = '1'
				if (this.current == '3') params.new = '1'
				const res = await this.$u.api.index(params)
				console.log(res)
				this.slides = res.slides	
				//下拉加载数据合并数组
				this.goods = [...this.goods, ...res.goods.data]
			}
		},
		//下拉加载更多
		onReachBottom() {
			this.status = 'loading'
			//判断是否还有数据（判断商品的length是否小于页码乘以每页数据的长度）
			if (this.goods.length < this.page * 10)  return this.status = 'nomore'
			this.page = this.page + 1
			this.getData()
			
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
