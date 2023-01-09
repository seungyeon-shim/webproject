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


  /**************************************** */
  function fnYoutubeResize(){
    var imgW = $('.gnb-map img').innerWidth()
    var imgH = $('.gnb-map img').innerHeight()
    $('.gnb-map iframe').width(imgW)//넓이 설정
    $('.gnb-map iframe').height(imgH)//높이 설정
  }

  $(window).load(function(){//이미지가 다 다운로드 되고나서...그래야 이미지사이즈를 측정할 수 있음
    fnYoutubeResize()
  })
  

  $(window).resize(function(){//사이즈창의 크기가 변했을때 
    fnYoutubeResize()
  })

  /*gnb-btn***************************************** */
  $('.gnb-btn').click(function(){
    $(this).toggleClass('active')
    $('.gnb-map').stop().fadeToggle().toggleClass('active')
    $('.gnb-map>ul>li>a').addClass('ebs') //폰트 변경
  })

  let bgArr = [
    {
      num:'1', 
      imgpath:'./img/logo&icon/test1.jpg'
    },
    {
      num:'2', 
      imgpath:'./img/logo&icon/test2.jpg'
    }
  ]
  $(`.gnb-map ul li a`).mouseenter(function(){
    $('.hover-bg').css({'background-image':'url(http://127.0.0.1/%EC%84%9C%EC%95%BC%EA%B6%81/img/logo&icon/test2.png)'})
    //$(this).find('.hover-bg').css({'background-color':'red'})
   //$(this).find('.hover-bg').css({'background-image':'url(../../img/logo&icon/test1.jpg)'})
  })

  $(`.gnb-map ul li a`).mouseleave(function(){
    $('.hover-bg').css({'background-image':'none'})
    //$(this).find('.hover-bg').css({'background-color':'red'})
   //$(this).find('.hover-bg').css({'background-image':'url(../../img/logo&icon/test1.jpg)'})
  })
})//ready end