<template>
	<div class="wraper">
		<swiper :options="swiperOption" >
	    <swiper-slide  v-for="item of swperList">
	    	<img class='swiper-img' v-bind:src="item.imgUrl" alt="" />
	    </swiper-slide>
		<div class="swiper-pagination"  slot="pagination"></div>
	    </swiper>
  </div>
</template>

<script>
	export default{
		data(){
			return{
				swiperOption:{
					pagination:".swiper-pagination",
					loop:true
				},
				swperList:[
				{
					id:"0001",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/5c/969bfa7af00a2702.jpg_750x200_b99b8e07.jpg"
				},
				{
					id:"0002",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/b1/54862f4b1501e202.jpg_750x200_097bb6b3.jpg"
				}
			]
			}
			
		}
	}
</script>

<style scoped lang="stylus">
	.wraper >>> .swiper-pagination-bullet-active
		background #fff
	.wraper
		overflow hidden
		width 100%
		height 0
		padding-bottom 26.66%
		.swiper-img
			width:100%
</style>