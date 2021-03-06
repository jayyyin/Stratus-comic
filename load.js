//visit variable is a check for first visit
if (window.localStorage.getItem("visit") == null || window.localStorage.getItem("latest") == null)
{
  // setting data num to first visited site (should be latest)
  window.localStorage.setItem("latest", data.num);
}
//sanity checking latest value, since data.num would be empty if there wasn't a comic
if(data.num > parseInt(window.localStorage.getItem("latest"))){
  window.localStorage.setItem("latest", data.num);
}
//storing visted times keyed to comic number
if(window.localStorage.getItem(data.num) == null){
  window.localStorage.setItem(data.num, 1);
}
else {
  window.localStorage.setItem(data.num, parseInt(window.localStorage.getItem(data.num)) + 1);
}
document.getElementById("visited").textContent = "visited this comic " + window.localStorage.getItem(data.num) + " time(s)";
//sets vist as current date and time
window.localStorage.setItem("visit", new Date());


//loading image and alt
var comicObject = document.getElementById("comic").src = data.img;
comicObject.alt = data.alt;

//loading title
document.getElementById("picture-title").textContent = data.title;

//disables buttons when appropriate
if(data.num === 1) {
  document.getElementById("prevButton").disabled = true;
}
else {
  document.getElementById("prevButton").disabled = false;
}
if (parseInt(window.localStorage.getItem("latest")) === data.num){
  document.getElementById("nextButton").disabled = true;
}
else {
  document.getElementById("nextButton").disabled = false;
}

//setting up buttons to change the number then update the page
document.getElementById("prevButton").addEventListener("click", function() {
  if ( data.num !== 1){
    data.num -= 1;
    loadData(false);
  }
});
document.getElementById("nextButton").addEventListener("click", function() {
  data.num += 1;
  loadData(false);
});

document.getElementById("randomButton").addEventListener("click", function() {
  data.num = Math.floor(Math.random() * parseInt(window.localStorage.getItem("latest")));
  loadData(false);
});

//setting up creation date
var dateString = ''+ data.year + '-' + data.month + '-' + data.day
const creationDate = new Date(dateString)
var date = document.getElementById("date").textContent = creationDate.toLocaleString('default', {month: 'long', day: '2-digit', year: 'numeric' });
if (data.transcript !== "") {
  //replace all new lines with break rows
  var stringedTranscript = data.transcript.replaceAll( '\n', '<br>');


  //finding the title string
  var idx1 = stringedTranscript.indexOf("{") + 1;

  var idx2 = stringedTranscript.lastIndexOf("}");
  var subString = stringedTranscript.substring(idx1,idx2);

  if(subString|| subString !== "") {
    //removing the title string from the original transcript
    stringedTranscript = stringedTranscript.substring(0, idx1-1);

    //removing "title string" and curly braces
    var subString2 = subString.substring( subString.indexOf(':') + 1,
    subString.indexOf('}')
  );

  //reinserting title string back in as a title
  stringedTranscript = "<h3>" + subString2 + "</h3><br>" + stringedTranscript;
}

document.getElementById("transcript").innerHTML = stringedTranscript;
}
