$(document).ready(function(){
  var carousel = $(".carousel"),
      currdeg  = 0,
      planeta = 0;
      ativo = true;
      
  $(".next").on("click", { d: "n" }, rotate);
  $(".prev").on("click", { d: "p" }, rotate);
  
  function ativaClick(){
    ativo = true;
  }
  
  function rotate(e){
    if(ativo){
      ativo = false;
      if(e.data.d=="p"){
        setTimeout(ativaClick, 800);
        currdeg = currdeg - 45;
        if(currdeg % 360 == 0){
        	planeta = 0;
        }else{
        	planeta++;
        }
        $('h1').animate({'opacity': 0, width: "90%"}, function(){
            $(this).text(arrNomePlanetas[planeta]).stop().animate({'opacity': 1, width: "100%"});  
        });
        $('p').animate({opacity: 0, width: "90%"}, function(){
            $(this).text(arrDescPlanetas[planeta]).stop().animate({opacity: 1, width: "100%"});   
        });
      }
      if(e.data.d=="n"){
        setTimeout(ativaClick, 800);
        currdeg = currdeg + 45;
        if(currdeg % 360 == 45 || currdeg == 45){
        	planeta = 7;
        }else{
        	planeta--;
        	if(planeta < 0){
        		planeta = 7; 
        	}
        }
        $('h1').animate({'opacity': 0, width: "90%"}, function(){
        $(this).text(arrNomePlanetas[planeta]).stop().animate({'opacity': 1, width: "100%"});   
        });
        $('p').animate({opacity: 0, width: "90%"}, function(){
            $(this).text(arrDescPlanetas[planeta]).stop().animate({opacity: 1, width: "100%"});   
        });
      }
      carousel.css({
        "-webkit-transform": "rotateY("+currdeg+"deg)",
        "-moz-transform": "rotateY("+currdeg+"deg)",
        "-o-transform": "rotateY("+currdeg+"deg)",
        "transform": "rotateY("+currdeg+"deg)"
      });
    }
  }
});
