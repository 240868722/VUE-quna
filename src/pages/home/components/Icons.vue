<template>
	<div class="icons">
		<swiper>
			<swiper-slide v-for="(page,index) in pages" :key="index">
				<div class="icon" v-for="item in page">
					<div class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl" alt="" />
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
			</swiper-slide>

		</swiper>

	</div>
	
</template>

<script>
	export default{
		data(){
			return{
		
				iconList:[
					{
						id:"001",
						imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc:"吃喝玩乐"
					},
					{
						id:"002",
						imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc:"吃喝玩乐"
					},
					{
						id:"003",
						imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc:"吃喝玩乐"
					},
					{
						id:"003",
						imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc:"吃喝玩乐"
					},
					{
						id:"003",
						imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc:"吃喝玩乐"
					},
					{
						id:"003",
						imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc:"吃喝玩乐"
					},
					{
						id:"003",
						imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc:"吃喝玩乐"
					},
					{
						id:"003",
						imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc:"吃喝玩乐"
					},
					{
						id:"003",
						imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc:"吃喝玩乐"
					},
					{
						id:"003",
						imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc:"吃喝玩乐"
					},
					{
						id:"003",
						imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc:"吃喝玩乐"
					},
					{
						id:"003",
						imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc:"吃喝玩乐"
					},
					{
						id:"003",
						imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc:"吃喝玩乐"
					},
					{
						id:"003",
						imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						desc:"吃喝玩乐"
					},
	
				]
			}
		},
		
		computed: {
		    pages () {
		      var pages = []
		      this.iconList.forEach((item, index) => {
		        const page = Math.floor(index / 8)
		        if (!pages[page]) {
		          pages[page] = []
		        }
		        pages[page].push(item)
		      })
		      return pages
		    }
		  }
		
		
		
}
</script>

<style lang="stylus" scoped="">
	@import "~styles/varibles.styl"
	@import "~styles/mixins.styl"
	.icons >>> .swiper-container	
	/*overflow:hidden*/
		height:0
		padding-bottom:50%	
	.icon
		position relative
		overflow:hidden
		float left 		
		width 25%
		height 0
		padding-bottom 25%		
		.icon-img
			position absolute
			top 0
			left 0
			right 0
			bottom .44rem
			box-sizing border-box
			padding-top .1rem				
			.icon-img-content
				display block
				margin 0 auto
				height 100%					
		.icon-desc
			position absolute
			left 0
			right 0
			bottom 0
			height .44rem
			line-height .44rem
			text-align center
			color $darkTextColor
			ellipsis()
		
			
	</style>
				