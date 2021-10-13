if (window.localStorage.getItem("visit") == null)
{
    // setting data num to first visited site (should be latest)
    window.localStorage.setItem("latest", data.num);
}

window.localStorage.setItem("visit", new Date());


//loading image and alt
var comicObject = document.getElementById("comic").src = data.img;
comicObject.alt = data.alt;

//loading title
document.getElementById("picture-title").textContent = data.title;

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

//setting up creation date
var dateString = ''+ data.year + '-' + data.month + '-' + data.day
const creationDate = new Date(dateString)
var date = document.getElementById("date").textContent = creationDate.toLocaleString('default', {month: 'long', day: '2-digit', year: 'numeric' });
if (data.transcript !== "") {
  //replace all new lines with break rows
  var stringedTranscript = data.transcript.replaceAll( '\n', '<br>');


  //finding the title string
  var idx1 = stringedTranscript.indexOf("{") + 1;
  console.log(idx1);
  var idx2 = stringedTranscript.lastIndexOf("}");
  var subString = stringedTranscript.substring(idx1,idx2);

  //removing the title string from the original transcript
  stringedTranscript = stringedTranscript.substring(0, idx1-1);

  //removing "title string" and curly braces
  var subString2 = subString.substring( subString.indexOf(':') + 1,
    subString.indexOf('}')
  );

  //reinserting title string back in as a title
  stringedTranscript = "<h3>" + subString2 + "</h3><br>" + stringedTranscript;
  document.getElementById("transcript").innerHTML = stringedTranscript;
}
