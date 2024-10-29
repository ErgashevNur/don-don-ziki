import { paper, rock, scissors } from "./hands.js";

const aiHands = () => {
  const hands = [scissors, rock, paper];
  const randomIndex = Math.round(Math.random() * (hands.length - 1));
  return hands[randomIndex];
};

export default aiHands;

img.src``;

//

const schot = document.querySelector("span");

if (aiHands) {
  schot += 1;
} else {
  schot -= 1;
}

//

const rules = document.getElementById("rules");
const hiddenNavEl = document.querySelector(".hidden-nav");
const exitEl = document.getElementById("exit");

rules.addEventListener("click", () => {
  hiddenNavEl.classList.toggle("show-nav");
  document.body.classList.toggle("overflow-toggle");
  if (document.body.classList.contains("overflow-toggle")) {
    exitEl.src = "../img/x.svg";
  } else {
    exitEl.src = "../img/evaluation.png";
  }
});
