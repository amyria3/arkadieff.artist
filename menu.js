document.addEventListener("DOMContentLoaded", function () {
  var menuBar = document.getElementById("menuBar");
  var isDragging = false;
  var offset = { x: 0, y: 0 };

  menuBar.addEventListener("mousedown", function (e) {
    isDragging = true;
    offset = { x: e.clientX - menuBar.getBoundingClientRect().left, y: e.clientY - menuBar.getBoundingClientRect().top };
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      menuBar.style.left = e.clientX - offset.x + "px";
      menuBar.style.top = e.clientY - offset.y + "px";
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
  });

  var menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Remove 'selected-item' class from all menu items
      menuItems.forEach(function (menuItem) {
        menuItem.classList.remove("selected-item");
      });

      // Add 'selected-item' class to the clicked menu item
      this.classList.add("selected-item");

      var targetId = this.getAttribute("data-anchor");
      console.log("Clicked on:", targetId);

      var targetSection = document.getElementById(targetId);

      if (targetSection) {
        var offset = targetSection.offsetTop;
        console.log("Scrolling to offset:", offset);
        document.getElementById("artist-content").scrollTo({ top: offset, behavior: "smooth" });
      }
    });
  });

  // Function to check if an element's top is in the viewport
  function isTopInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= window.innerHeight;
  }

  // Handle scroll to add 'selected-item' class to matching menu item
  function handleScroll() {
    var disciplines = document.querySelectorAll(".discipline");

    disciplines.forEach(function (discipline) {
      var matchingMenuItem = document.querySelector('.menu-item[data-section-id="' + discipline.id + '"]');
      if (matchingMenuItem && isTopInViewport(discipline)) {
        menuItems.forEach(function (menuItem) {
          menuItem.classList.remove("selected-item");
        });
        matchingMenuItem.classList.add("selected-item");
      }
    });
  }

  // Bind handleScroll to both scroll and wheel events for better compatibility
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("wheel", handleScroll);
});


//FOR PHONES

// Funktion isVisible
isVisible = function (el, container) {
  var elRect = el.getBoundingClientRect();
  var containerRect = container.getBoundingClientRect();

  const res =
    elRect.top >= containerRect.top &&
    elRect.bottom <= containerRect.bottom;

  return res;
};

// Selektiere #artist-content
const artistContent = document.getElementById("artist-content");

// Selektiere alle Elemente mit der Klasse .on-blur innerhalb von #artist-content
const onBlurElements = artistContent.querySelectorAll(".on-blur");

// Funktion zur Anpassung des Blur-Effekts
function adjustBlur(element) {
  if (isVisible(element, artistContent)) {
    element.classList.remove("more-blur");
    setTimeout(() => {
      element.classList.remove("some-blur");
    }, 500);
  } else {
    element.classList.add("some-blur");
    element.classList.remove("more-blur");
  }
}

// Event-Listener für Scroll-Änderungen
function handleScroll() {
  // Überprüfe und passe den Blur-Effekt nur für sichtbare Elemente innerhalb von #artist-content an
  onBlurElements.forEach((element) => {
    adjustBlur(element);
  });
}

// Überprüfe, ob die Bildschirmbreite kleiner als 600 Pixel ist (als Beispiel für "Handy")
if (window.innerWidth < 700) {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("wheel", handleScroll);
}
