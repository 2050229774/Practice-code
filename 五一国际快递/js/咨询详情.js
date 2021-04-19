var p_s = document.querySelectorAll("#zheng-bei-6 p");
var zheng_5 = document.getElementById("zheng-bei-5");
zheng_5.addEventListener("click",size,false);
var ss = 20;
function size(event){
	console.log("程序执行")
	console.log(event.target.id)
	if(event.target.id == "da" && ss < 30){
		ss++;
		for (var i = 0; i < p_s.length; i++) {
			p_s[i].style.fontSize = ss+"px"
		}
		}
	if(event.target.id == "zhong"){
		for (var i = 0; i < p_s.length; i++) {
			p_s[i].style.fontSize = "20px"
		}
		}
	if(event.target.id == "xiao" && ss > 10){
		ss--;
		for (var i = 0; i < p_s.length; i++) {
			p_s[i].style.fontSize = ss + "px"
		}
		}
	}
	