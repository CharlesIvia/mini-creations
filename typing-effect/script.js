//Fetch dom elements and set variables
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web Developer", "Web Designer", "Frontend Developer"];
const typingDelay = 150;
const erasingDelay = 90;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (!cursorSpan.classList.contains("typing")) {
    cursorSpan.classList.add("typing");
  }

  //Type untyped letter

  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
  }
}

type();
