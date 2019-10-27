$(function () { // wait for document ready


  
      var max = 2000; 
      $(window).scroll(function(){
    
        var scrollPX = $(this).scrollTop();
        if(  scrollPX < max ) {
          $(".motion_section").css({"opacity":  1 - (max - scrollPX) / max});
          $(".motion_section").css('transform', 'scale(' + ( 1 - (max - scrollPX) / max )+ ')');
        }else{
          $(".motion_section").css({"opacity": 1 });
        }	
        

  });
    

  
    $(window).load(function(){
      $(".motion_section").sticky({ topSpacing: 130 });
    });





  // 가로슬라이드 화면

  var controller = new ScrollMagic.Controller();

  var horizontalSlide = new TimelineMax()
  .to("#js-slideContainer", 1,   {x: "-16.7%"})	
  .to("#js-slideContainer", 1,   {x: "-33.4%"})	
  .to("#js-slideContainer", 1,   {x: "-50.1%"})	
  .to("#js-slideContainer", 1,   {x: "-66.8%"})	
  .to("#js-slideContainer", 1,   {x: "-82.5%"})		

  new ScrollMagic.Scene({
    triggerElement: "#js-wrapper",
    // triggerElement: "#js-wrapper02",
    triggerHook: "onLeave",
    duration: "500%"
  })
    .setPin("#js-wrapper")
    .setTween(horizontalSlide)
    .addTo(controller);
  
  






  
});