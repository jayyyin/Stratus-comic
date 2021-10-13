var comicObject = document.getElementById("comic").src = data.img;
comicObject.alt = data.alt;

document.getElementById("picture-title").textContent = data.title;

document.getElementById("prevButton").addEventListener("click", function() {
  data.num -= 1;
  loadData(false);
});
document.getElementById("nextButton").addEventListener("click", function() {
  data.num += 1;
  loadData(false);
});
var dateString = ''+ data.year + '-' + data.month + '-' + data.day
const creationDate = new Date(dateString)
var date = document.getElementById("date").textContent = creationDate.toLocaleString('default', { month: 'long' });
