// Funktion isVisible
isVisible = function (el, wrapper) {
  var elRect = el.getBoundingClientRect();
  var wrapperRect = wrapper.getBoundingClientRect();

  const res =
    elRect.top >= wrapperRect.top && elRect.bottom <= wrapperRect.bottom;

  return res;
}

// Selektiere #intersection-wrapper
const intersectionWrapper = document.getElementById("intersection-wrapper");

// Selektiere alle Elemente mit der Klasse .on-scroll
const onScrollElements = document.querySelectorAll(".on-scroll");

// Funktion zur Protokollierung der Informationen
function logVisibilityInfo(element) {
  console.log(
    `${element.innerHTML} | isVisible: ${isVisible(element, intersectionWrapper)} | Wrapper top: ${intersectionWrapper.getBoundingClientRect().top}`
  );
}

// Funktion zum Überprüfen der Sichtbarkeit und Protokollierung
function checkVisibilityAndLog(element) {
  if (isVisible(element, intersectionWrapper)) {
    logVisibilityInfo(element);
    element.classList.add("show");
  } else {
    element.classList.remove("show");
  }
}

// Initialisierung - Protokolliere die Informationen zu allen sichtbaren Elementen im Viewport
onScrollElements.forEach((element) => {
  checkVisibilityAndLog(element);
});

// Event-Listener für Scroll-Änderungen
window.addEventListener("scroll", () => {
  // Überprüfe und protokolliere die Sichtbarkeit nur für Elemente im Viewport
  onScrollElements.forEach((element) => {
    checkVisibilityAndLog(element);
  });
});

window.addEventListener("wheel", (event) => {
  // Überprüfe und protokolliere die Sichtbarkeit nur für Elemente im Viewport
  onScrollElements.forEach((element) => {
    checkVisibilityAndLog(element);
  });
});