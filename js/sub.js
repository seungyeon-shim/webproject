$(function () {
  /* 첫페이지 주소검사 */
  var url = location.href; //현재주소
  var domain = location.protocol + "//" + location.hostname + "/"; //도메인
  var target;

  /* 섹션별 휠이벤트 */
  var headerH;
  function fnHeaderHeight() {
    if (matchMedia("(min-width:1100px)").matches) {
      //미디어쿼리 여부에따라 달라짐
      headerH = 0;
    } else {
      headerH = 0;
    }
  } //fn
  fnHeaderHeight();
  $(window).resize(function () {
    fnHeaderHeight();
  }); //resize
  /* 섹션별 휠이벤트 */
  var isWheel = true;
  $(".sub-section").bind("mousewheel", function (e) {
    if (!isWheel) return false;
    isWheel = false;
    setTimeout(function () {
      isWheel = true;
    }, 800);

    window.smoothScroll = false;
    var delta = e.originalEvent.wheelDelta / -120;
    var current = parseInt($(this).attr("data-n"));
    var target = delta + current;
    if (target === 0) {
      target = 1;
    }
    if (target === 7) {
      target = 6;
    }
    if (target === 6) {
      $(".sub-section5").attr("data-n", "6");
      var footerH = $("footer").innerHeight();
    } else {
      $(".sub-section5").attr("data-n", "5");
      $(".sub-section").css({ transform: `translateY(0px)` });
    }
    /* 스크롤이동명령어 */
    $("body,html").stop().animate({scrollTop: $(".sub-section" + target + "-scr").offset().top - headerH});

    return false
  }); //bind



/* 스크롤 스파이 버튼----------------------------- */
$('.scroll-spy button').click(function () {
  var target = $(this).attr('data-n')
  //스크롤이동명령어
  $('body,html').stop().animate({ 'scrollTop': $('.sub-section' + target+ '-scr').offset().top - headerH })

  //active

  $('.sub-section'+target).addClass('active')


})//click


/* 스크롤 스파이 */

function fnScrollSpy() {
  var offset1 = $(".sub-section1-scr").offset().top - headerH - 2;
  var offset2 = $(".sub-section2-scr").offset().top - headerH - 2;
  var offset3 = $(".sub-section3-scr").offset().top - headerH - 2;
  var offset4 = $(".sub-section4-scr").offset().top - headerH - 2;
  var offset5 = $(".sub-section5-scr").offset().top - headerH - 2;
  var current;
  if (scrY < offset2) {
    //1
    current = 1;
  } else if (scrY >= offset2 && scrY < offset3) {
    //2
    current = 2;
  } else if (scrY >= offset3 && scrY < offset4) {
    //3
    current = 3;
  } else if (scrY >= offset4 && scrY < offset5) {
    //4
    current = 4;
  } else {
    //5
    current = 5;
  } //if

  //btn-active
  $('.scroll-spy button').removeClass('active')
  $(`.scroll-btn${current}`).addClass('active')

  //footer 보여주기
  if(scrY > offset5){
    var footerH = $('footer').innerHeight()

  }else{
    $('.sub-section').css({'transform':`translateY(0px)`})
  }
  
  $('.sub-section' + current).addClass('active')
} //fn
fnScrollSpy()
$(window).resize(function(){
  fnScrollSpy()
}).scroll(function () {
  fnScrollSpy()
})//win event


}); //read
