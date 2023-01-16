$(function(){

  function gallerybg(){
    var gallery = $('.sub-gallery').offset().top
    if(scrY >= gallery - winH * 0.6){
      $('.sub-gallery .gallery-bottom, .sub-gallery .gallery-top').addClass('active')
    }else if(scrY < gallery){
      $('.sub-gallery .gallery-bottom, .sub-gallery .gallery-top').removeClass('active')
    }
  }
  gallerybg()
  $(window).resize(function(){
    gallerybg()
  }).scroll(function(){
    gallerybg()
  })



})//ready