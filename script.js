window.addEventListener("scroll", function () {

  const scrolledVertically = window.scrollY;
  // Initialize a variable to track the scroll direction (for SPLASH)
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let isScrollingDown = false;

  // SPLASH
  // Fix slogan's position

  const sloganElement = document.getElementById("slogan");
  if (sloganElement) {
    sloganElement.style.transform = `translateY(${scrolledVertically / 2}px)`; // Adjust the division factor as needed
  } else {
    console.log("sloganElement: " + sloganElement);
  }

  // VIDEO SECTION (WRAPPER)
  const videoWrapper = document.getElementById("video-background-wrapper");
  const nextSection = videoWrapper.nextElementSibling;

  // Function to check if scrolling down
  function isScrollingDownward() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    isScrollingDown = scrollTop > lastScrollTop;
    lastScrollTop = scrollTop;
  }

  // Function to handle scroll events
  function handleScroll() {
    // Calculate the scroll progress based on screen height
    const screenHeight = window.innerHeight;
    const scrollProgress =
      (window.scrollY - nextSection.getBoundingClientRect().top) /
      (screenHeight / 6);

    // Shrink the video background when the scroll progress is reached
    if (scrollProgress >= 1) {
      const newHeight = 40; // 10vw in height
      videoWrapper.style.height = `${newHeight}vw`;
      videoWrapperIsSmall = true;
    } else {
      // If scrolling back, restore the original size
      videoWrapper.style.height = "100vh";
      videoWrapper.style.maxHeight = "100vw";
      videoWrapperIsSmall = false;
    }
  }

  // Listen for scroll events
  window.addEventListener("scroll", function () {
    isScrollingDownward();
    handleScroll();
  });

  // Restore the original size on click if the videoWrapper is small
  videoWrapper.addEventListener("click", function () {
    if (videoWrapperIsSmall) {
      videoWrapper.style.height = "100vh";
      videoWrapper.style.maxHeight = "100vw";
      videoWrapperIsSmall = false; // Update the state


      setTimeout(function() {
      // Scroll to the videoWrapper
      videoWrapper.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 700); // 500 milliseconds (0.5 seconds)
    } else {

      videoWrapper.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  // ARTIST
  // Make artist-background move slowly, make #artist-description-content move faster
  const artistDescriptionElement = document.getElementById("artist");
  const greySkyBackground = document.getElementById("grey-sky-background");
  const artistDescriptionContent = document.getElementById(
    "artist-description-content"
  );

  if (
    artistDescriptionElement &&
    greySkyBackground &&
    artistDescriptionContent
  ) {
    const distanceFromBottom =
      window.innerHeight -
      artistDescriptionElement.getBoundingClientRect().bottom;
    const distanceFromBottomInPercent =
      (distanceFromBottom / window.innerHeight) * 100;

    const newBackgroundPosition = `0% ${50 + distanceFromBottomInPercent / 3}%`; // Adjust the division factor as needed
    greySkyBackground.style.backgroundPosition = newBackgroundPosition;

    const newTextPosition = `${0 + -1.07 * distanceFromBottomInPercent}%`; // Adjust as needed
    artistDescriptionContent.style.top = newTextPosition;
  } else {
    console.log("artistDescriptionElement: " + artistDescriptionElement);
    console.log("greySkyBackground: " + greySkyBackground);
    console.log("artistDescriptionContent : " + artistDescriptionContent);
  }
});
