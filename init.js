function loadData(init) {
  //setting default url
  var url = new URL('https://xkcd-comics-viewer.herokuapp.com/');
  var search_params = url.searchParams;
  //making sure to set the searchparam if there isn't one (default value assumed)
  if (search_params.get('#') !== data.num) {
    search_params.set('#', data.num);
    url.search = search_params.toString();
    var new_url = url.toString();
    console.log(new_url);
    if (init) {
      //using url safe string and setting search param in window without refreshing the page
      window.history.replaceState(null, null, "?%23=" + data.num);
    }
    else {
      //forcing a reload of the page to retrieve new data
      window.location.href = new_url;
    };
  };
};

loadData(true);
