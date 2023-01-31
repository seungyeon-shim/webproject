$('.preloader').bind('mousewheel', function () {
  return false /*휠 막기*/
})


$(window).load(function () {
  /*--------------------------------loading글자  */
  // var str
  // var strArr
  // str = $('.preloader .textbox p').text().trim() //trim() 글자 가져올때 불필요한 여백을 뜯음
  // strArr = str.split('')//한글자씩 배열로 뜯어냄
  // $('.preloader .textbox p').empty() //글자 지우기
  
  // strArr.forEach(function (v, i) {
  //   let char = v 
  //   $('.preloader .textbox p').append(`
  //   <span style="transition-delay:${i * 0.1}s">${v}</span>
  //   `)
  // })//forEach
  
  // $('.preloader .textbox span').addClass('active')
  
  setTimeout(function () {
    $('.preloader').fadeOut()
    $('body').css({ 'overflow': 'auto' })
  }, 500)

})