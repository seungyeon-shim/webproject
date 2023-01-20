<link rel="stylesheet" href="./css/sub/sub-history.css">
<script src="./js/sub-history/store.js"></script>
<script src="./js/sub-history/sub-history.js"></script>
<section class="sub-content sub-history sub-history-cdg sub-content-center sub-section sub-section2 sub-section-scr sub-section2-scr" data-n="2">

<div class="sub-title-wrap sub-title-wrap-center">
    <h2 class="sub-title">창덕궁 역사</h2>
    <p class="sub-desc">세계문화 유산 창덕궁의 역사를 안내드립니다.</p>
  </div><!-- sub-title-wrap -->

  <figure class="bg-deco">
    <img class="star" src="./img/sub/sub-deco/star.jpg" alt="">
    <img class="mountain" src="./img/sub/sub-deco/mountain3.png" alt="">
  </figure>

  <div class="clouds">
    <img class="cloud right-front" src="./img/sub/sub-deco/right_front.png" alt=""></img>
    <img class="cloud right-back" src="./img/sub/sub-deco/right_back.png" alt=""></img>
    <img class="cloud left-front" src="./img/sub/sub-deco/left_front.png" alt=""></img>
    <img class="cloud left-back" src="./img/sub/sub-deco/left_back.png" alt=""></img>
  </div>

  <div class="sub-history-content overflow"><!-- 전체 -->
    <div class="col_width">
      <ol class="img_container"></ol>
    </div>
  </div><!-- content  -->
  <div class="controls">
    <div class="indicator">
      <button class="active">1400</button>
      <button>1500</button>
      <button>1600</button>
      <button>1700</button>
      <button>1800</button>
      <button>1900</button>
    </div>
    <button class="next"><i class="fa-solid fa-chevron-right"></i></button>
    <button class="prev"><i class="fa-solid fa-chevron-left"></i></button>
  </div>

  <script>
    cdgArr.forEach(function(v) {
      $(`.sub-history .overflow .img_container`).append(`
          <li>
            <figure class="top-img">
              <img src="./img/sub/sub-history/cdg/${v.slideImg}" alt>
            </figure>
            <div class="century-textbox">
              <p class="century">${v.century}</p>
              <h3 class="year">${v.year}<span class="point-sans">年</span></h3>
            </div>
            <div class="bottom-content">
              <div class="bottom-textbox">
                <h4>
                  <img class="arrow" src="./img/sub/sub-deco/${v.arrow}" alt="">
                  <em class="history-title">${v.title}</em>
                </h4>
                <div class="yearly-textbox"></div>
              </div>
                <figure>
                </figure>
              </div>
          </li>
        `)
      v.yearlyArr.forEach(function(e) {
        $(`.img_container >li:last-child .yearly-textbox`).append(`
            <p class="yearly">
             ${e}
            </p>
            `)
      }) //yearlyArr
      v.imgArr.forEach(function(i) {
        $(`.img_container >li:last-child .bottom-content figure`).append(`
            <img src="./img/sub/sub-history/cdg/${i}" alt="">
          `)
      }) //imgArr
    }) //historyArr1
  </script>
</section>