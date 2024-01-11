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
const biggerIntersectionWrapper = document.getElementById("bigger-intersection-wrapper")

// Selektiere alle Elemente mit der Klasse .on-scroll
const onScrollElements = document.querySelectorAll(".on-scroll");

// Funktion zur Protokollierung der Informationen
function logVisibilityInfo(element) {
  console.log(
    `${element.innerHTML} | isVisible: ${isVisible(element, intersectionWrapper)} | Wrapper top: ${intersectionWrapper.getBoundingClientRect().top}`
  );
}

// Funktion zum Überprüfen der Sichtbarkeit und Protokollierung
function updateVisibilityAndLog(element) {
  if (isVisible(element, intersectionWrapper)) {
    !element.classList.contains("show")&&
    element.classList.add("show");
  } else {
    element.classList.contains("show")&&
    element.classList.remove("show");
  }
}

// Funktion zum Überprüfen der Sichtbarkeit und Protokollierung
function unblur(element) {
  if (isVisible(element, biggerIntersectionWrapper)) {
    !element.classList.contains("blur")&&
    element.classList.add("blur");
  } else {
    element.classList.contains("blur")&&
    element.classList.remove("blur");
  }
}


// Initialisierung - Protokolliere die Informationen zu allen sichtbaren Elementen im Viewport
onScrollElements.forEach((element) => {
  unblur(element)
  updateVisibilityAndLog(element);
});

// Event-Listener für Scroll-Änderungen
window.addEventListener("scroll", () => {
  // Überprüfe und protokolliere die Sichtbarkeit nur für Elemente im Viewport
  onScrollElements.forEach((element) => {
    updateVisibilityAndLog(element);
  });
});

window.addEventListener("wheel", (event) => {
  // Überprüfe und protokolliere die Sichtbarkeit nur für Elemente im Viewport
  onScrollElements.forEach((element) => {
    updateVisibilityAndLog(element);
  });
});