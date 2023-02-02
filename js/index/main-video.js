$(function(){
  $('.video-section button').click(function(){
    var id = $(this).val()
    $('.video-section iframe').attr('src',`https://www.youtube.com/embed/${id}`)
  })//click
})