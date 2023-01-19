<link rel="stylesheet" href="./css/sub/sub-visual.css">

<section class="sub-visual sub-visual-kbg ">
<figure class="sub-bg">
    <img src="./img/sub/sub-deco/visual-background.png" alt="">
  </figure>

  <div class="inner">
    <svg style="display: none;">
      <filter id="filter">
        <feTurbulence id="water" numOctaves="3" seed="1" baseFrequency="0.02 0.5" />
        <feDisplacementMap scale="10" in="SourceGraphic" />
        <animate href="#water" attributeName="baseFrequency" keyTimes="0;0.5;1" values="0.002;0.008;0.002" dur="20s" repeatCount="indefinite" />
      </filter>
    </svg>
  </div>



<video class="moon" src="./video/moon.mp4" loop muted autoplay playisline></video>
  <!-- <video src="./video/tree.mp4" autoplay muted loop></video> -->
  <!-- particles.js container -->
  <script src="./js/sub-visual/sub-visual-kbg/sub-visual-kbg.js"></script>
  <script src="./js/sub-visual/sub-visual-kbg/particles.js"></script>
  <script src="./js/sub-visual/sub-visual-kbg/app_particle_star.js"></script>
  <div id="particles-js"></div>
  <!-- particles.js container -->

  <div class="sub-title-wrap sub-title-wrap-center">
    <h2 class="sub-title">덕수궁</h2> 
    <p class="sub-desc">
      <!--건청궁·향원정에 이르기까지 경복궁 별빛야행에서만
      허락된 경복궁 북측 권역으로의 발걸음은 고궁의
      고즈넉함을 온전히 느끼며,  -->
      대한제국의 황궁으로 옛 이름은 경운궁 <br>
      대한제국의 역사를 경험하는 잊지못할 감동을 선사할것입니다.  
    </p>
  </div><!-- sub-title-wrap -->


  <div class="sub-visual-slider">
    <figure class="castle castle1 active"></figure>
    <figure class="castle castle2"></figure>
    <figure class="castle castle3"></figure>
    <script>
      for (var i = 1; i <= 3; i++) { 
        for (var j = 1; j <= 10; j++) {
          $(`.castle${i}`).append(`<img class="img${j} lg" src="./img/sub/sub-visual/dsg/dsg-${i}.png">`)
          $(`.castle${i}`).append(`<img class="img${j} sm" src="./img/sub/sub-visual/dsg/dsg-${i}s.png">`)
        }
      }
    </script>
  </div>
  <video class="season winter" src="./video/summer2.mp4" loop muted autoplay playsInline></video>
</section>