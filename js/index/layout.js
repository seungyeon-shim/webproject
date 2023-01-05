$(function () {
  let fnSetSticky = () => {
    /* 컨테이너,스티키 위치잡기 */
    $('.sticky-container').css({ 'height': `${winH + winW * 3}px` })//높이잡기
    $('.sticky').css({ 'height': `${winH}px` })//높이잡기
    let StickyStart = $('.sticky-container').offset().top//높이알기
    //offsettop(브라우저에서 얼마나 떨어져있는지 + 현재스크롤이 얼마인지)
    let StickyEnd =  $('.sticky-container').offset().top +  $('.sticky-container').innerHeight() - winH//높이알기
    
    let metaX
   
    if (scrY < StickyStart) {//sticky 전
      metaX = 0
    } else if (scrY >= StickyStart && scrY <= StickyEnd) {//sticky 공간 
      metaX = StickyStart - scrY

    } else if (scrY > StickyEnd) {//sticky 후
      metaX = $('.sticky').innerWidth() - $('.sticky-inner').innerWidth()
    }//ifelse
    console.log(StickyStart , StickyEnd);
    $('.sticky-inner').css({ 'transform': `translateX(${metaX}px)` })
  }//fn

  fnSetSticky();
  $(window)
    .scroll(function () {
      fnSetSticky();
    })
    .resize(function () {
      fnSetSticky();
    }); //windowEvt
})//read