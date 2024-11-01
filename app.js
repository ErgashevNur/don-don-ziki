const rules = document.querySelector(".rules-btn");
const hiddenNavEl = document.querySelector(".hidden-nav");
const exitEl = document.getElementById("exit");
const boxNan = document.querySelector(".img-box");
const nanBox = document.querySelector(".nanBox");
const hidden = document.querySelector(".NanBox");
const hiddenBox = document.querySelector(".NaNBox");
const human = document.querySelector(".human");
const img = document.querySelector(".ai");
const comparitionss = document.querySelector(".comparitionss");

rules.addEventListener("click", () => {
  hiddenNavEl.classList.toggle("show-nav");
  document.body.classList.toggle("overflow-toggle");
  if (document.body.classList.contains("overflow-toggle")) {
    exitEl.src = "./img/x.svg";
  } else {
    exitEl.src = "../img/evaluation.png";
  }
});

exitEl.addEventListener("click", () => {
  hiddenNavEl.classList.toggle("show-nav");
  document.body.classList.toggle("overflow-toggle");
  if (document.body.classList.contains("overflow-toggle")) {
    exitEl.src = "./img/x.svg";
  } else {
    exitEl.src = "../img/evaluation.png";
  }
});

//

nanBox.addEventListener("click", (event) => {
  boxNan.classList.toggle("nan-box"), comparitionss.classList.toggle("blok");
  document.body.classList.toggle("overflow-toggle");
  let rasmSrc = event.target.src;
  document.querySelector(".human").src = rasmSrc;
});

hidden.addEventListener("click", (event) => {
  boxNan.classList.toggle("nan-box"), comparitionss.classList.toggle("blok");
  document.body.classList.toggle("overflow-toggle");
  let rasmSrc = event.target.src;
  document.querySelector(".human").src = rasmSrc;
});

hiddenBox.addEventListener("click", (event) => {
  boxNan.classList.toggle("nan-box"), comparitionss.classList.toggle("blok");
  document.body.classList.toggle("overflow-toggle");
  let rasmSrc = event.target.src;
  document.querySelector(".human").src = rasmSrc;
});

//
import { paper, rock, scissors } from "./hands.js";
const aiHands = () => {
  const hands = [scissors, rock, paper];
  const randomIndex = Math.round(Math.random() * (hands.length - 1));
  return hands[randomIndex];
};

export default aiHands;

img.src = `${aiHands()}.svg`;

//

const schot = document.querySelector("span");

if (aiHands) {
  schot += 1;
} else {
  schot -= 1;
}
