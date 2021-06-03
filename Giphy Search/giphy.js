function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
}
function makeFrames() {
  for (let i = 0; i < obj.data.length; i++) {
    let newFrame = document.createElement("iframe");
    newFrame.id = i;
    newFrame.src = obj.data[i].embed_url;
    newFrame.innerHTML = "  ";
    document.body.append(newFrame);
  }
}
function removeFrames() {
  for (let i = 0; i < obj.data.length; i++) {
    document.getElementById(i).remove();
  }
}
let second = false;
function jsonCall(sem) {
  json = httpGet(
    "http://api.giphy.com/v1/gifs/search?q=" +
      sem +
      "&api_key=plfD2A3L8BsakiOIy8giaZIbUD70j2vf&limit=8"
  );
  obj = JSON.parse(json);
  console.log(obj.data[0]);
  if (second) {
    removeFrames();
    console.log(42);
  }
  second = true;
  document.getElementById("myInput").value = "";
  makeFrames();
}
let things = "";
let json = "";
let obj = "";

function getInputValue() {
  // Selecting the input element and get its value
  let inputVal = document.getElementById("myInput").value;
  const search = " ";
  const replaceWith = "+";
  const sem = inputVal.split(search).join(replaceWith);

  jsonCall(sem);
  return sem;
}
