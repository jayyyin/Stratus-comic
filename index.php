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
    echo $_GET['#'];
    $url = 'https://xkcd.com/' . $_GET['#'] . '/info.0.json';
  } else {
    $url = 'https://xkcd.com/info.0.json';
  }
  $JSON = file_get_contents($url);
  echo $JSON;
  $_GET['#'] = $JSON['num'];
  ?>

</script>
<script src="scripts.js"></script>
<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
