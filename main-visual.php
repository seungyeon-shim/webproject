<link rel="stylesheet" href="./css/main-section/main-visual.css">
<script src="js/particles.js"></script>
<script src="js/app_particle_star1.js"></script>
<script src="js/app_particle_star2.js"></script>
<script src="js/app_particle_star3.js"></script>
<script src="js/app_particle_star4.js"></script>

<script src="./js/index/main-visual.js"></script>
<!-- 본문시작 -->
<section class="main-section main-visual">

  <div class="title">
    <svg style="display: none;">
      <filter id="ripple">
        <feTurbulence id="water" numOctaves="3" seed="1" baseFrequency="0.02 0.5" />
        <feDisplacementMap scale="10" in="SourceGraphic" />
        <animate href="#water" attributeName="baseFrequency" keyTimes="0;0.5;1" values="0.002;0.008;0.002" dur="10s" repeatCount="indefinite" />
      </filter>
    </svg>
    <em>별이 반짝이는 서울의 궁</em>
    <h2 class="ebs">
      서울 야경의 궁
    </h2>
    <p>
      " 별이 반짝이는 서울의 궁에서<br>
      어쩌구 저쩌구 디자인은 생각 "
    </p>

  </div><!-- title -->


  <div class="slider slider1">
    <div class="star" id="star1"></div>
    <video class="moon" src="./video/moon.mp4" loop muted autoplay playisline></video>
    <em class="name point-sans">
      景福宮
    </em>
    <figure class="castle castle1">
      <img class="lg" src="./img/main/main-visual/kbg.png" alt="">
      <img class="sm" src="./img/main/main-visual/kbgs.png" alt="">
    </figure>
    <video class="season spring" src="./video/spring.mp4" loop muted autoplay playisline></video>
  </div><!-- 1 -->

  <div class="slider slider2">
    <div class="star" id="star2"></div>
    <video class="moon" src="./video/moon.mp4" loop muted autoplay playisline></video>
    <em class="name point-sans">
      德壽宮
    </em>
    <figure class="castle castle2">
      <img class="lg" src="./img/main/main-visual/dsg.png" alt="">
      <img class="sm" src="./img/main/main-visual/dsgs.png" alt="">
    </figure>
    <video class="season summer" src="./video/summer2.mp4" loop muted autoplay playisline></video>
  </div><!-- 2 -->

  <div class="slider slider3">
    <div class="star" id="star3"></div>
    <video class="moon" src="./video/moon.mp4" loop muted autoplay playisline></video>
    <em class="name point-sans">
      昌慶宮
    </em>
    <figure class="castle castle3">
      <img class="lg" src="./img/main/main-visual/cgg.png" alt="">
      <img class="sm" src="./img/main/main-visual/cggs.png" alt="">
    </figure>
    <video class="season autumn" src="./video/autumn.mp4" loop muted autoplay playisline></video>
  </div><!-- 3 -->

  <div class="slider slider4">

    <div class="star" id="star4"></div>
    <video class="moon" src="./video/moon.mp4" loop muted autoplay playisline></video>
    <em class="name point-sans">
      昌德宮
    </em>
    <figure class="castle castle4">
      <img class="lg" src="./img/main/main-visual/cdg.png" alt="">
      <img class="sm" src="./img/main/main-visual/cdgs.png" alt="">
    </figure>
    <video class="season winter" src="./video/winter.mp4" loop muted autoplay playisline></video>

  </div><!-- 4 -->
</section>