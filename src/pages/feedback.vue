<template>
    <div>
        <div class="userInfo">
			<div class="name">
				姓名：张三
			</div>
			<div class="phone">
				电话：15926258698
			</div>
			<div class="texta">
				<p>问题描述</p>
				<textarea name="" rows="" cols="" placeholder="请描述您的问题，或者您有更好的建议！"></textarea>
			</div>
		</div>
		<div class="btn">
			<button>提交</button>
		</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped="">
.userInfo{
	font-size:0.35rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
	width: 90%;
	margin: 0 auto;
	padding-top: 0.3rem;
	padding-bottom: 0.3rem;
	border-bottom:1px solid #E6E6E6;
}

.texta p{
	margin:0.3rem 0;
}

.texta textarea{
	width: 95%;
	height:3.43rem;
	background:rgba(236,236,236,1);
	border-radius:0rem;
	margin: 0 auto;
	border: none;
	border-radius:0.133333rem ;
	padding: 4% 3%;
	
}

.btn{
	width:8.56rem;
	height:1.18rem;
	margin:  0 auto;
}

.btn button{
	outline: none;
	
	border: none;
	border-radius:0.066666rem;
	width:8.56rem;
	height:1.18rem;
	background:rgba(26,173,255,1);
	border-radius:0rem;
	font-size:0.39rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(249,249,249,1);
}

</style>
