const sloganElement = document.getElementById('slogan');
const artistElement = document.getElementById('artist');
const artistContent = document.getElementById('artist-content');
const greySkyBackground = document.getElementById('grey-sky-background');
const greySkyBackgroundImg = document.getElementById('grey-sky-background-img');


// Store values:
let backgroundTopInitialPositionInVw = -2; // Change this value as needed
let backgroundTopInitialPositionInPx = (backgroundTopInitialPositionInVw / 100) * window.innerWidth;
let backgroundYPositionStorage


// Pin the slogan
function pinSlogan() {
  const scrolledVertically = window.scrollY;
  if (sloganElement) {
    sloganElement.style.transform = `translateY(${scrolledVertically / 2}px)`; // Adjust the division factor as needed
  } else {
    console.log("sloganElement not found");
  }
}

// Function to get the background position Y of an element
function getBackgroundPositionY(element) {
  const computedStyle = window.getComputedStyle(element);
  return computedStyle.getPropertyValue('background-position-y');
}

// ratio between #artistContent and background-img
function returnRatio() {
  const artistContentHeight = artistContent.offsetHeight;
  const greySkyBackgroundHeight = greySkyBackgroundImg.clientHeight;
  const ratio = artistContentHeight / greySkyBackgroundHeight;
  console.log(ratio)
  return ratio;
}

// calculate offset
function calculateOffset() {
  const screenHeight = window.innerHeight;
  const ratio = returnRatio();
  const result = screenHeight / ratio;
  return result;
}

//adjust background offset
function setGreySkyBackgroundTopPosition() {
  const dividedHeight = calculateOffset();
  greySkyBackground.style.top = `-${dividedHeight}px`;
}

function handleArtistScrollIn() { //works
  const ratio = returnRatio();
  const scrolledVertically = (artistContent.getBoundingClientRect().top / window.innerHeight) * 100;
  const backgroundYPositionStorage = `${-scrolledVertically / ratio}px`;
  greySkyBackgroundImg.style.top = backgroundYPositionStorage;
  console.log("scrolledVertically (scrolling in) : " + scrolledVertically);
  console.log("backgroundYPositionStorage: " + backgroundYPositionStorage);
}

function handleArtistBackground() {
  console.log("Yes")
  const ratio = returnRatio();
  const scrolledVertically = artistContent.scrollTop;
  const backgroundYPositionStorage = `${-scrolledVertically / ratio}px`;
  greySkyBackground.style.top = backgroundYPositionStorage;
  console.log("scrolledVertically (#artist-content) : " + scrolledVertically);
  console.log("backgroundYPositionStorage: " + backgroundYPositionStorage);
}


// Summarize Functions
function handleScroll() {
  pinSlogan();
  handleArtistScrollIn()
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
