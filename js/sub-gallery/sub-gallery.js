$(function(){

  function gallerybg(){
    var gallery2 = $('.sub-gallery').offset().top
    var gallery3 = $('.sub-location').offset().top
    if(scrY >= gallery2 - winH * 0.6 && scrY < gallery3 - winH * 0.5){
      //$('.sub-gallery .gallery-bottom, .sub-gallery .gallery-top').addClass('active')
    }else{
      //$('.sub-gallery .gallery-bottom, .sub-gallery .gallery-top').removeClass('active')
    }
  }
  gallerybg()
  $(window).resize(function(){
    gallerybg()
  }).scroll(function(){
    gallerybg()
  })



})//ready