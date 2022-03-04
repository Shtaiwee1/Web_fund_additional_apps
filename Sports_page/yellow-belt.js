var x = document.querySelector(".aside3");

function hide() {
  x.remove();
}

var y = document.getElementById("ninja");
var z = document.getElementById("pirate");
var count1 = 314;
var count2 = 159;
function change1(element) {
  count1++;
  element.innerText = count1;
}

function change2(element) {
  count2++;
  element.innerText = count2;
}

function appear() {
  alert("The Ninjas have won!!!");
}

setTimeout(appear, 13000);
