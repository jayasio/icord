$(".ind_mosaic").hover(function(){
  $(this).find(":button").show();
  $(this).css({
    // "width":"200",
    // "height":"200",
    "z-index":"+1",
    // "position":"relative",
    // "horizontal-anchor":"center",
    // "vertical-anchor":"rigth",
    "transform":"scale(10,10)",
    "transform-origin":"center",
    "filter":"blur(0)",
    "transition":"0.15s"
  });
  /*$(this).find(".middle").css({    
    "opacity":"1"    
  });*/
}, function(){
  $(this).find(":button").hide();
  //$(this).find(".middle").hide();
  $(this).css({
    /*"width":"20",
    "height":"20",*/
    "z-index":"0",
    "transform":"scale(1,1)",
    "position":"relative",
    "filter":"blur(0px)"
  });
}
);


$(".viewbtn").click(function(){
	
	//window.location.href='view_big.php';
	// Get the image id, style and the url from it
	$('.title').html('hello');
  //var img = $(this).parent(".ind_mosaic");
  //var style = img.currentStyle;
 // var bi = $(this).parent().style.backgroundImage.slice(4, -1).replace(/"/g, "");
  
  var bi = this.parentElement.style.backgroundImage.slice(4, -1).replace(/"/g, "");
  
  $('.title').html(bi);
	//var isrc = $(this).parent().style.background-image
	window.open('view_big.php?isrc='+bi,'_blank');
	//window.location.href='view_big.php?isrc='+bi;
});

