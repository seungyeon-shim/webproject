<link rel="stylesheet" href="./css/main-section/main-visual.css">

<script src="js/particles.js"></script>
<script src="js/app_particle_star1.js"></script>
<script src="./js/index/main-visual.js"></script>
<!-- 본문시작 -->
<section class="main-section main-visual">
  <div class="title">
    <em>별이 반짝이는 서울의 궁</em>
    <h2 class="ebs">
      서울 야경의 궁
    </h2>
    <p>
      " 별이 반짝이는 서울의 궁에서<br>
      어쩌구 저쩌구 디자인은 생각 "
    </p>
  </div><!-- title -->

  <div class="slider-bg">
    <div class="star" id="star1"></div>
    <video class="moon" src="./video/moon.mp4" loop muted autoplay playsinline></video>
  </div><!-- bg -->

  <div class="slider slider1 active">
    <div class="star" id="star1"></div>
    <em class="name point-sans">
      景福宮
    </em>
    <figure class="castle castle1">
      <img class="lg" src="./img/main/main-visual/kbg.png" alt="">
      <img class="sm" src="./img/main/main-visual/kbgs.png" alt="">
    </figure>

  </div><!-- 1 -->

  <div class="slider slider2">
    <div class="star" id="star2"></div>
    <em class="name point-sans">
      德壽宮
    </em>
    <figure class="castle castle2">
      <img class="lg" src="./img/main/main-visual/dsg.png" alt="">
      <img class="sm" src="./img/main/main-visual/dsgs.png" alt="">
    </figure>

  </div><!-- 2 -->

  <div class="slider slider3">
    <div class="star" id="star3"></div>
    <em class="name point-sans">
      昌慶宮
    </em>
    <figure class="castle castle3">
      <img class="lg" src="./img/main/main-visual/cgg.png" alt="">
      <img class="sm" src="./img/main/main-visual/cggs.png" alt="">
    </figure>

  </div><!-- 3 -->

  <div class="slider slider4">
    <div class="star" id="star4"></div>
    <em class="name point-sans">
      昌德宮
    </em>
    <figure class="castle castle4">
      <img class="lg" src="./img/main/main-visual/cdg.png" alt="">
      <img class="sm" src="./img/main/main-visual/cdgs.png" alt="">
    </figure>
  </div><!-- 4 -->
  
  <video class="video video1 active" src="" loop muted autoplay playsline></video>
  <script>
    var videoArr = ['spring','summer','fall','winter']
    var videoSrc = videoArr[Math.floor(Math.random()*4)]
    $('.video').attr('src',`./video/${videoSrc}.mp4`)
  </script>
  <!-- 
  <video class="video video2" src="./video/summer.mp4" loop muted autoplay playsline></video>
  <video class="video video3" src="./video/fall.mp4" loop muted autoplay playsline></video>
  <video class="video video4" src="./video/winter.mp4" loop muted autoplay playsline></video>
   -->
</section>
<div class="dummy-scroll scr-section1" style="height:100%"></div>