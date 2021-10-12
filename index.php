<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Page Title</title>
  <link rel="stylesheet" href="styles.css">



</head>
<body>

  <script>
  var data = '<?php
  $url = 'https://xkcd.com/info.0.json';
  $JSON = file_get_contents($url);

  // echo the JSON (you can echo this to JavaScript to use it there)
  echo $JSON;

  // You can decode it to process it in PHP
  //$data = json_decode($JSON);
  //var_dump($data);
  ?>';
  console.log(data);
</script>
<script src="scripts.js"></script>
<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
