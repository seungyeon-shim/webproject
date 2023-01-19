$(function () { 
  /* 스크롤 텍스트박스 이동 모션 -------------------------------------------------- */
  function textbox(){
    let moveRange = $('.main-about .sticky').innerWidth() - $('.main-about .text-container').innerWidth()
    let scrStart = $('.main-about .scr-target1').offset().top
    let scrEnd = $('.main-about .scr-target4').offset().top
    let scrRange = scrEnd - scrStart
    let scr = (scrY - scrStart)
    let ratio = scr / scrRange 
    ratio = (ratio<0) ? 0 : ratio
    ratio = (ratio>1) ? 1 : ratio
    let meta = ratio * moveRange

    $('.main-about .text-container').css({'left': `${meta}px`}) 
  }

  textbox()
  $(window).resize(function(){
    textbox()
  }).scroll(function(){
    textbox()
  })

  /* 스크롤 이미지 교체 -------------------------------------------------- */
  
})//read