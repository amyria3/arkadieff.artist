window.addEventListener("scroll", function () {
  const scrolledVertically = window.scrollY;
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let isScrollingDown = false;
  let videoWrapperIsSmall = false;

  function handleSplash() {
    const sloganElement = document.getElementById("slogan");
    if (sloganElement) {
      sloganElement.style.transform = `translateY(${scrolledVertically / 2}px)`;
    } else {
      console.log("sloganElement not found");
    }
  }

  function handleVideoSection() {
    const videoWrapper = document.getElementById("video-background-wrapper");
    const nextSection = videoWrapper.nextElementSibling;

    function isScrollingDownward() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      isScrollingDown = scrollTop > lastScrollTop;
      lastScrollTop = scrollTop;
    }

    function shrinkVideoBackground() {
      const screenHeight = window.innerHeight;
      const scrollProgress =
        (window.scrollY - nextSection.getBoundingClientRect().top) /
        (screenHeight / 6);

      if (scrollProgress >= 1) {
        const newHeight = 40; // 10vw in height
        videoWrapper.style.height = `${newHeight}vw`;

        if (!videoWrapperIsSmall) {
          videoWrapper.classList.add("small-video-wrapper");
          videoWrapperIsSmall = true;
        }
      } else {
        videoWrapper.style.height = "100vh";

        if (videoWrapperIsSmall) {
          videoWrapper.classList.remove("small-video-wrapper");
          videoWrapperIsSmall = false;
        }
      }
    }

    window.addEventListener("scroll", function () {
      isScrollingDownward();
      shrinkVideoBackground();
    });

    videoWrapper.addEventListener("click", function () {
      if (videoWrapperIsSmall) {
        videoWrapper.style.height = "100vh";
        videoWrapper.classList.remove("small-video-wrapper");
        videoWrapperIsSmall = false;

        setTimeout(function () {
          videoWrapper.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 700);
      } else {
        videoWrapper.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  function handleArtistSection() {
    const artistElement = document.getElementById("artist");
    const greySkyBackground = document.getElementById("grey-sky-background");
    const artistContent = document.getElementById("artist-content");

    if (artistElement && greySkyBackground && artistContent) {
      const distanceFromBottom =
        window.innerHeight - artistElement.getBoundingClientRect().bottom;
      const distanceFromBottomInPercent =
        (distanceFromBottom / window.innerHeight) * 100;

      const newBackgroundPosition = `0% ${50 + distanceFromBottomInPercent / 3}%`;
      greySkyBackground.style.backgroundPosition = newBackgroundPosition;

      const newTextPosition = `${0 + -1.07 * distanceFromBottomInPercent}%`;
      artistContent.style.top = newTextPosition;

      const nextDiv = findNextDivInViewport();

      if (nextDiv) {
        const distanceFromTop = nextDiv.getBoundingClientRect().top;

        if (distanceFromTop < window.innerHeight * 0.8) {
          nextDiv.style.opacity = 1;
          nextDiv.style.transform = "translateY(0)";
        }
      }
    } else {
      console.log("Some elements in artist section not found");
    }
  }

  function findNextDivInViewport() {
    const allDivs = document.querySelectorAll("div");
    let nextDiv = null;

    allDivs.forEach((div) => {
      const distanceFromTop = div.getBoundingClientRect().top;

      if (
        !nextDiv ||
        (distanceFromTop >= 0 &&
          distanceFromTop < nextDiv.getBoundingClientRect().top)
      ) {
        nextDiv = div;
      }
    });

    return nextDiv;
  }

  handleSplash();
  handleVideoSection();
  handleArtistSection();
});

// PERFORMANCE
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach(function (img) {
    img.loading = "lazy";
  });

  document.querySelectorAll("video source").forEach(function (source) {
    source.loading = "lazy";
  });
});
