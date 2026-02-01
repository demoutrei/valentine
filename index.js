const bodyElement = document.querySelector("body");
const iconElement = document.querySelector("#icon");
const noButtonElement = document.querySelector("#noButton");
const subtextElement = document.querySelector(".subtext");
const textElement = document.querySelector(".text");
const yesButtonElement = document.querySelector("#yesButton");


let isAccepted = false;


function angry() {
  iconElement.src = "angry-cat-sour-cat.gif";
}


function confetti() {
  const element = document.createElement("img");
  element.setAttribute("id", "confetti");
  element.src = "congratulations-7600.gif";
  bodyElement.appendChild(element);
  setTimeout(() => element.remove(), 2450);
}


function defaultDisplay() {
  if (!isAccepted) {
    waiting();
    textElement.textContent = "Will you be my Valentine?";
    subtextElement.textContent = "(please say yes)";
    subtextElement.classList.remove("hide");
  }
}


function kiss() {
  iconElement.src = "kiss.gif";
}


function noButtonClick() {
  if (!isAccepted) {
    textElement.textContent = "You sure? :(";
    subtextElement.textContent = "(that's not the 'yes' button)"
  }
}


function noButtonMouseEnter() {
  if (!isAccepted) {
    sad();
    subtextElement.textContent = "(please think again)";
  }
}


function sad() {
  iconElement.src = "meme-cat.gif";
}


function surprised() {
  iconElement.src = "cat-flabbergasted.gif";
}


function waiting() {
  iconElement.src = "200w.gif";
}


function yesButtonClick() {
  noButtonElement.classList.add("hidden");
  isAccepted = true;
  iconElement.src = "kiss.gif";
  textElement.textContent = "YIPEEEEE!!!";
  subtextElement.textContent = "No backing up now, baby <3";
  confetti();
}


function yesButtonMouseEnter() {
  if (!isAccepted) {
    surprised();
    subtextElement.textContent = "(please click it!)";
  }
}


iconElement.src = "200w.gif";

noButtonElement.addEventListener("mouseenter", noButtonMouseEnter);
noButtonElement.addEventListener("mouseleave", defaultDisplay);

yesButtonElement.addEventListener("mouseenter", yesButtonMouseEnter);
yesButtonElement.addEventListener("mouseleave", defaultDisplay);