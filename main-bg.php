<link rel="stylesheet" href="./css/main-section/main-bg.css">
<script src="js/particles.js"></script>
<script src="js/app_particle_star0.js"></script>

<!-- 본문시작 -->
<section class="main-bg">
  <div class="star" id="star0"></div>
  <video class="moon" src="./video/moon.mp4" loop muted autoplay playsinine></video>
  <video class="video video1 active" src="" loop muted autoplay playsinline></video>
  <script>
    var videoArr = ['spring','summer','fall','winter']
    var videoSrc = videoArr[Math.floor(Math.random()*4)]
    $('.video').attr('src',`./video/${videoSrc}.mp4`)
  </script>
</section>