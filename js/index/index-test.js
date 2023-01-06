$(function(){
  let fnSetSticky = () => {
    $('.sticky-container').css({'height':`${winH+winW*3}px`})
    $('.sticky').css({'height':`${winH}px`})
    let stickyStart = $('.sticky-container').offset().top
    let stickyEnd = $('.section2-story').offset().top - winH

    let metaX
    if(scrY < stickyStart){ //스티키 전
      metaX = 0
    }else if(scrY >= stickyStart && scrY <= stickyEnd){//스크롤이 스티키 시작부터 스티키가 끝나는 지점까지...스티키가 일어나는 공간
      metaX = stickyStart - scrY 
    }else if(scrY > stickyEnd){//스티키 끝
    //섹션6번 가로 값 - 스티키이너 가로값 ----> 순서를 이렇게 해줘야 마이너스 값이 나옴
    metaX = $('.sticky').innerWidth()  - $('.sticky-inner').innerWidth()
    //                                                       
    }
    console.log(metaX,stickyStart,scrY)
    $('.sticky-inner').css({'transform':`translateX(${metaX}px)`})
  }//fnSetSticky

  fnSetSticky()
  $(window).resize(function(){
    fnSetSticky()
  }).scroll(function(){
    fnSetSticky()
  })
})