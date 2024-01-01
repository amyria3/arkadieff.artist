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
  });