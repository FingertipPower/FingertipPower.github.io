<template>
	<div id="navigation">
		<ul>
			<li v-for="(val, index) in arr">
				<router-link :to="'/'+val.ad">{{val.name}}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	data(){
		return {
			arr:[
				{name: '通信1502班关键词分析', ad: 'keywords'},
		        {name: '最喜爱建筑分布', ad: 'building'},
		        {name: '最喜爱食堂分布', ad: 'canteen'},
		        {name: '最常自习地点分布', ad: 'selfstudy'},
		        {name: '课程难度调查', ad: 'difficult'},
		        {name: '课程兴趣调查', ad: 'interest'},
		        {name: '寝室学习氛围', ad: 'bedroom'},
		        {name: '毕业展望', ad: 'graduate'},
		        {name: '工作日起床时间', ad: 'getup'},
		        {name: '工作日睡觉时间', ad: 'gotobed'},
		        {name: '每日在校吃饭花销', ad: 'eat'},
		        {name: '周末娱乐方式', ad: 'amuse'},
		        {name: '目前是否单身', ad: 'single'},
		        {name: '班群聊天记录分析', ad: 'chat'},
		        {name: '我的群聊活跃时间', ad: 'onlyme'}
			]
		}
	}
}
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
}
#navigation{
	padding-top: 10px;
	padding-bottom: 20px;
	overflow-y: auto;
	position: fixed;
	top:50px;
	background-color: #46A3FF;
	width: 20%;
	height: 500px;
}
li{
	margin-top: 10%;
	margin-left: 10%;
	list-style: none;
	color: #2c3e50;
}
a{
	text-decoration: none;
}
</style>