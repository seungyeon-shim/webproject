<link rel="stylesheet" href="./css/sub-kbg/sub-history.css">
<script src="./js/sub-history/store.js"></script>
<section class="sub-content sub-history sub-history-kbg sub-content-center">
  <div class="sub-title-wrap sub-title-wrap-center">
    <h2 class="sub-title">경복궁 역사</h2>
    <p class="sub-desc">조선 제일의 법도 경복궁의 역사를 안내드립니다.</p>
  </div><!-- sub-title-wrap -->

  <figure class="bg-deco">
    <img class="mountain" src="./img/sub/sub-deco/mountain3.png" alt="">
    <img class="frame1 frame1-left" src="./img/sub/sub-deco/frame1-left.png" alt="">
    <img class="frame1 frame1-right" src="./img/sub/sub-deco/frame1-right.png" alt="">
    <img class="cloud cloud1" src="./img/sub/sub-deco/cloud4.png" alt="">
    <img class="cloud cloud3" src="./img/sub/sub-deco/cloud4.png" alt="">
    <img class="lantern" src="./img/sub/sub-deco/lantern1.png" alt="">
  </figure>

  <div class="sub-history-content"><!-- 전체 -->
    <!-- 상단 바 이미지 -->
    <div class="inner">
      <div class="bar-inner">
        <img src="./img/sub/sub-history/kbg/history-bar.png" alt="">
        <ol class="century-box"></ol>
      </div><!-- inner -->
      <script>
        historyArr1.forEach(function(v) {
          $(`.sub-history-content .inner ol`).append(`
          <li>
            <p class="century">${v.century}</p>
            <h3 class="year">${v.year}<span class="point-sans">年</span></h3>
          </li>
        `)
        })
      </script>
      <ol class="main-content"></ol>
      </div><!-- 슬라이드 용 div -->
      <script>
        historyArr1.forEach(function(e) {
          $(`.sub-history-content .main-content`).append(`
        <li>
          <div>
            <h4>
              <img class="arrow" src="./img/sub/sub-deco/${e.arrow}" alt="">
              <em class="history-title">${e.title}</em>
            </h4>
            <ul class="yearly-textbox"></ul>
          </div>
          <figure>
          </figure>
        </li> 
      `) //history1 append
          e.yearlyArr.forEach(function(m) {
            $(`.main-content > li:last-child > div > ul`).append(`
          <li>${m}</li>
        `)
          }) //monthArr
          e.imgArr.forEach(function(i) {
            $(`.main-content > li:last-child > figure`).append(`
          <img src="./img/sub/sub-history/kbg/${i}" alt="">
        `)
          }) //imgArr
        }) //historyArr1
      </script>
      <div class="controls">
        <button class="prev"><i class="fa-solid fa-chevron-left"></i></button>
        <div class="indicator">
          <button class="active">1300</button>
          <button>1400</button>
          <button>1500</button>
          <button>1800</button>
          <button>1900</button>
          <button>2000</button>
        </div> <!-- indicator  -->
        <button class="next"><i class="fa-solid fa-chevron-right"></i></button>
      </div> <!-- controls  -->
  </div><!-- content  -->
</section>