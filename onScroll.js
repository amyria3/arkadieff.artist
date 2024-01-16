// Funktion isVisible
isVisible = function (el, wrapper) {
  var elRect = el.getBoundingClientRect();
  var wrapperRect = wrapper.getBoundingClientRect();

  const res =
    elRect.top >= wrapperRect.top && elRect.bottom <= wrapperRect.bottom;

  return res;
};

// Selektiere #intersection-wrapper
const intersectionWrapper = document.getElementById("intersection-wrapper");
const biggerIntersectionWrapper = document.getElementById(
  "bigger-intersection-wrapper"
);

// Selektiere alle Elemente mit der Klasse .on-scroll
const onScrollElements = document.querySelectorAll(".on-scroll");

// Funktion zur Protokollierung der Informationen
function logVisibilityInfo(element) {
  console.log(
    `${element.innerHTML} | isVisible: ${isVisible(
      element,
      intersectionWrapper
    )} | Wrapper top: ${intersectionWrapper.getBoundingClientRect().top}`
  );
}

function adjustBlur(element) {
  if (isVisible(element, biggerIntersectionWrapper)) {
    if (isVisible(element, intersectionWrapper)) {
      element.classList.remove("some-blur");
    } else {
      element.classList.add("some-blur");
    }
    element.classList.remove("more-blur");
  } else {
    element.classList.remove("some-blur");
    element.classList.add("more-blur");
  }
}

if (window.innerWidth > 650) {
  window.addEventListener("scroll", () => {
    // Überprüfe und protokolliere die Sichtbarkeit nur für Elemente im Viewport
    onScrollElements.forEach((element) => {
      adjustBlur(element);
    });
  });

  window.addEventListener("wheel", (event) => {
    // Überprüfe und protokolliere die Sichtbarkeit nur für Elemente im Viewport
    onScrollElements.forEach((element) => {
      adjustBlur(element);
    });
  });
} else {
  const blurredElements = document.querySelectorAll(".more-blur", ".some-blur");

  blurredElements.forEach((element) => {
    element.classList.add("blocked");
  });
}
