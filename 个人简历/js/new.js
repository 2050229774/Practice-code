/* 伪类选择？ */
var dw = document.getElementById("huoqv")
var tanchu = function() {
	this.innerHTML = '<a href="内容.html"><img id="dw-1" src="img/内-下.png"/></a>'
}
//延时函数
var shoushui = function() {
	this.innerHTML = '<img id="dw" src="img/内-提.png"/>';
}
dw.addEventListener('mousemove', tanchu);
dw.addEventListener('mouseout', shoushui);


