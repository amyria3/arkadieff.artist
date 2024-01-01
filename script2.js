script.js


document.addEventListener("DOMContentLoaded", function () {
  const sloganElement = document.getElementById("slogan");
  const artistElement = document.getElementById("artist");
  const greySkyBackground = document.getElementById("grey-sky-background");
  const greySkyBackgroundImg = document.getElementById(
    "grey-sky-background-img"
  );
  const artistContent = document.getElementById("artist-content");


  function logElementHeight(element) {
    if (element) {
      console.log(`Height of ${element.id}: ${element.offsetHeight}px`);
    } else {
      console.error(`Element not found.`);
    }
  }

  logElementHeight(sloganElement);
  logElementHeight(artistElement);
  logElementHeight(greySkyBackground);
  logElementHeight(greySkyBackgroundImg); //0
  logElementHeight(artistContent);


  let animatedBgHeight;
  let moveRelativeToFrame;
  let ratio;
  let visible;

  // Pin the slogan //works
  function pinSlogan() {
    const scrolledVertically = window.scrollY;
    if (sloganElement) {
      sloganElement.style.transform = `translateY(${scrolledVertically / 2}px)`; // Adjust the division factor as needed
    } else {
      console.log("sloganElement not found");
    }
  }

  // Get the height of the background img:
  function getHeight(imageElement) {
    if (imageElement) {
      imageElement.onload = function () {
        const imgHeight = imageElement.offsetHeight;
        console.log('Height of element:', imgHeight);
      };
    } else {
      console.error('Element not found.');
    }
    animatedBgHeight = imageElement.height;
    return animatedBgHeight
  }

  //calculate the height of visible window (#artist-content minus margins / frame or border)
  function calculateHeight(element) {
    const topBorder = 12; //in vw
    const bottomBorder = 12; //in vw
    const currentHeight = element.clientHeight;
    const newHeight =
      currentHeight - ((topBorder + bottomBorder) / 100) * window.innerWidth;
    return newHeight;
  }

// calculate offset
function calculateOffset() {
  const screenHeight = window.innerHeight;
  const ratio = returnRatio();
  const result = screenHeight / ratio;
  return result;
}

//adjust background offset
function offsetBasedOnRatio(element) {
  const dividedHeight = calculateOffset();
  element.style.top = `-${dividedHeight}px`;
}

  function handleArtistScrollIn() {
    const scrolledVertically =
      (artistElement.getBoundingClientRect().top / window.innerHeight) * 100;
    ratio = returnRatio(animatedBgHeight)
    moveRelativeToFrame = scrolledVertically * ratio;
    greySkyBackground.style.setProperty(
      "top",
      `${moveRelativeToFrame}px`,
      "important"
    );
    console.log("scrolledVertically (scrolling in): " + scrolledVertically);
    console.log("moveRelativeToFrame: " + moveRelativeToFrame);
  }


  //move greySkyBackgroundImg when #artist-content is scrolled
  function handleArtistBackground() {
    const scrolledVertically = artistContent.scrollTop;
    visible = calculateHeight(artistContent);
    let dynamicRatio = returnRatio(animatedBgHeight - visible);
    const backgroundYPositionStorage = `${
      scrolledVertically / dynamicRatio
    }px`;
    greySkyBackgroundImg.style.top = backgroundYPositionStorage;
    let x = animatedBgHeight - moveRelativeToFrame;
    console.log("dynamicRatio : " + dynamicRatio + " |" + " ratio : " + ratio);
    console.log("scrolledVertically (#artist-content) : " + scrolledVertically);
    console.log(
      "moveRelativeToFrame : " +
        moveRelativeToFrame +
        " typeof(moveRelativeToFrame) : " +
        typeof moveRelativeToFrame
    );

    console.log("animatedBgHeight-moveRelativeToFrame : " + x);
    console.log("backgroundYPositionStorage: " + backgroundYPositionStorage);
  }

  // Summarize Functions
  function handleScroll() {
    pinSlogan();
    handleArtistScrollIn();
  }

  window.addEventListener("scroll", handleScroll);
  artistContent.addEventListener("scroll", handleArtistBackground);

  // PERFORMANCE

  document.querySelectorAll("img").forEach(function (img) {
    img.loading = "lazy";
  });

  document.querySelectorAll("video source").forEach(function (source) {
    source.loading = "lazy";
  });
});

// // Function to get the background position Y of an element
// function getBackgroundPositionY(element) {
//   const computedStyle = window.getComputedStyle(element);
//   return computedStyle.getPropertyValue("background-position-y");
// }