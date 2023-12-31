const sloganElement = document.getElementById("slogan");
const artistElement = document.getElementById("artist");
const greySkyBackground = document.getElementById('grey-sky-background');
const artistContent = document.getElementById('artist-content');


// CREATE FUNCTIONS
// Pin the slogan
function pinSlogan() {
  const scrolledVertically = window.scrollY;
  if (sloganElement) {
    sloganElement.style.transform = `translateY(${scrolledVertically / 2}px)`; // Adjust the division factor as needed
  } else {
    console.log("sloganElement not found");
  }
}

// Function to get the top position of an element
function getTopPosition(element) {
  const rect = element.getBoundingClientRect();
  return rect.top + window.scrollY;
}

// Reposition the background before
function moveBackground() {
  const backgroundTop = getTopPosition(greySkyBackground);
  greySkyBackground.style.backgroundPositionY = '20rem'; // Adjust the value as needed
}

// Function to slowly move the background in the opposite direction as you scroll in #artist (slower than scroll)
function slowMoveBackground() {
  const scrolledVertically = window.scrollY;
  greySkyBackground.style.backgroundPositionY = `-${scrolledVertically/2}px`; // Note the negative sign
}

// Summarize Functions
function handleScroll() {
  pinSlogan();
  moveBackground();
  slowMoveBackground();
}

window.addEventListener("scroll", handleScroll);


// PERFORMANCE
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach(function (img) {
    img.loading = "lazy";
  });

  document.querySelectorAll("video source").forEach(function (source) {
    source.loading = "lazy";
  });
});
