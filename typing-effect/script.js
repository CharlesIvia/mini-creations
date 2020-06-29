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


//Erase characters

function erase() {
  if (!cursorSpan.classList.contains("typing")) {
    cursorSpan.classList.add("typing");
  }

  //Erase characters from string
  if (charIndex > 0) {
    typedTextSpan.textContent += textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex - 1;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) {
      textArrayIndex = 0;
    }

    setTimeout(type, typingDelay + 1100);
  }
}
