console.log(data);
function loadData(init) {
  var url = new URL('https://xkcd-comics-viewer.herokuapp.com/');
  var search_params = url.searchParams;
  //console.log(search_params.get('#'));
  if (search_params.get('#') !== data.num) {
    search_params.set('#', data.num);
    url.search = search_params.toString();
    var new_url = url.toString();
    console.log(new_url);
    if (init) {
      window.history.replaceState(null, null, "?%23=" + data.num);
    }
    else {
      window.location.href = new_url;
    }
    //window.location.href = new_url;
  };
};

loadData(true);
//console.log(search_params.get('#'));
//window.history.replaceState(null, null, "?#=" + data.num);
//const queryString = window.location.search;
//console.log(queryString);
