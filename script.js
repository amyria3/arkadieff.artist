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
    const disciplineSections = document.querySelectorAll("#disciplines section");

    function closeOtherDisciplines(currentDiscipline) {
      disciplineSections.forEach((discipline) => {
        if (discipline !== currentDiscipline) {
          discipline.classList.remove("opened");
        }
      });
    }

    disciplineSections.forEach((discipline) => {
      let timeoutId;

      discipline.addEventListener("mouseover", function () {
        if (!discipline.classList.contains("opened")) {
          clearTimeout(timeoutId); // Clear any existing timeout

          timeoutId = setTimeout(function () {
            closeOtherDisciplines(discipline);
            discipline.classList.add("opened");
          }, 500); // 500 milliseconds (0.5 seconds)
        }
      });

      discipline.addEventListener("mouseout", function () {
        clearTimeout(timeoutId); // Clear the timeout if the user moves away before 0.5 seconds
      });
    });
  });