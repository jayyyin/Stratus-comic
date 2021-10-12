/*var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'jsonp';
    xhr.onreadystatechange = function() {
      if (xhr.readState === 4) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};*/

console.log(data)

/*function foo(data)
{
    console.log(data.num);
}

var script = document.createElement('script');
script.src = 'https://xkcd.com/info.0.json'
script.type = 'application/jsonp'
document.head.appendChild(script);

console.log(script);*/
// or document.head.appendChild(script) in modern browsers

/*
var request = new Request('https://xkcd.com/info.0.json');

fetch(request, {mode: 'no-cors'}).then(function(response) {
    // Convert to JSON
    return response.json();
}).then(function(j) {
    // Yay, `j` is a JavaScript object
    console.log(JSON.stringify(j));
}).catch(function(error) {
    console.log('Request failed', error)
});*/
/*
getJSON('https://xkcd.com/info.0.json',
function(err, data) {
  if (err !== null) {
    alert('Something went wrong: ' + err);
  } else {
    alert('Your query count: ' + data.query.count);
  }
});*/
