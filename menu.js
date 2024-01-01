document.addEventListener("DOMContentLoaded", function () {
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