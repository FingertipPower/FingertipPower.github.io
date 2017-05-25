<template>
  <div id="header">
  	<ul>
  		<li class="un"><h3>这是一个小的DEOM</h3></li>
  		<li><button @click="todo">登录</button></li>
  	</ul>
  	<hr>
  </div>
</template>

<script>
export default {
	methods:{
		todo(){
			alert("登录成功");
		}
	}
}
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
}
#header{
	background-color: #E0E0E0;
	margin-left: 10px;
	position: fixed;
	top:0;
	left: 0;
	width: 100%;
	height: 50px;
}
li{
	float: left;
	margin-top: 10px;
	list-style: none;
}
button{
	position: absolute;
	right: 40px;
	width: 40px;
	height: 20px;
	background-color: #fff;
	color: #FF7575;
	border: none;
}
button:hover{
	color: #2c3e50;
}
hr{
	margin-top: 50px;
}
</style>
