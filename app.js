const rules = document.querySelector(".rules-btn");
const hiddenNavEl = document.querySelector(".hidden-nav");
const exitEl = document.getElementById("exit");
const boxNan = document.querySelector(".img-box");
const nanBox = document.querySelector(".nanBox");
const hidden = document.querySelector(".NanBox");
const hiddenBox = document.querySelector(".NaNBox");
const human = document.querySelector(".human");
const ai = document.querySelector(".ai");
const comparitionss = document.querySelector(".comparitionss");
const text = document.querySelector(".result");
const schot = document.querySelector(".schot");

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
  human.src = `${rasmSrc}`;
});

hidden.addEventListener("click", (event) => {
  boxNan.classList.toggle("nan-box"), comparitionss.classList.toggle("blok");
  document.body.classList.toggle("overflow-toggle");
  let rasmSrc = event.target.src;
  human.src = `${rasmSrc}`;
});

hiddenBox.addEventListener("click", (event) => {
  boxNan.classList.toggle("nan-box"), comparitionss.classList.toggle("blok");
  document.body.classList.toggle("overflow-toggle");
  let rasmSrc = event.target.src;
  human.src = `${rasmSrc}`;
});

//

import { paper, rock, scissors } from "./hands.js";
const aiHands = () => {
  const hands = [scissors, rock, paper];
  const randomIndex = Math.round(Math.random() * (hands.length - 1));
  return hands[randomIndex];
};

export default aiHands;
const aiChoice = aiHands();

ai.src = `${aiChoice}`;

//

let schott = 0;
let winner = "";

if (human == aiChoice) {
  winner = "Durrang!";
} else if (human == "./img/scissors.svg" && aiChoice == "./img/paper.svg") {
  winner = "Siz yutdingiz!";
  schott++;
} else if (human == "./img/rock.svg" && aiChoice == "./img/scissors.svg") {
  winner = "Siz yutdingiz!";
  schott++;
} else if (human == "./img/paper.svg" && aiChoice == "./img/rock.svg") {
  winner = "Siz yutdingiz!";
  schott++;
} else if (aiChoice == "./img/scissors.svg" && human == "./img/paper.svg") {
  winner = "Robot yutdi!";
  schott++;
} else if (aiChoice == "./img/rock.svg" && human == "./img/scissors.svg") {
  winner = "Robot yutdi!";
  schott++;
} else if (aiChoice == "./img/paper.svg" && human == "./img/rock.svg") {
  winner = "Robot yutdi!";
  schott++;
}

console.log(human);
console.log(aiChoice);
text.innerHTML = `${winner}`;
schot.innerHTML = `${schott}`;
