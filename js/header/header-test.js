$(function(){
  function fnHeaderFixed(){
    if(scrY>=10){
      $('header').addClass('active')
    } else{
      $('header').removeClass('active')
    }
  }//fn() end
  
  $(".hamburger").click(function(){
    $(this).toggleClass("active");
  });


  fnHeaderFixed()
  $(window).scroll(function(){
    fnHeaderFixed()
  }).resize(function(){
    fnHeaderFixed()
  })//window end


  /**tree-motion************************************** */
  $('.bg-container').mousemove(function(e){
      var mouseX = e.offsetX //마우스 좌표
      var mouseY = e.offsetY
      mouseMotion(mouseX, mouseY)
  }).bind('touchmove',function(e){//모바일에서 가능하게
    var mouseX = e.originalEvent.offsetX
    var mouseY = e.originalEvent.offsetX
    mouseMotion(mouseX, mouseY)
})

function mouseMotion(mouseX, mouseY){
  var centerX = $(this).innerWidth() * 0.5 //중앙
  var centerY = $(this).innerHeight() * 0.5 //중앙
  var diffX = mouseX - centerX //변화량 값
  var diffY = mouseY - centerY //변화량 값

  if(metaScale < 1 ) metaScale = 1
  var metaScale = 1.5 + diffX*0.0001 //2원래크기의 2배 + diffx변화량(값이큼)*0.005(변화량 조절)
  var metaScale2 = 1 + diffX*0.03 //2원래크기의 2배 + diffx변화량(값이큼)*0.005(변화량 조절)
  $('.bg-container .bg-tree').css({'transform':`scale(${metaScale})`})
  //$('.lantern-left').css({'transform':`rotate(${metaScale2}deg)`})
  //$('.lantern-right').css({'transform':`rotate(-${metaScale2}deg)`})
}
  /*gnb-btn***************************************** */
  $('.gnb-btn').click(function(){
    $(this).toggleClass('active')
    $('.gnb-map').toggleClass('active')
    $('.gnb-map>ul>li>a').addClass('ebs') //폰트 변경
  })



  $(`.gnb-map ul li a`).mouseenter(function(){
    var liNum = $(this).parent('li').attr('data-n')
    console.log(liNum)
   $(`.hover-bg .gnb-bg-img${liNum}`).addClass('active')
   $('.bg-container .bg-tree').css({'display':'none'})
  })
  
  $(`.gnb-map ul li a`).mouseleave(function(){
    $(`.hover-bg .gnb-bg`).removeClass('active')
    $('.bg-container .bg-tree').css({'display':'block'})
  })
})//ready end