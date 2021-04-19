var vm = new Vue({
	el   : "#app",
	data : {
		dao : false
	},
	methods:{
		fy: function(){
			this.dao = true;
		},
		fn : function(){
			this.dao = false;
		}
	}
});

var ZhengBei5 = new Vue({
	el:"#zheng-bei-5",
	data:{
		da_1:false,
		da_2:false,
		da_3:false,
		da_4:false
	},
	methods: {
		wen_y_1 : function(){
			this.da_1 = true
		},
		wen_n_1 : function(){
			this.da_1 = false
		},
		wen_y_2 : function(){
			this.da_2 = true
		},
		wen_n_2 : function(){
			this.da_2 = false
		},
		wen_y_3 : function(){
			this.da_3 = true
		},
		wen_n_3 : function(){
			this.da_3 = false
		},
		wen_y_4 : function(){
			this.da_4 = true
		},
		wen_n_4 : function(){
			this.da_4 = false
		}
	}
})


var ul = document.getElementById("ul");
var ul_ul = document.getElementById("ul_ul");
var len = ul_ul.children.length;
var ci = 0; 
var width = 300; //li宽度
var widtht = -300; //头（尾部）
var widthf = -3900; //尾 （尾部）
var timer; //为定时器设置全局变量
var time;
var xs =3; //改
// 复制前6节点
var rightq  = document.getElementById("left");
var leftq = document.getElementById("right");
for(var i = 0;i<6;i++){
	ul_ul.insertBefore(ul_ul.children[5].cloneNode(true),ul_ul.children[0]);
}
// 复制后6节点
for(var i = 0;i<6;i++){
	ul_ul.appendChild(ul_ul.children[i].cloneNode(true));
}

function aa(bianyiliang){
	clearInterval(timer);
	// console.log("目标点1：",bianyiliang)
	timer =  setInterval(function(){
		
		// var xs = ;
		ul_ul.style.left = ul_ul.offsetLeft + xs +"px";
		if( bianyiliang>= ul_ul.offsetLeft){
			if(ul_ul.offsetLeft >= bianyiliang){
				ul_ul.style.left = bianyiliang;
				clearInterval(timer);
				// console.log("清除定时器偏移量是",ul_ul.offsetLeft)
			}
		}
		else{
			if(ul_ul.offsetLeft <= bianyiliang){
				ul_ul.style.left = bianyiliang;
				clearInterval(timer);
				console.log("清除定时器偏移量是",ul_ul.offsetLeft)
			}
		}
		console.log("判断前的偏移量",ul_ul.offsetLeft)
		if(ul_ul.offsetLeft >= widtht || ul_ul.offsetLeft <= widthf){
			ul_ul.style.left = '-2100px';
			console.log('该函数执行'); 
		}
	},10)
}
function chuanru(){
	
	ci++;
	aa(ci*300-2100);//改
	// 到达尾部轮回
	
	console.log("计数器ci:",ci);
	if(ci == 6){
		ci = 0;
	}
}

ul.onmousemove = function () {
	// clearInterval(timer);
	clearInterval(time);
//通过俩次定时器实现移动暂停
	
}
ul.onmouseout = function () {
	console.log("该事件被触发");
	// 延时俩秒
	setTimeout(function(){
		
	},2000)
	xs = 3;
	time = setInterval(chuanru,2000)
}
rightq.onclick = function() {
	ci--;
	xs = -3
	aa(ci*300-2100)
	if(ci == 0){
		ci = 6;
	}
}
leftq.onclick = function () {
	ci++;
	aa(ci*300-2100)
	if(ci == 6){
		ci = 0;
	}
}
rightq.onmousedown = function () {
	this.style.backgroundColor = "#888888"
}
rightq.onmouseup = function () {
	this.style.backgroundColor = "black"
}
time = setInterval(chuanru,2000)