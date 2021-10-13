document.getElementById("comic").src = data.img;

document.getElementById("prevButton").addEventListener("click", function() {
  data.num -= 1;
  loadData(false);
});
document.getElementById("nextButton").addEventListener("click", function() {
  data.num += 1;
  loadData(false);
});
