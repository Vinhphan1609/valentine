"use strict";

const titleElement = document.querySelector(".title");
const title2Element = document.querySelector(".title-2");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");
const catVid = document.querySelector(".cat-vid");
const body = document.querySelector("body");
let interval;

const MAX_IMAGES = 7;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  title2Element.innerHTML = "Yayyy!! :3";
  titleElement.innerHTML = "";
  buttonsContainer.classList.add("hidden");
  catImg.classList.add("hidden");
  catVid.style.display = null;
  catVid.src = `img/yes.mp4`;
  catVid.play();
  setInterval(createHeart, 50);
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.4;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Có chắc không ?",
    "Thôi mà ",
    "Đừng ấn nữa nha :(",
    "Đừnggggg mà",
    "Dừng lại ",
    "Dừng lại điii",
    "I'm gonna cry...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  heart.innerText = "💗";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 50000);
}
