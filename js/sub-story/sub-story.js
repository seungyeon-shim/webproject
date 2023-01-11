$(function(){
  function motion(){
    var offsetTop = $('.sub-story').offset().top
    if(scrY >= offsetTop - winH * 0.5){
      $('.sub-story .content').addClass('active')
    }else{
      $('.sub-story .content').removeClass('active')
    }
  }
  motion()
  $(window).scroll(function(){
    motion()
  }).resize(function(){
    motion()
  })//event

  var n = 1
  $('.sub-story .indicator').click(function(){
    var increase = parseInt($(this).attr('data-n'))
    n += increase
    $('.indicator').show()
    if(n >= 3){ n = 3 ; $('.next').hide() }
    if(n <= 1){ n = 1 ; $('.prev').hide()}

    $('.sub-story .box').removeClass('active')
    $('.sub-story .box' + n).addClass('active')
  })
})