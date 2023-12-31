const sloganElement = document.getElementById('slogan');
const artistElement = document.getElementById('artist');
const greySkyBackground = document.getElementById('grey-sky-background');
const artistContent = document.getElementById('artist-content');

// Store values:
let backgroundTopInitialPositionInVw = 20; // Change this value as needed
let backgroundTopInitialPositionInPx = (backgroundTopInitialPositionInVw / 100) * window.innerWidth;
let backgroundYPosition

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
  const backgroundTopInitialPosition = getTopPosition(greySkyBackground);
  greySkyBackground.style.backgroundPositionY = backgroundTopInitialPosition; // Adjust the value as needed
}

// Function to slowly move the background in the opposite direction as you scroll in #artist (slower than scroll)
function slowMoveBackground() {
  const scrolledVertically = window.scrollY;
  greySkyBackground.style.backgroundPositionY = `-${scrolledVertically/2}px`; // Note the negative sign
}

// Function to get the yPosition of the background
function updateBackgroundPosition(){
  var computedStyle = window.getComputedStyle(greySkyBackground);
  var currentBackgroundPositionY = computedStyle.getPropertyValue('background-position-y');
  backgroundYPosition = currentBackgroundPositionY
}

// Function to execute on #artist-content-scroll
function handleArtistBackground() {
  if (!artistContent || !greySkyBackground) {
    return;
  }

  const artistContentHeight = artistContent.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrolledVertically = artistContent.scrollTop;
  const maxScroll = artistContentHeight - windowHeight;
  const scrollProgress = (maxScroll === 0) ? 0 : (scrolledVertically / maxScroll) * 100;

  // Adjust the multiplier as needed for the desired effect
  const backgroundPosition = backgroundTopInitialPositionInPx - (scrollProgress * 2); // Adjust the multiplier

  // Check if backgroundPosition is a valid number and within a reasonable range
  if (!isNaN(backgroundPosition) && isFinite(backgroundPosition) && Math.abs(backgroundPosition) < 1000000) {
    greySkyBackground.style.backgroundPositionY = `${backgroundPosition}px`;
  }
}

// Summarize Functions
function handleScroll() {
  pinSlogan();
  moveBackground();
  slowMoveBackground();
}

window.addEventListener("scroll", handleScroll);
artistContent.addEventListener("scroll", handleArtistBackground)

// PERFORMANCE
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach(function (img) {
    img.loading = "lazy";
  });

  document.querySelectorAll("video source").forEach(function (source) {
    source.loading = "lazy";
  });
});
