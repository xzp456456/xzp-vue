<template>
    <div>
        <header></header>
		<main>
			<div class="info_item">
				<div class="list">
					<div class="row">
						<div class="name pull-left">设备ID</div>
						<div class="pull-right">
							<input type="text" name="" id="" value="" placeholder="请填写设备ID" />
						</div>
					</div>
				</div>
				<div class="list">
					<div class="row">
						<div class="name pull-left">设备别名</div>
						<div class="pull-right">
							<input type="text" name="" id="" value="" placeholder="请填写设备别名" />
						</div>
					</div>
				</div>
				<div class="list">
					<div class="row">
						<div class="name pull-left">设备型号</div>
						<div class="pull-right name_text">
							<span class="text">家用II型（LANMAX-186）</span><img src="../assets/img/in.png"/>
						</div>
					</div>
				</div>
				<div class="list">
					<div class="row">
						<div class="name pull-left">计费模式</div>
						<div class="pull-right name_text">
							<span class="text">按流量</span><img src="../assets/img/in.png"/>
						</div>
					</div>
				</div>
					<div class="list">
					<div class="row">
						<div class="name pull-left">经销商ID</div>
						<div class="pull-right">
							<input type="text" name="" id="" value="" placeholder="请填写经销商ID" />
						</div>
					</div>
				</div>
					<div class="list">
					<div class="row">
						<div class="name pull-left">经销商名称</div>
						<div class="pull-right">
							<input type="text" name="" id="" value="" placeholder="请填写经销名称" />
						</div>
					</div>
				</div>
					<div class="list">
					<div class="row">
						<div class="name pull-left">客户姓名</div>
						<div class="pull-right">
							<input type="text" name="" id="" value="" placeholder="请填写客户姓名" />
						</div>
					</div>
				</div>
					<div class="list">
					<div class="row">
						<div class="name pull-left">联系电话</div>
						<div class="pull-right">
							<input type="text" name="" id="" value="" placeholder="请填写你的手机或固话号码" />
						</div>
					</div>
				</div>
				<div class="list">
					<div class="row">
						<div class="name pull-left">省市区</div>
						<div class="pull-right name_text">
							<span class="text">106升</span><img src="../assets/img/in.png"/>
						</div>
					</div>
				</div>
					<div class="list">
					<div class="row">
						<div class="name pull-left">详细地址</div>
						<div class="pull-right">
							<input type="text" name="" id="" value="" placeholder="请填写你的安装详细地址" />
						</div>
					</div>
				</div>
			</div>
			<div class="btn">
				<button>提交</button>
			</div>
		</main>
		<footer></footer>
    </div>
</template>

<script>
export default {
    name:'addEquipment'
}
</script>


<style scoped="">

.info_item{
	width: 100%;
}

.pull-left{
	float: left !important;
}

.pull-right{
	float: right !important;
}

.info_item .list input{
	border: none;
	font-size:0.37rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(202,202,202,1);
	line-height: 1.5rem;
	text-align: right;
}

.name_text{
	line-height: 1.5rem;
	font-size:0.37rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
	
}

.name_text span{
	margin-right: 0.266666rem;
}

.name_text img{
    width: 0.25rem;
	position: relative;
	top: 0.106666rem;
}

.name{
	font-size:0.37rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
	line-height: 1.5rem;
	
}

.row{
	margin: 0 auto;
	width: 90%;
}

.list{
	width: 100%;
	height: 1.5rem;
	border-bottom:1px solid #E6E6E6;
}

.btn{
	width:8.56rem;
	height:1.19rem;
	margin: 0 auto;
	margin-top: 0.8rem;
}

.btn button{
	border: none;
	outline: none;
	width:8.56rem;
	height:1.19rem;
	background:rgba(26,173,255,1);
	font-size:0.39rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(249,249,249,1);
	border-radius:0.04rem;
}

</style>
