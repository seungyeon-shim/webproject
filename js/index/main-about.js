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
    console.log('tt');
  }

  /* 스크롤 텍스트박스 이동 모션 -------------------------------------------------- */

  /* imgbox show hide---------------------------------------------------------------- */
  function imgboxChange() {
    $('.main-about .imgbox').each(function () {
    })//each
    console.log('t2');
  }


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

  $(document).scroll(function () {
    motion()
  });


})//read