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
    if (videoWrapperIsSmall) {
      videoWrapper.style.height = "100vh";
      videoWrapper.style.maxHeight = "100vw";
      videoWrapperIsSmall = false; // Update the state
    }
  });
});

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
    if (videoWrapperIsSmall) {
      videoWrapper.style.height = "100vh";
      videoWrapper.style.maxHeight = "100vw";
      videoWrapperIsSmall = false; // Update the state
    }
  });
});

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
    if (videoWrapperIsSmall) {
      videoWrapper.style.height = "100vh";
      videoWrapper.style.maxHeight = "100vw";
      videoWrapperIsSmall = false; // Update the state
    }
  });
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

    // Step 3: Close previously opened section if it's not identical with the hovered one
    if (
      previouslyOpenedSection &&
      previouslyOpenedSection !== section &&
      previouslyOpenedSection.classList.contains("opened")
    ) {
      closeSection(previouslyOpenedSection);
    }

    // Step 4: Open the current section
    openSection(section);
  }

  // Function to replace classes
  function replaceClasses(element, oldClass, newClass) {
    console.log(
      `Before class replacement (${oldClass} to ${newClass}):`,
      element.classList
    );
    element.classList.remove(oldClass);
    element.classList.add(newClass);
    console.log(
      `After class replacement (${oldClass} to ${newClass}):`,
      element.classList
    );
  }

  //Function to replace classes in the current section

  function openSection(sectionToBeOpened) {
    replaceClasses(sectionToBeOpened, "closed", "opened");
    replaceClasses(
      sectionToBeOpened.querySelector(".section-content"),
      "invisible",
      "visible"
    );
    replaceClasses(
      sectionToBeOpened.querySelector(".section-content"),
      "zero-width",
      "auto-width"
    );
  }

  //Function to replace classes in the previous section
  function closeSection(sectionToBeClosed) {
    replaceClasses(
      sectionToBeClosed.querySelector(".section-content"),
      "auto-width",
      "zero-width"
    );
    replaceClasses(sectionToBeClosed, "opened", "closed");
    setTimeout(() => {
      replaceClasses(
        sectionToBeClosed.querySelector(".section-content"),
        "visible",
        "invisible"
      );
    }, 1000);
  }

  // Set event listeners for mouse enter and mouse leave for every section
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
  });
});
