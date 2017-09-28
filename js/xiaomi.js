
var oLi = document.querySelectorAll("#homeelec .box-hd .more li"),
    index = 0,
    len = oLi.length;


for(var i = 0; i < len; i++){
	oLi[i].i = i;
	oLi[i].onmouseover = function(){
		oLi[index].className = '';
		this.className = 'tab-active';
		index = this.i;
	} 
}