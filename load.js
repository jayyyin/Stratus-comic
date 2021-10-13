document.getElementById("comic").src = data.img;

document.getElementById("prevButton").addEventListener("click", function() {
  search_params.set('#', data.num-1);
  window.history.replaceState(null, null, "?%23=" + data.num-1);
});
