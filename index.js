let welcomeEl = document.getElementById("welcome-el");
let myName = "User";
let greeating = "Welcome ";
let error1 = "Numbers don't get lower than 0";
welcomeEl.innerText = greeating + myName;

welcomeEl.innerText += " ;)";

let countEl = document.getElementById("count-el");
let count = 0;
function increment() {
  count += 1;
  countEl.innerText = count;
}

function decrement() {
  count -= 1;
  if (count <= 0) {
    count = 0;
    welcomeEl.innerText = error1;
  }
  countEl.textContent = count;
}

let saveEL = document.getElementById("save-el");
function save() {
  countStr = count + " - ";
  saveEL.textContent += countStr;
  count = 0;
  countEl.innerText = count;
}
