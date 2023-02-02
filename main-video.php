<link rel="stylesheet" href="./css/main-section/main-video.css">
<script src="./js/index/main-video.js"></script>
<script src="./js/index/store.js"></script>
<!-- 본문시작 -->


<section class="main-section video-section">
  <div class="title">
    <em>별이 반짝이는 서울의 궁</em>
    <h2 class="ebs">4대궁 영상</h2>
    <p>"서울 4대궁의 다양한 영상을 안내드립니다."</p>
  </div>

  <div class="video-container">
    <?php include "main-video-svg.php" ?>
    <iframe src="https://www.youtube.com/embed/lF1P-nH2oTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div><!-- video-container -->

</section>

<script>
  $('.video-section').append('<ul></ul>')
  videoArr.forEach(function(v) {
    $('.video-section ul').append(`
      <li>
        <button value="${v}">
          <img src="https://img.youtube.com/vi/${v}/mqdefault.jpg">
        </button>
      </li>
    `) //append
  }) //forEach    
</script>