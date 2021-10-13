<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Page Title</title>
  <link rel="stylesheet" href="styles.css">



</head>
<body>

  <script>
  var data = <?php
  if (isset($_GET['#'])) {
    $url = 'https://xkcd.com/' . $_GET['#'] . '/info.0.json';
  } else {
    $url = 'https://xkcd.com/info.0.json';

  }
  $JSON = file_get_contents($url);
  echo $JSON;
  ?>

</script>
<script src="init.js"></script>
<h1>XKCD comics</h1>
<hr>
<div id='picture-group'>

  <div id='picture-frame'>
    <img id="comic">
  </div>
   <button id="PrevButton" type="button">Prev</button>
   <button id="nextButton" type="button">Next</button>
</div>
<p>This is a paragraph.</p>
<script src="load.js"></script>
</body>
</html>
