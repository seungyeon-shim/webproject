$(function(){

  function gallerybg(){
    var gallery2 = $('.sub-gallery').offset().top
    var gallery3 = $('.sub-location').offset().top
    if(scrY >= gallery2 - winH * 0.6 && scrY < gallery3 - winH * 0.5){
      $('.sub-gallery .cover').addClass('active')
    }else{
      $('.sub-gallery .cover').removeClass('active')
    }
  }
  gallerybg()
  $(window).resize(function(){
    gallerybg()
  }).scroll(function(){
    gallerybg()
  })

  var book = new flipBook('.book')
  $('.sub-gallery .btns button').click(function(){
    var n = parseInt($(this).attr('data-n'))
    book.flip(n)
    $('.sub-gallery .btns button').removeClass('active')
    $(this).addClass('active')
    if(n>1){
      $('.sub-gallery .content .book .sheet1 .page1 img').css({opacity:'0'})
    }else if(n=1){
      $('.sub-gallery .content .book .sheet1 .page1 img').css({opacity:'1'})
    }
  })


})//ready