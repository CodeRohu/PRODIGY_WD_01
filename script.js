// Function to change the style of the navigation bar on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.style.backgroundColor = "#f8f9fa"; // Change background color on scroll
  } else {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.8)"; // Revert to original background color
  }
}
