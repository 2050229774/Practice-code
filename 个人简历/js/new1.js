var d = document.getElementById("huo")
var tanch = function() {
	this.innerHTML = '<a href="结束.html"> <img id="dw-1" src="img/结-下.png"/> </a>'
}
var shoushu = function() {
	this.innerHTML = '<img id="dw" src="img/结-提.png"/>';
}
d.addEventListener('mousemove', tanch);
d.addEventListener('mouseout', shoushu);