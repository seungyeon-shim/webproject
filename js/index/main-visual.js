$(function(){
  if(window.isMobile){
    $('figure.castle , .main-section title').css({'filter':'none'})
    $('figure.castle img').css({'animation':'none'})
    document.querySelectorAll('.home-main video:not(.moon)').forEach(function(v){
      v.remove() 
    })
  }
  n = 1
  setInterval(function(){
    n ++ 
    if(n > 4) n = 1
    $('.main-visual .slider').removeClass('active')
    $('.main-visual .slider'+n).addClass('active')
    /* 
    $('.main-visual .video').removeClass('active')
    $('.main-visual .video'+n).addClass('active')
     */
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