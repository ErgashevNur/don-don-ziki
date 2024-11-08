const rules = document.querySelector(".rules-btn");
const hiddenNavEl = document.querySelector(".hidden-nav");
const exitEl = document.getElementById("exit");
const boxNan = document.querySelector(".img-box");
const nanBox = document.querySelector(".nanBox");
const Nanbox = document.querySelector(".NanBox");
const naNbox = document.querySelector(".naNBox");
const human = document.querySelector(".human");
const ai = document.querySelector(".ai");
const comparitionss = document.querySelector(".comparitionss");
const text = document.querySelector(".result");
const shot = document.querySelector(".schot");

rules.addEventListener("click", () => {
  hiddenNavEl.classList.toggle("show-nav");
  document.body.classList.toggle("overflow-toggle");
  if (document.body.classList.contains("overflow-toggle")) {
    exitEl.src = "../img/x.svg";
  } else {
    exitEl.src = "./img/evaluation.png";
  }
});

exitEl.addEventListener("click", () => {
  hiddenNavEl.classList.toggle("show-nav");
  document.body.classList.toggle("overflow-toggle");
  if (document.body.classList.contains("overflow-toggle")) {
    exitEl.src = "../img/x.svg";
  } else {
    exitEl.src = "./img/evaluation.png";
  }
});

// Paper,Rock,Scissors lar click bosa img-box display-none bo'ladi.
nanBox.addEventListener("click", () => {
  boxNan.classList.toggle("nan-box");
  comparitionss.classList.toggle("blok");
  human.src = nanBox.src;
});

Nanbox.addEventListener("click", () => {
  boxNan.classList.toggle("nan-box");
  comparitionss.classList.toggle("blok");
  human.src = Nanbox.src;
});

naNbox.addEventListener("click", () => {
  boxNan.classList.toggle("nan-box");
  comparitionss.classList.toggle("blok");
  human.src = naNbox.src;
});

// Shaxsiy AI Robotim
import { paper, rock, scissors } from "./hands.js";

const aiHands = () => {
  const hands = [scissors, rock, paper];
  const randomIndex = Math.round(Math.random() * (hands.length - 1));
  return hands[randomIndex];
};

// ai imgning src Robotim tanlab beryabti
let aiChoice = aiHands();
ai.src = aiChoice;
console.log(aiChoice);

let box = [nanBox, Nanbox, naNbox];
box.forEach((box) => {
  box.addEventListener("click", function () {
    const dataInfo = this.getAttribute("data-info");

    let winner = "";
    let schot = 0;

    if (`${dataInfo}` == aiChoice) {
      winner = "Durrang!";
    } else if (
      `${dataInfo}` == `img/scissors.svg` &&
      aiChoice == "img/paper.svg"
    ) {
      human.style.boxShadow = "1px 3px 0px 19px rgba(254,246,246,0.2)";
      winner = "Siz G`olib";
      schot++;
    } else if (
      `${dataInfo}` == `img/rock.svg` &&
      aiChoice == "img/scissors.svg"
    ) {
      human.style.boxShadow = "1px 3px 0px 19px rgba(254,246,246,0.2)";
      winner = "Siz G`olib";
      schot++;
    } else if (`${dataInfo}` == `img/paper.svg` && aiChoice == "img/rock.svg") {
      human.style.boxShadow = "1px 3px 0px 19px rgba(254,246,246,0.2)";
      winner = "Siz G`olibsiz";
      schot++;
    } else {
      winner = "Robot G'olib";
      ai.style.boxShadow = "1px 3px 0px 19px rgba(254,246,246,0.2)";
      schot--;
    }
    localStorage.setItem("schot", schot);
    text.innerHTML = `${winner}`;
    shot.innerHTML = `${schot}`;
  });
});

document.getElementById("refreshBtn").addEventListener("click", function () {
  location.reload();
});
