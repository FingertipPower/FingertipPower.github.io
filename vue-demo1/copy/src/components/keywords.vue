<template>
	<div id="chartbox">
		<div id="mychart"></div>
	</div>
</template>

<script>
import echarts from 'echarts'
	export default{
		mounted(){
			let chartBox = document.getElementById('chartbox')
			let myChart = document.getElementById('mychart')
			var mainChart = echarts.init(myChart); 
			mainChart.setOption({
			    title: { text: 'ECharts 入门示例' },
			    tooltip: {},
			    xAxis: {
			        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
			    },
			    yAxis: {},
			    series: [{
			        name: '销量',
			        type: 'bar',
			        data: [5, 20, 36, 10, 10, 20]
			    }]
			});
		}
	} 
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
}
#chartbox{
	width: 80%;
	height: 87%;
	margin-top: 70px;
	margin-left: 20%;
}
#mychart{
	width: 700px;
	height: 500px;
	margin: 0 auto;
}
</style>