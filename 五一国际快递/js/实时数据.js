var neiLeftZhu = echarts.init(document.getElementById('nei-left-zhu'));

var option = {
	color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', ],
	title: {
		text: '国际赞助商',
		textStyle: {
			color: '#2E2B69',
			fontWeight: '400'
		},
		subtext: 'Sponsored by China',
		top: '5%',
		left: '2%',
		itemGap: 5
	},
	legend: {
		right: '2%',
		top: '10%',
		itemHeight: 10,
	},
	tooltip: {
		show: true,
		trigger: 'axis',
		axisPointer: {
			type: 'shadow',
			shadowStyle: {
				color: 'rgba(255,150,150,0.1)'
			}
		}
	},
	grid: {
		left: '15%',
		top: '30%',
		bottom: '15%'
	},
	xAxis: {
		type: 'category',
		data: ["美国", "英国", "法国", "中国", "西班牙", "俄罗斯", "瑞典"],
		// 横坐标显示不全解决方法 之间间隔设置为0可强制显示全部，旋转一定角度显的不乱
		axisLabel: {
			interval: 0,
			rotate: -45
		}
	},
	yAxis: [{
		type: 'value'
	}],
	series: [{
		name: '赞助商总人数',
		type: 'bar',
		data: [10, 21, 36, 55, 21, 20, 33]
	}]
}
neiLeftZhu.setOption(option);

var neiRightZhe = echarts.init(document.getElementById('nei-right-zhe'));
var option1 = {
	// 俩条折线 x为连续数据
	color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', ],
	title: {
		text: '近10年货运量',
		textStyle: {
			color: '#2E2B69',
			fontWeight: '400'
		},
		subtext: 'volume of freight',
		top: '5%',
		left: '2%',
		itemGap: 5
	},
	legend: {
		right: '2%',
		top: '10%',
		itemHeight: 10,
	},
	tooltip: {
		show: true,
		trigger: 'axis',
		axisPointer: {
			type: 'line',
			shadowStyle: {
				color: 'rgba(255,150,150,0.1)'
			}
		}
	},
	grid: {
		left: '15%',
		top: '30%',
		bottom: '15%'
	},
	xAxis: {
		type: 'time',
		// 横坐标显示不全解决方法 之间间隔设置为0可强制显示全部，旋转一定角度显的不乱
		axisLabel: {
			interval: 0,
			rotate: -45
		}
	},
	yAxis: [{
		type: 'value',
		name: '亿',
		nameTextStyle: {
			color: '#ff0eff',
			padding: [50, 50, 0, 0]
		},
		nameGap: 9
	}],
	series: [{
			name: '中国',
			type: 'line',
			data: [
				['2009-10-1', 50],
				['2010-10-2', 150],
				['2011-10-3', 100],
				['2012-10-4', 140],
				['2013-10-5', 141],
				['2014-10-6', 166],
				['2015-10-7', 178],
				['2016-10-8', 167],
				['2017-10-9', 255],
				['2018-10-10', 280],
				['2019-10-11', 300],
				['2020-10-12', 320],
				['2021-10-13', 330],
			]
		},
		{
			name: '美国',
			type: 'line',
			data: [
				['2009-10-1', 30],
				['2010-10-2', 60],
				['2011-10-3', 150],
				['2012-10-4', 130],
				['2013-10-5', 121],
				['2014-10-6', 80],
				['2015-10-7', 168],
				['2016-10-8', 155],
				['2017-10-9', 170],
				['2018-10-10', 160],
				['2019-10-11', 190],
				['2020-10-12', 180],
				['2021-10-13', 210],
			]
		}
	]
}
neiRightZhe.setOption(option1);

var neiLeftBing = echarts.init(document.getElementById('nei-left-bing'));
var option2 = {
	// 显示相关数据
	color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', ],
	title: {
		text: '用户比例',
		textStyle: {
			color: '#2E2B69',
			fontWeight: '400'
		},
		subtext: 'proportion',
		top: '5%',
		left: '2%',
		itemGap: 5
	},
	tooltip: {
		show: true,
		trigger: 'item'
	},
	series: [{
		name: '单位：千万',
		type: 'pie',
		center: ['60%', '50%'],
		radius: [0, '80%'],
		data: [{
			value: 100,
			name: '美国'
		}, {
			value: 230,
			name: '英国'
		}, {
			value: 250,
			name: '法国'
		}, {
			value: 600,
			name: '中国'
		}, {
			value: 400,
			name: '西班牙'
		}, {
			value: 300,
			name: '俄罗斯'
		}, {
			value: 100,
			name: '瑞典'
		}]
	}]
}
neiLeftBing.setOption(option2);
var map = new BMapGL.Map("nei-zhong"); // 创建地图实例 
var point = new BMapGL.Point(107.38683, 40.76645); // 创建点坐标
map.centerAndZoom(point, 4); // 初始化地图，设置中心点坐标和地图级别 
map.enableScrollWheelZoom(true); //滚轮缩放
map.setMapType(BMAP_EARTH_MAP); // 设置地图类型为地球模式
var scaleCtrl = new BMapGL.ScaleControl(); // 添加比例尺控件
map.addControl(scaleCtrl);
var zoomCtrl = new BMapGL.ZoomControl(); // 添加缩放控件
map.addControl(zoomCtrl);
var cityCtrl = new BMapGL.CityListControl(); // 添加城市列表控件
map.addControl(cityCtrl);
var neiRightSan = echarts.init(document.getElementById('nei-right-san'));
var option4 = {
	title: {
		text: '为什么选择我们公司',
		textStyle: {
			color: '#2E2B69',
			fontWeight: '400'
		},
		left: '25%'
	},
	tooltip: {},
	legend: {
		top: '10%',
	},
	radar: {
		center: ['50%', '60%'],
		radius: '50%',
		indicator: [{
			name: "时效性",
			max: 6500
		}, {
			name: "配送员",
			max: 30000
		}, {
			name: "可送达范围",
			max: 30000
		}, {
			name: "可靠性",
			max: 38000
		}, {
			name: "价格",
			max: 52000
		}, {
			name: "私密性",
			max: 25000
		}]
	},
	series: [{
		type: 'radar',
		data: [{
			value: [5300, 28000, 29000, 35000, 20000, 25000],
			name: "本公司"
		}, {
			value: [3000, 14000, 20000, 31000, 42000, 21000],
			name: "亚麻得公司"
		}]
	}]
}
neiRightSan.setOption(option4);

// charts不重新自适应容器。或者，window窗口改变但是echarts不随着改变，绑定窗口事件调用echars内部渲染函数
window.addEventListener('resize', function() {
	neiLeftZhu.resize();
	neiLeftBing.resize();
	neiRightZhe.resize();
	// neiZhong.resize();
	neiRightSan.resize();
})
