  $(document).ready(function () {
    $(".menu-item").on("click", function () {
      var targetId = $(this).data("anchor");
      var targetSection = $("#" + targetId);

      if (targetSection.length) {
        var offset = targetSection.offset().top;
        $("#wrapper").animate({scrollTop: offset}, 500);
      }
    });
  });