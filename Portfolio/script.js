function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  window.onscroll = function() {
    // Get the navbar container
    var navbarContainer = document.getElementById("navbar-container");
 
    if (window.pageYOffset > 0) {
       navbarContainer.classList.add("sticky");
    } else {
       navbarContainer.classList.remove("sticky");
    }
 };