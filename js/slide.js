var index=0; 
var pre;//表示之前显示的索引
var timer;
var $$=function(idName){
	return document.getElementById(idName);
}
window.onload=function(){
	var imgs=$$("dAdv").getElementsByTagName("img");
	pre=imgs.length-1;
	for(var i=0;i<imgs.length;i++){
		imgs[i].style.display="none";
		imgs[i].onmouseover=function(){
			clearTimeout(timer);
		};
		imgs[i].onmouseout=function(){
			timer=setTimeout(doToggleImage,2500);
		};
	}

	doShowNumber();
	doToggleImage();
	
};
// 显示数字
function doShowNumber(){
	// 获取ul
	var ul=document.getElementById("ulNum");
	// 根据图片数量，创建li
	var imgs=$$("dAdv").getElementsByTagName("img");
	for(var i=0;i<imgs.length;i++){
		var li=document.createElement("li");
		li.className="normal";
		li.innerHTML=i+1+"";
		li.onclick=doClick;
		ul.appendChild(li);
	}
}
function doToggleImage(){
	var imgs=$$("dAdv").getElementsByTagName("img");
	var obj=imgs[index];
	var title=obj.title;
	// 修改span中显示的title
	// $$("spTitle").innerHTML=title;
	// 先隐藏当前图片
	imgs[pre].style.display="none";
	// 再显示新的图片
	obj.style.display="block";

	// 获取所有ul下的li
	var ul=document.getElementById("ulNum");
	var lis=ul.getElementsByTagName("li");
	// 设置当前li为默认样式
	lis[pre].className="normal";
	// 再将新图片对应的数字改成高亮样式
	lis[index].className="highlight";
	// index循环计数
	// pre指向当前显示图片的索引
	pre=index;
	// index指向下一张要显示的图片索引
	index++;
	index%=imgs.length;
	timer=setTimeout(doToggleImage,2500);
}

function doClick(){
	// 先清除定时器
	clearTimeout(timer);
	// 获取点击的数字索引
	index=this.innerHTML-1;
	// 重新开始显示
	doToggleImage();
}