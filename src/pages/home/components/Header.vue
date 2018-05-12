<template>
	<div class="header">
		<div class="header-left">
			<span class="iconfont icon-back">&#xe697;</span>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe6ac;</span>
			请输入城市、景点
		</div>
		<div class="header-right">
			城市
			<span class="iconfont">&#xe6a6;</span>	
		</div>
	</div>
</template>

<script>
	export default{
//		name:"HomeHeader"
	}
</script>

<style scoped lang="stylus">
	@import "~styles/varibles.styl"
	.header
		height:.86rem
		line-height .86rem
		background:$bjColor
		color:#fff
		display:flex		
		.header-left
			width .64rem
			text-align center
			.icon-back
				font-size 0.4rem
		.header-input
			flex 1
			height 0.64rem
			line-height .64rem
			margin-top:.12rem
			margin-left:.2rem
			padding-left:.2rem
			background #fff
			border-radius 0.1rem
			color #ccc			
		.header-right
			width 1.24rem
			text-align center
		
</style>