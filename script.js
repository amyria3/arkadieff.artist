const greySkyBackground = document.getElementById('grey-sky-background');
const artistContent = document.getElementById('artist-content');
const artistElement = document.getElementById("artist");

//CREATE FUNCTIONS
//pin slogan
const sloganElement = document.getElementById("slogan");

function pinSlogan() {
  const scrolledVertically = window.scrollY;
  if (sloganElement) {
    sloganElement.style.transform = `translateY(${scrolledVertically / 2}px)`; // Adjust the division factor as needed
  } else {
    console.log("sloganElement not found");
  }
}







//summerise functions
function handleScroll(){
  pinSlogan()
}

window.addEventListener("scroll", handleScroll);


// PERFORMANCE
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach(function (img) {
    img.loading = "lazy";
  });

  document.querySelectorAll("video source").forEach(function (source) {
    source.loading = "lazy";
  });
});