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
  // function fnYoutubeResize(){
  //   var imgW = $('.gnb-map .youtube-img').innerWidth()
  //   var imgH = $('.gnb-map .youtube-img').innerHeight()
  //   $('.gnb-map iframe').width(imgW)//넓이 설정
  //   $('.gnb-map iframe').height(imgH)//높이 설정
  // }

  // $(window).load(function(){//이미지가 다 다운로드 되고나서...그래야 이미지사이즈를 측정할 수 있음
  //   fnYoutubeResize()
  // })
  

  // $(window).resize(function(){//사이즈창의 크기가 변했을때 
  //   fnYoutubeResize()
  // })

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
  })

  $(`.gnb-map ul li a`).mouseleave(function(){
    $(`.hover-bg .gnb-bg`).removeClass('active')
  })
})//ready end