$(document).foundation()
var canvas = document.getElementById("canvas");
var counter = document.getElementById("counter");
var icon = document.getElementById("icon");
var house2 = document.getElementById("house2");
var house3 = document.getElementById("house3");
var castle = document.getElementById("castle");


window.onscroll = function(){


  var x = window.pageXOffset;

  console.log(x);

  counter.style.left = 400 + x * .97 + "px";

  counter.innerHTML = x + "px";

  if (x > 2000) {
    counter.style.backgroundColor = "green";
  }else{
    counter.style.backgroundColor = "blue";}

    icon.style.left = 100 + x  + "px";

  if(x > 1000){

  icon.src="https://2.bp.blogspot.com/-MTmoGMeE2cc/WSGIutFSHoI/AAAAAAAAK6o/Ya-tX6NvAqUM2LqV4VlxzsfwzD8xXEPFACLcB/s1600/254___thumbs-up-emoji.png";

  }else{

    icon.src="img/house1.png";
  }

house2.style.left = 500 + x  + "px";

if(x > 1000){

house2.src="https://2.bp.blogspot.com/-MTmoGMeE2cc/WSGIutFSHoI/AAAAAAAAK6o/Ya-tX6NvAqUM2LqV4VlxzsfwzD8xXEPFACLcB/s1600/254___thumbs-up-emoji.png";

}else{

  house2.src="img/house1.png";
}

house3.style.left = 800 + x  + "px";

if(x > 1000){

house3.src="https://2.bp.blogspot.com/-MTmoGMeE2cc/WSGIutFSHoI/AAAAAAAAK6o/Ya-tX6NvAqUM2LqV4VlxzsfwzD8xXEPFACLcB/s1600/254___thumbs-up-emoji.png";

}else{

  house3.src="img/house1.png";
}

};
