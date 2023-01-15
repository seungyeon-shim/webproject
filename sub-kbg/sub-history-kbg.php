<link rel="stylesheet" href="./css/sub-kbg/sub-history.css">
<script src="./js/sub-history/store.js"></script>
<script src="./js/sub-history/sub-history.js"></script>
<section class="sub-content sub-history sub-history-kbg sub-content-center">

  <div class="sub-title-wrap sub-title-wrap-center">
    <h2 class="sub-title">경복궁 역사</h2>
    <p class="sub-desc">조선 제일의 법도 경복궁의 역사를 안내드립니다.</p>
  </div><!-- sub-title-wrap -->

  <figure class="bg-deco">
    <img class="mountain" src="./img/sub/sub-deco/mountain3.png" alt="">
  </figure>

  <div class="sub-history-content overflow"><!-- 전체 -->
    <div class="col_width">
      <ol class="img_container"></ol>
    </div>
    <div class="controls">
      <div class="indicator">
        <button class="active">1300</button>
        <button>1400</button>
        <button>1500</button>
        <button>1800</button>
        <button>1900</button>
        <button>2000</button>
      </div>
      <button class="next"><i class="fa-solid fa-chevron-right"></i></button>
      <button class="prev"><i class="fa-solid fa-chevron-left"></i></button>
    </div>
  </div><!-- content  -->
    
    <script>
      historyArr1.forEach(function(v) {
        $(`.sub-history .overflow .img_container`).append(`
          <li>
            <figure class="top-img">
              <img src="./img/sub/sub-history/kbg/${v.slideImg}" alt>
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
                <ol class="yearly-textbox"></ol>
              </div>
                <figure>
                </figure>
              </div>
          </li>
        `)
        v.yearlyArr.forEach(function(e) {
          $(`.img_container >li:last-child .yearly-textbox`).append(`
            <li>
            <p class="yearly">
             ${e}
            </p>
          </li> 
            `)
        }) //yearlyArr
        v.imgArr.forEach(function(i) {
          $(`.img_container >li:last-child .bottom-content figure`).append(`
            <img src="./img/sub/sub-history/kbg/${i}" alt="">
          `)
        }) //imgArr
      }) //historyArr1
    </script>
</section>