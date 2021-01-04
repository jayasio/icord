$(".ind_mosaic").hover(function(){
  $(this).find(":button").show();
  $(this).css({  
    "z-index":"+1",  
    "transform":"scale(10,10)",
    "transform-origin":"center",
    "filter":"blur(0)",
    "transition":"0.15s"
  });
  
}, function(){
  $(this).find(":button").hide();
  $(this).css({   
    "z-index":"0",
    "transform":"scale(1,1)",
    "position":"relative",
    "filter":"blur(0px)"
  });
}
);

$(".viewbtn").click(function(){		
  //var bi = this.parentElement.style.backgroundImage.slice(4, -1).replace(/"/g, ""); 
  var bi = this.parentElement.getAttribute("data-cur"); 
	window.open('collection/collection-details.php?id='+bi,'_blank');
});

$(".viewbtn2").click(function(){		  
  var bi = this.parentElement.getAttribute("data-cur"); 
	window.open(bi,'_blank');
});
