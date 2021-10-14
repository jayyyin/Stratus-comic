<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Page Title</title>
  <link rel="stylesheet" href="styles.css">

</head>
<body>
  <h1 id="title">XKCD comics</h1>
  <hr>
  <div id='frame'>
    <script>
    var data =JSON.parse(' <?php
    if (isset($_GET['#'])) {
      $url = 'https://xkcd.com/' . $_GET['#'] . '/info.0.json';
    } else {
      $url = 'https://xkcd.com/info.0.json';

    }
    $JSON = file_get_contents($url);
    if(empty($JSON)) {
      $url = 'https://xkcd.com/info.0.json';
      $JSON = file_get_contents($url);
    }
    echo json_decode(json_encode($JSON));
    ?>');

    </script>
    <script src="init.js"></script>

    <div id='picture-group'>
      <div id='button-group'>
        <p id="visited">visited # times</p>
        <button class="comic-buttons" id="prevButton" type="button">Prev</button>
        <button class="comic-buttons" id="randomButton" type="button">Random</button>
        <button class="comic-buttons" id="nextButton" type="button">Next</button>
      </div>
      <h2 id='picture-title'> </h2>
      <div id='picture-frame'>
        <img id="comic">
        <h2 id='date'> </h2>
        <p id=transcript>comic contains no transcript</p>
      </div>

    </div>

    <script src="load.js"></script>
  </div>
</body>
</html>
