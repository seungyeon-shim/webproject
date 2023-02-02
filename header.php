<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!--
  폰트, 폰트어썸, 제이쿼리, reset, style, common.js 등 링크 걸기,
  *파티클빼고 넣어놓음
-->
  <link rel="stylesheet" href="./css/scrollbar.css">
  <link rel="stylesheet" href="./css/isotope.css">
  <link rel="stylesheet" href="./css/justifiedGallery.min.css">
  <link rel="stylesheet" href="./css/flipBook.css">
  <link rel="stylesheet" href="./css/viewbox.css">
  <link rel="stylesheet" href="./css/animation.css">
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/scrollbar.css">
  <!--reset-->
  <link rel="stylesheet" href="./css/style.css">

  <!--style-->
  <link rel="stylesheet" href="./css/header/header.css">
  <link rel="stylesheet" href="./css/footer/footer.css">
  <link rel="stylesheet" href="./css/header/logo.css">
  <link rel="stylesheet" href="./css/header/gnb-map.css">
  <link rel="stylesheet" href="./css/sub-common/sub-common.css">
  
  <link rel="stylesheet" href="./css/main-section/index.css">
  <link rel="stylesheet" href="./css/main-section/main-visual.css">
  <link rel="stylesheet" href="./css/main-section/main-event.css">
  <link rel="stylesheet" href="./css/main-section/main-bg.css">
  <link rel="stylesheet" href="./css/main-section/main-about.css">
  
  <link rel="stylesheet" href="./css/sub-snb/snb.css">
  <link rel="stylesheet" href="./css/preloader.css">
  <link rel="stylesheet" href="./css/sub/sub-visual.css">
  <link rel="stylesheet" href="./css/sub/sub-story.css">
  <link rel="stylesheet" href="./css/sub/sub-location.css">
  <link rel="stylesheet" href="./css/sub/sub-history.css">
 


  <script src="http://code.jquery.com/jquery-latest.js"></script><!--제이쿼리-->
  <script src="https://kit.fontawesome.com/11c930b057.js" crossorigin="anonymous"></script><!--fontawesome-->
  <!--font-->
  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200;300;400;500;600;700;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">

  <script src="./js/type_effect.js"></script>
  <script src="./js/hoverBox.js"></script>
  <script src="./js/jquery.isotope.js"></script>
  <script src="./js/jquery.justifiedGallery.min.js"></script>
  <script src="./js/masonry-docs.min.js"></script>
  <script src="./js/flipBook.js"></script>
  <script src="./js/jquery.viewbox.min.js"></script>
  <script src="./js/responsive_carousel_horz.js"></script>
  <script src="./js/responsive_carousel_vert.js"></script>
  <script src="./js/grained.min.js"></script>
  <!--noise-->
  <script src="./js/tweenmax.js"></script>
  <!--svg-->
  <script src="./js/morphsvg.js"></script>
  <!--svg-->

  <script src="./js/common.js"></script>
  <!--common.js-->

  <title>서울 야경 궁</title>

</head>

<body>
  <?php include "preloader.php" ?>

  <header>
    <script src="./js/header/header.js"></script>
    <div class="inner">
      <h1><a href="./index.php">
          <?php include "logo.php" ?>

        </a></h1>

      <div class="right">
        <nav class="gnb-lg">
          <?php include "menu.php" ?>
        </nav><!--gnb-lg-->

        <button class="gnb-btn">
          <div class="hamburger">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
        </button>
      </div> <!--right-->
    </div><!--inner-->
  </header><!--header-->

  <nav class="gnb-map">

    <?php include "menu.php" ?>
 
    <figure class="bg-star">
      <span class="star"></span>
      <span class="star"></span>
      <span class="star"></span>
      <img src="./img/logo&icon/bg.jpg" alt="">
    </figure>

    <figure class="hover-bg">
      <img class="gnb-bg gnb-bg-img1" src="./img/logo&icon/bg1.jpg" alt="">
      <img class="gnb-bg gnb-bg-img2" src="./img/logo&icon/bg2.jpg" alt="">
      <img class="gnb-bg gnb-bg-img3" src="./img/logo&icon/bg3.jpg" alt="">
      <img class="gnb-bg gnb-bg-img4" src="./img/logo&icon/bg4.jpg" alt="">
    </figure>

    <figure class="bg-container">
      <img class="bg-tree" src="./img/logo&icon/bg-tree.png" alt="">
      <img class="lantern lantern-left" src="./img/logo&icon/lantern1.png" alt="">
      <img class="lantern lantern-right" src="./img/logo&icon/lantern2.png" alt="">
    </figure>

  </nav>