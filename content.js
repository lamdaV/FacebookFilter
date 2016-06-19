console.log("FacebookFilter content.js loaded");

console.log("Filtering Feed...");
var filterList = ["writing", "visiting"];

window.setInterval(filter, 10000);

function filter() {
  console.log("filtering...")
  var userContent = document.getElementsByClassName("_5pbx userContent");
  var userText = []
  var current;
  for (var k = 0; k < userContent.length; k++) {
    userText = userContent[k].getElementsByTagName("p")[0].innerHTML.split(" ")
    for (var i = 0; i < userText.length; i++) {
      current = userText[i].toLowerCase();
      if (filterList.includes(current)) {
        console.log("removing: ");
        console.log(userText);
        removeFeed(userContent[k]);
      }
    }
  }
  console.log("filtering completed!")
}

function removeFeed(userContent) {
  if (userContent.className === "_4-u2 mbm _5v3q _4-u8") {
    return;
  }
  if (userContent.className === "userContentWrapper _5pcr") {
    userContent.innerHTML = "";
  }
  return removeFeed(userContent.parentElement);
}
