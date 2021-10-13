document.getElementById("comic").src = data.img;

document.getElementById("prevButton").addEventListener("click", function() {
  data.num -= 1;
  loadData(False);
});
