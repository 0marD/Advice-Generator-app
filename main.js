const btn = document.querySelector(".button");
const adviceId = document.querySelector(".adviceId");
const advice = document.querySelector(".advice");

function newAdivice() {
  fetch("https://api.adviceslip.com/advice", { cache: "no-store" })
    .then((resp) => resp.json())
    .then((jsonData) => {
      adviceId.innerText = "advice #" + jsonData["slip"]["id"];
      advice.innerText = '"' + jsonData["slip"]["advice"] + '"';
    });
}

btn.addEventListener("click", newAdivice);

newAdivice();
