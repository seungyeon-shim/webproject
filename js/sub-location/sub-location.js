$(function () {
  function motion() {
    var offsetTop = $('.sub-location').offset().top
    if(scrY >= offsetTop - winH * 0.5){
      $('.sub-location .location-wrap').addClass('active')
    }else{
      $('.sub-location .location-wrap').removeClass('active')
    }
  }//fn
  motion()
  $(window).scroll(function () {
    motion()
  }).resize(function () {
    motion()
  })

})