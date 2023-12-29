window.addEventListener("scroll", function () {
  const scrolledVertically = window.scrollY;

  // Fix slogan
  const sloganElement = document.getElementById("slogan");
  if (sloganElement) {
    sloganElement.style.transform = `translateY(${scrolledVertically / 2}px)`; // Adjust the division factor as needed
  } else {
    console.log(sloganElement)
  }

  // Fix artist description at place
  const artistDescriptionElement = document.getElementById("artist-description");
  const greySkyBackground = document.getElementById('grey-sky-background');

  if (artistDescriptionElement && greySkyBackground) {
    const distanceFromBottom = window.innerHeight - artistDescriptionElement.getBoundingClientRect().bottom;
    const distanceFromBottomInPercent = (distanceFromBottom / window.innerHeight) * 100;
    const newBackgroundPosition = `0% ${50 + distanceFromBottomInPercent / 3}%`; // Adjust the division factor as needed
    greySkyBackground.style.backgroundPosition = newBackgroundPosition;
  } else {
    console.log(artistDescriptionElement)
    console.log(greySkyBackground)
  }
  // const blurAmount = 5
  // greySkyBackground.style.filter = `blur(${blurAmount}px)`;




  // Get the #video-background-wrapper element
  const videoWrapper = document.getElementById("video-background-wrapper");

  // Get the #disciplines section
  const disciplinesSection = document.getElementById("disciplines");
  const disciplinesPosition = disciplinesSection.getBoundingClientRect();

  // Calculate the scroll progress based on screen height
  const screenHeight = window.innerHeight;
  const scrollProgress =
    (scrolledVertically - disciplinesPosition.top) / (screenHeight / 6);
  var videoWrapperIsSmall = false;

  // Shrink the video background when the scroll progress is reached
  if (scrollProgress >= 1) {
    const newHeight = 40; // 10vw in height
    videoWrapper.style.height = `${newHeight}vw`;
    videoWrapperIsSmall = true;
  }

  // Restore the original size on click if the videoWrapper is small
  videoWrapper.addEventListener("click", function () {
    // Scroll the videoWrapper to the top edge of the viewport
    videoWrapper.scrollIntoView({
      behavior: "smooth", // You can use 'auto' instead of 'smooth' for an instant scroll
      block: "start", // Align the top edge of the element with the top of the viewport
    });

    if (videoWrapperIsSmall) {
      videoWrapper.style.height = "100vh";
      videoWrapper.style.maxHeight = "100vw";
      videoWrapperIsSmall = false; // Update the state
    }
  });
});