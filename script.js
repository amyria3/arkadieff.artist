const sloganElement = document.getElementById('slogan');
const artistElement = document.getElementById('artist');
const artistContent = document.getElementById('artist-content');
const artistContentWrapper = document.getElementById('wrapper')
const greySkyBackground = document.getElementById('grey-sky-background');
const greySkyBackgroundImg = document.getElementById('grey-sky-background-img');

const windowWidth = window.innerWidth
const visibleVW = 84

// Pin the slogan
function pinSlogan() {
  const scrolledVertically = window.scrollY;
  if (sloganElement) {
    sloganElement.style.transform = `translateY(${scrolledVertically / 2}px)`; // Adjust the division factor as needed
  } else {
    console.log("sloganElement not found");
  }
}

//Function to translate vws into px
function convertVWToPixels(vwValue) {
  if (typeof(vwValue)==="number"){
    console.log((vwValue * windowWidth) / 100)
    return (vwValue * windowWidth) / 100;
  }else{
    console.log(typeof(vwValue))
  }
}

// Function to get the background position Y of an element
function getBackgroundPositionY(element) {
  const computedStyle = window.getComputedStyle(element);
  return computedStyle.getPropertyValue('background-position-y');
}

// ratio between #artistContent and background-img
function returnRatio() {
  const wrapperHeight = artistContentWrapper.offsetHeight;

  const greySkyBackgroundHeight = greySkyBackgroundImg.clientHeight;
  const ratio = wrapperHeight / greySkyBackgroundHeight;
  console.log("wrapperHeight : " + wrapperHeight)
  console.log("greySkyBackgroundImgHeight : " + greySkyBackgroundHeight)

  console.log(ratio)
  return ratio;
}

function returnRatioAfterRender() {
  const wrapperHeight = artistContentWrapper.clientHeight;
  const greySkyBackgroundHeight = greySkyBackgroundImg.clientHeight;
  const zielHoehe = greySkyBackgroundHeight - convertVWToPixels(visibleVW);
  const ratio = wrapperHeight / zielHoehe;
  console.log("wrapperHeight : " + wrapperHeight)
  console.log("greySkyBackgroundImgHeight : " + greySkyBackgroundHeight)

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
  const scrolledVertically = artistContent.getBoundingClientRect().top;
  const greySkyBackgroundImgTop = `${-scrolledVertically / ratio}px`;
  greySkyBackgroundImg.style.top = greySkyBackgroundImgTop;
  console.log("scrolledVertically (scrolling in) : " + scrolledVertically);
  console.log("greySkyBackgroundImgTop: " + greySkyBackgroundImgTop);
}

function handleArtistBackground() {
  console.log("Yes")
  const ratio = returnRatioAfterRender();
  const scrolledVertically = artistContent.scrollTop;
  const greySkyBackgroundTop = `${-scrolledVertically / ratio}px`;
  greySkyBackground.style.top = greySkyBackgroundTop;
  console.log("scrolledVertically (#artist-content) : " + scrolledVertically);
  console.log("greySkyBackgroundTop: " + greySkyBackgroundTop);
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
