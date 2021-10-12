console.log(data);

var url = new URL('https://xkcd-comics-viewer.herokuapp.com/');
var search_params = url.searchParams;

// add "topic" parameter
search_params.set('#', data.num);

url.search = search_params.toString();

var new_url = url.toString();

// output : http://demourl.com/path?id=100&topic=main
console.log(new_url);

//window.history.replaceState(null, null, "?#=" + data.num);
//const queryString = window.location.search;
//console.log(queryString);
