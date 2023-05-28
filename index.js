const btn = document.getElementById("btn");
const content = document.getElementsByClassName("hidden-content");
console.log("btn", btn);
console.log("content", content);

function toggleContent() {
  content[0].classList.toggle("show");
  console.log("toggle", content.classList);
}

btn.addEventListener("click", toggleContent);
