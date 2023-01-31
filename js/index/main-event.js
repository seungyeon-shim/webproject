$(function () {
  $('.main-event .container li a').viewbox()

  function path(){
    var scrStart = $('.main-event').offset().top
    var scrEnd = scrStart + $('.main-event').innerHeight() - winH
    var scrollRange  = scrEnd - scrStart
    var scrollRatio = (scrY - scrStart) / scrollRange
    if(scrollRatio < 0){scrollRatio = 0}
    if(scrollRatio > 1){scrollRatio = 1}
    var translateX = -87.6 * scrollRatio
    $('.main-event .sticky .container').css({'transform':`translateY(-50%) translateX(${translateX}%)`})
    $('.main-event .sticky svg path').css({'stroke-dashoffset': 1 - scrollRatio - 0.15})
    var n = 1 + parseInt(scrollRatio * 8)
    $(`.main-event .sticky .container li:nth-child(${n})`).prevAll().addClass('active')
    $(`.main-event .sticky .container li:nth-child(${n})`).addClass('active')
    $(`.main-event .sticky .container li:nth-child(${n})`).nextAll().removeClass('active')
  }//fn

  function motion() {
    var cancelRAF
    window.cancelAnimationFrame(cancelRAF)
    cancelRAF = requestAnimationFrame(function () {
      path() 
      //imgboxChange() 
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