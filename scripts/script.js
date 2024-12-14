document.addEventListener("DOMContentLoaded", function () {
  // Code to animate navbar items
  function animateItems(items, delayMultiplier = 1) {
    items.forEach(function (item, index) {
      setTimeout(function () {
        item.classList.add("animate");
      }, index * 300 * delayMultiplier);
    });
  }

  const name = document.querySelectorAll(".name");
  const navbarItems = document.querySelectorAll(".navbar-item");
  const tiles = document.querySelectorAll(".tile");
  const navLinks = document.querySelectorAll(".navlink");
  const aboutHero = document.querySelectorAll(".about-hero");
  const resumePart = document.querySelectorAll(".resume-part");

  animateItems(name);
  animateItems(navbarItems);
  animateItems(aboutHero, 3);
  animateItems(resumePart);
  animateItems(tiles, 2);


  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");
  const nav = document.querySelector(".nav");

  /**
   * Toggles the menu by adding or removing the "menu-open" class from the navbar element. 
   * Additionally, it shows or hides the navigation links based on the presence of the "menu-open" class.
   * If the menu is being opened, it creates a "GET IN TOUCH" button and appends it to the nav element.
   * If the menu is being closed, it removes the existing "GET IN TOUCH" button, if present.
   */
  function toggleMenu() {
    navbar.classList.toggle("menu-open");
    navLinks.forEach((link) => {
      link.style.display = navbar.classList.contains("menu-open")
        ? "block"
        : "none";
    });
    if (navbar.classList.contains("menu-open")) {
      const getInTouchButton = document.createElement("button");
      getInTouchButton.className = "button navbar-item navlink";
      getInTouchButton.textContent = "GET IN TOUCH";
      getInTouchButton.onclick = function () {
        window.location.href = "mailto:example@example.com";
      };
      nav.appendChild(getInTouchButton);
    } else {
      const existingButton = document.querySelector(".button.navbar-item.navlink");
      if (existingButton) {
        existingButton.remove();
      }
    }
  }

  menuToggle.addEventListener("click", toggleMenu);

  // Function to handle screen resizing
  // function handleScreenResize() {
  //   const screenSize = window.innerWidth;
  //   navLinks.forEach((link) => {
  //     link.style.display = screenSize <= 767 ? "none" : "block";
  //   });

  //   if (screenSize <= 767) {
  //     animateItems(navbarItems);
  //   } else {
  //     navbarItems.forEach(function (item) {
  //       item.classList.remove("animate");
  //     });
  //   }
  // }

  window.addEventListener("resize", handleScreenResize);
  window.addEventListener("load", handleScreenResize);
});
