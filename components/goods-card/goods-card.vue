<template>
	<navigator class="u-p-20 goods-item">
		<u-image width="100%" height="300rpx" :src="item.cover_url"></u-image>
	    <view class="u-text-center u-line-1">{{item.title}}</view>
	    <view class="u-flex u-row-between u-p-10">
			<view class="price">¥ {{item.price}}</view>
			<view class="sale">销售 {{item.sales}}</view>
		</view>
	</navigator>
</template>

<script>
	export default {
		name:"goods-card",
		props:{
			item:{
				type:Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.goods-item{
		box-shadow: 0 12rpx 20rpx 0 rgba(0,0,0, .1);
		.price{
			color: red;
		}
		.sale{
			color: #C0C4CC;
		}
	}
</style>
