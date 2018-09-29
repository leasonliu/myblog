onNumberChanged = function() {
  var selectedValue = document.getElementById("numberOfArticles").value;
  var atc1 = document.getElementById("atc1");
  var atc2 = document.getElementById("atc2");
  var atc3 = document.getElementById("atc3");
  var atc4 = document.getElementById("atc4");
  var atc5 = document.getElementById("atc5");
  atc1.style.visibility = "hidden";
  atc2.style.visibility = "hidden";
  atc3.style.visibility = "hidden";
  atc4.style.visibility = "hidden";
  atc5.style.visibility = "hidden";
  switch (selectedValue) {
    case "1":
      atc1.style.visibility = "visible";
      break;
    case "2":
      atc1.style.visibility = "visible";
      atc2.style.visibility = "visible";
      break;
    case "3":
      atc1.style.visibility = "visible";
      atc2.style.visibility = "visible";
      atc3.style.visibility = "visible";
      break;
    case "4":
      atc1.style.visibility = "visible";
      atc2.style.visibility = "visible";
      atc3.style.visibility = "visible";
      atc4.style.visibility = "visible";
      break;
    case "5":
      atc1.style.visibility = "visible";
      atc2.style.visibility = "visible";
      atc3.style.visibility = "visible";
      atc4.style.visibility = "visible";
      atc5.style.visibility = "visible";
      break;
  }
};
var ids = [];
select = function(obj) {
  id = obj.getAttribute("id");
  if (
    obj.getAttribute("class") == "clickable-content selected" &&
    ids.indexOf(id) != -1
  ) {
    alert("Article already in collections");
    return;
  }
  ids.push(id);
  carea_elem = document.getElementById("collections");
  newchild = obj.cloneNode(true);
  newchild.setAttribute("onclick", "deselect(this)");
  obj.setAttribute("class", "clickable-content selected");
  carea_elem.appendChild(newchild);
};
deselect = function(obj) {
  carea_elem = obj.parentNode;
  carea_elem.removeChild(obj);
  id = obj.getAttribute("id");
  ids.splice(ids.indexOf(id), 1); // remove id from ids
};
