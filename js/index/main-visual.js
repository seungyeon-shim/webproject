$(function(){
  $('video.moon')[0].playbackRate=3
  $('video.moon')[1].playbackRate=3
  $('video.moon')[2].playbackRate=3
  $('video.moon')[3].playbackRate=3
  $('video.moon')[4].playbackRate=3
  n = 1
  setInterval(function(){
    n ++ 
    if(n > 4) n = 1
    $('.main-visual .slider').removeClass('active')
    $('.main-visual .slider'+n).addClass('active')
  },7000)
}) 