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

document.addEventListener('DOMContentLoaded', function () {
  const disciplineSections = document.querySelectorAll('.discipline-section');

  disciplineSections.forEach((section) => {
    section.addEventListener('mouseenter', function () {
      // Remove .opened class from all discipline sections
      disciplineSections.forEach((s) => s.classList.remove('opened'));

      // Remove .visible class from all discipline content sections
      const contentSections = document.querySelectorAll('.discipline-content');
      contentSections.forEach((content) => content.classList.remove('visible'));

      // Add .opened class to the current discipline section
      section.classList.add('opened');

      // Add .visible class to the corresponding discipline content
      const correspondingContent = section.querySelector('.discipline-content');
      correspondingContent.classList.add('visible');
    });
  });
});