$(function(){

  var n = 1
  setInterval(function(){
    n ++
    if(n > 3) n = 1
    $('.sub-visual .sub-visual-slider figure').removeClass('active')
    $('.sub-visual .sub-visual-slider .castle'+n).addClass('active')
  },5000)
})