$(function(){
  function motion(){
    var offsetTop = $('.sub-story').offset().top
    if(scrY >= offsetTop - winH * 0.5){
      $('.sub-story .content').addClass('active')
    }else{
      $('.sub-story .content').removeClass('active')
    }
  }
  function activeMotion(){
    var offsetTop1 = $('.sub-history').offset().top
    var offsetTop3 = $('.sub-gallery').offset().top
    if(scrY >= offsetTop1 && scrY < offsetTop3){
      $('.sub-story .open').removeClass('active')
    }
  }
  motion()
  activeMotion()
  $(window).scroll(function(){
    motion()
    activeMotion()
  }).resize(function(){
    motion()
    activeMotion()
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

  $('.sub-story .box').click(function(){
    var n = $(this).attr('data-n')
    $('.sub-story .open'+n).addClass('active')
  })

  $('.sub-story .open').click(function(){
    $(this).removeClass('active')
  })
})