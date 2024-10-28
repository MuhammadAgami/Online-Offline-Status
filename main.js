let head = document.getElementById("head");
let ul = document.getElementById("ul");
let btn = document.getElementById("btn");

function onLine() {
  head.innerHTML = "Online Now";
  head.style.color = "green";
  ul.style.display = "none";
  btn.style.display = "none";
}

function offLine() {
  head.innerHTML = "Offline Now";
  head.style.color = "red";
  ul.style.display = "block";
  btn.style.display = "block";
}

window.onload = function () {
  if (window.navigator.onLine) {
    onLine();
  } else {
    offLine();
  }
};

window.addEventListener("online", onLine);
window.addEventListener("offline", offLine);

btn.onclick = function () {
  window.location.reload();
};
