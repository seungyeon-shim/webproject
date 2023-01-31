<?php include "header.php" ?>
<link rel="stylesheet" href="./css/main-section/index.css">

<main class="home-main">
  <svg style="display: none;">
    <filter id="ripple">
      <feTurbulence id="water" numOctaves="3" seed="1" baseFrequency="0.02 0.5" />
      <feDisplacementMap scale="5" in="SourceGraphic" />
      <animate href="#water" attributeName="baseFrequency" keyTimes="0;0.5;1" values="0.001;0.005;0.001" dur="10s" repeatCount="indefinite" />
    </filter>
  </svg>
  <?php include "main-bg.php" ?>
  <?php include "main-visual.php" ?>
  <?php include "main-about.php" ?>
  <?php include "main-event.php" ?>
</main><!-- main -->


<?php include "footer.php" ?>