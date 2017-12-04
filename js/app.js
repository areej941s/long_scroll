$(document).foundation()
var canvas = document.getElementById("canvas");
var counter = document.getElementById("counter");
var icon = document.getElementById("icon");
var house2 = document.getElementById("house2");
var house3 = document.getElementById("house3");
var house4 = document.getElementById("house4");
var castle = document.getElementById("castle");
var clouds = document.getElementById("clouds");


window.onscroll = function(){


  var x = window.pageXOffset;

  console.log(x);







house2.style.left = 500 + x  + "px";

if(x > 5000){

house2.src="img/castle2.png";

}else{

  house2.src="img/house1.png";
}

house3.style.left = 900 + x  + "px";

if(x > 6000){

house3.src="img/castle3.png";

}else{

  house3.src="img/house1.png";
}

house4.style.left = 1300 + x  + "px";

if(x > 8000){

house4.src = "img/bigcastle.png";

}else{

house4.src="img/house1.png";}

};
