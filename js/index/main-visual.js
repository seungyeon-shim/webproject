$(function(){
  $('video.moon')[0].playbackRate=3
/*   $('video.moon')[1].playbackRate=3
  $('video.moon')[2].playbackRate=3
  $('video.moon')[3].playbackRate=3
  $('video.moon')[4].playbackRate=3 */

  n = 1
  setInterval(function(){
    n ++ 
    if(n > 4) n = 1
    $('.main-visual .slider').removeClass('active')
    $('.main-visual .slider'+n).addClass('active')
    $('.main-visual .video').removeClass('active')
    $('.main-visual .video'+n).addClass('active')
  },7000)

  function mask(){
    var meta = winH - scrY
    if(meta < 0){meta = 0}
    $('.main-visual').css({'clip-path':`polygon(0 0, 100% 0, 100% ${meta}px, 0 ${meta}px)`})
  }
  mask()
  $(window).resize(function(){
    mask()
  }).scroll(function(){
    mask()
  })
 
}) 