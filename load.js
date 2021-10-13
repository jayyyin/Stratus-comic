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
var date = document.getElementById("date").textContent = creationDate.toLocaleString('default', {month: 'long', day: '2-digit', year: 'numeric' });
if (data.transcript !== "") {
  //replace all new lines with break rows
  var stringedTranscript = data.transcript.replaceAll( '\n', '<br>');


  //finding the title string
  var indx1 = stringedTranscript.indexOf("{") + 1;
  var indx2 = stringedTranscript.lastIndexOf("}");
  var subString = stringedTranscript.substring(idx1,idx2);

  //removing the title string from the original transcript
  stringedTranscript = stringedTranscript.substring(0, indx1-1);

  //removing "title string" and curly braces
  var subString2 = subString.substring( subString.indexOf(':') + 1,
    subString.indexOf('}')
  );

  //reinserting title string back in as a title
  stringedTranscript = "<h3>" + subString2 + "</h3><br>" + stringedTranscript;
  document.getElementById("transcript").innerHTML = stringedTranscript;
}
