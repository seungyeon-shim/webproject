$(function () {

  function textbox() {
    let moveRange = $('.main-about .sticky').innerWidth() - $('.main-about .text-container').innerWidth()
    let scrStart = $('.main-about .scr-target1').offset().top
    let scrEnd = $('.main-about .scr-target4').offset().top
    let scrRange = scrEnd - scrStart
    let scr = (scrY - scrStart)
    let ratio = scr / scrRange
    ratio = (ratio < 0) ? 0 : ratio
    ratio = (ratio > 1) ? 1 : ratio
    let meta = ratio * moveRange
    $('.main-about .text-container').css({ 'left': `${meta}px` })
  }

  /* 스크롤 텍스트박스 이동 모션 -------------------------------------------------- */

  /* imgbox show hide---------------------------------------------------------------- */
  function imgboxChange() {
    $('.main-about .imgbox img:not(.img1)').each(function () {
      let scrStart = $('.scr-target1').offset().top - winH
      let scrEnd = $('.scr-target4').offset().top
      let scrRange =  scrEnd - scrStart
      let scrRatio = (scrY - scrStart) / scrRange
      let figure
      if(scrRatio > 0 && scrRatio < 0.25){
        figure = 1
      }else if(scrRatio >= 0.25 && scrRatio < 0.5){
        figure = 2
      }else if(scrRatio >= 0.5 && scrRatio < 0.75){
        figure = 3
      }else{
        figure = 4
      }
      $('.main-about .imgbox').removeClass('active')
      $('.main-about .imgbox'+figure).addClass('active')
      let n = parseInt($(this).attr('data-n'))
      let start = scrStart + (n-1) * scrRange * 0.0833
      let end = start + scrRange * 0.0833
      let range = end - start
      let ratio = (scrY - start) / range
      let num = 1 + parseInt(ratio * 5)
      if(num < 1) {num = 1}
      if(num > 6) {num = 6}
      $(this).css({'-webkit-mask-image':`url(./img/main/main-about/mask/${num}.png)`})
    })//each 
    
  }//imgboxChange


  /* 스크롤 이미지 교체 -------------------------------------------------- */


  /* 호출-------------------------------------------------------------- */

  function motion() {
    var cancelRAF
    window.cancelAnimationFrame(cancelRAF)
    cancelRAF = requestAnimationFrame(function () {
      textbox() 
      imgboxChange() 
    })
  }//fnFrame
  motion()
  $(document).scroll(function () {
    motion()
  })
  $(window).resize(function(){
    motion()
  })


})//read