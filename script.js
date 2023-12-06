// script.js

// 1. STABLE SLOGAN POSITION DESPITE SCROLL
// 2. RESIZE VISIBLE VIDEO CONTENT DEPENDING ON CLICK OR SCROLL

window.addEventListener("scroll", function () {
  const sloganElement = document.getElementById("slogan");
  sloganElement.style.transform = `translateY(${window.scrollY}px)`;

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
        behavior: 'smooth', // You can use 'auto' instead of 'smooth' for an instant scroll
        block: 'start', // Align the top edge of the element with the top of the viewport
      });

    if (videoWrapperIsSmall) {
      videoWrapper.style.height = "100vh";
      videoWrapper.style.maxHeight = "100vw";
      videoWrapperIsSmall = false; // Update the state
    }
  });
});

  //APPEAR ON SCROLL-IN
  const animatedElement = document.querySelector(".appear-on-scroll");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const elementPosition = animatedElement.offsetTop;

    if (scrollPosition > elementPosition - window.innerHeight / 1.6) {
      animatedElement.style.opacity = "1";
      animatedElement.style.transform = "translateY(0)";
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with the class 'discipline-section'
  const disciplineSections = document.querySelectorAll(".discipline-section");

  // Flag to track whether the mouse is over a section
  let isMouseOver = false;

  // Timeout ID for delayed actions
  let timeoutId;

  // Function to handle mouse enter event
  function handleMouseEnter(section) {
    // Exit the function if the section is already opened
    if (section.classList.contains("opened")) {
      return;
    }

    // Clear any existing timeouts
    clearTimeout(timeoutId);

    // Get the previously opened section
    const previouslyOpenedSection = document.querySelector(
      ".discipline-section.opened"
    );

    // Apply clothing to the previously opened section
    closeSection(previouslyOpenedSection);
    openSection(section);
  }

  // Function to handle click event
  function handleClick(section) {
    // Exit the function if the section is already opened
    if (section.classList.contains("opened")) {
      return;
    }

    // Get the previously opened section
    const previouslyOpenedSection = document.querySelector(
      ".discipline-section.opened"
    );

    // Apply clothing to the previously opened section
    closeSection(previouslyOpenedSection);
    openSection(section);
  }

  function openSection(sectionToBeOpened) {
    sectionToBeOpened.classList.remove("closed");
    const sectionContent = sectionToBeOpened.querySelector(".section-description");
    sectionToBeOpened.style.flexGrow = 1;
    sectionContent.style.width = "100%";
    sectionContent.style.display = "flex";
    sectionToBeOpened.classList.add("opened");
  }

  function closeSection(sectionToBeClosed) {
    if (!sectionToBeClosed) return;

    const sectionContent = sectionToBeClosed.querySelector(".section-description");
    sectionToBeClosed.style.flexGrow = 0;
    sectionContent.style.width = "0%";
    setTimeout(() => {
      sectionContent.style.display = "none";
      sectionToBeClosed.classList.add("closed");
    }, 1000);
    sectionToBeClosed.classList.remove("opened");
  }

  // Set event listeners for mouse enter, mouse leave, and click for every section
  disciplineSections.forEach((section) => {
    section.addEventListener("mouseenter", function () {
      // Set the flag to true and initiate a timeout for handleMouseEnter after 800ms
      isMouseOver = true;
      timeoutId = setTimeout(() => handleMouseEnter(section), 800);
    });

    section.addEventListener("mouseleave", function () {
      // Reset the flag to false and clear the timeout
      isMouseOver = false;
      clearTimeout(timeoutId);
    });

    section.addEventListener("click", function () {
      // Handle click event
      handleClick(section);
    });
  });
});
