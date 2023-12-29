window.addEventListener("scroll", function () {

  //Fix slogan
  const sloganElement = document.getElementById("slogan");
  sloganElement.style.transform = `translateY(${window.scrollY}px)`;

  // // Fix artist description at place
  // const artistDescription = document.getElementById("wrapper-artist-description-content");
  // artistDescription.style.transform = `translateY(${window.scrollY}px)`;

  // Get the #video-background-wrapper element
  const videoWrapper = document.getElementById("video-background-wrapper");

  // Get the #disciplines section
  const disciplinesSection = document.getElementById("disciplines");
  const disciplinesPosition = disciplinesSection.getBoundingClientRect();

  // Calculate the scroll progress based on screen height
  const screenHeight = window.innerHeight;
  const scrollProgress =
    (window.scrollY - disciplinesPosition.top) / (screenHeight / 6);
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