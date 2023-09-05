/* Sticky Logo */
$(document).ready(function () {
  var logo = $("#logo-image");
  var initialSrc = logo.attr("src");

  // Set the scroll threshold at which you want to change the logo
  var scrollThreshold = 100;

  $(window).scroll(function () {
    if ($(this).scrollTop() > scrollThreshold) {
      // Add the 'sticky' class to the logo
      logo.addClass("sticky");

      // Change the logo's src when scrolling
      logo.attr("src", "./images/logo-dark-with-text.png"); // Replace with the path to your alternative logo
    } else {
      // Remove the 'sticky' class from the logo
      logo.removeClass("sticky");

      // Restore the original logo src
      logo.attr("src", initialSrc);
    }
  });
});

/* Sidenav Sticky */
window.addEventListener("scroll", function () {
  var sidenav = document.querySelector(".sidenav");
  var scrollY = window.scrollY;
  var sidenavHeight = sidenav.clientHeight;
  var windowHeight = window.innerHeight;
  var footer = document.querySelector("footer"); // Replace "footer" with your actual footer selector
  var scrollIcon = document.getElementById("scroll-icon"); // Replace with your actual scroll icon element
  var header = document.querySelector("header"); // Replace "header" with your actual header selector

  // Calculate the distance from the top of the footer
  var footerTop = footer.getBoundingClientRect().top;

  var scrollingDown = false; // Variable to track scrolling direction

  window.addEventListener("scroll", function () {
    var currentScrollY = window.scrollY;

    // Check if the scroll position is at or above the header section
    var headerBottom = header.getBoundingClientRect().bottom;

    // Check if the scroll position is at or below the footer section
    var footerTop = footer.getBoundingClientRect().top;

    // Check the scroll direction
    if (currentScrollY > scrollY) {
      // Scrolling downwards, keep the sidenav logic as it is
      if (
        currentScrollY >= sidenavHeight - windowHeight &&
        footerTop > windowHeight
      ) {
        // Stick the sidenav to the bottom of the viewport
        sidenav.style.position = "fixed";
        sidenav.style.top = windowHeight - sidenavHeight + "px";
      } else {
        // Keep the sidenav at the top
        sidenav.style.position = "absolute";
        sidenav.style.top = "0";
      }

      // Set scrolling direction to down
      scrollingDown = true;
    } else {
      // Scrolling upwards
      if (scrollingDown && currentScrollY <= sidenavHeight) {
        // Show the sidenav when transitioning from scrolling down to up
        sidenav.style.position = "fixed";
        sidenav.style.top = "0";

        // Reset the scroll icon to the original src
        scrollIcon.src = "./images/scroll-icon.png";
      } else if (headerBottom <= 0 && footerTop > windowHeight) {
        // Show the sidenav when at or above the header and not at the footer
        sidenav.style.position = "fixed";
        sidenav.style.top = "0";

        // Change the scroll icon to your desired image for scrolling at the top of the header
        if (currentScrollY <= header.offsetHeight) {
          scrollIcon.src = "./images/scroll-icon.png";
        }
      }

      // Reset scrolling direction to up
      scrollingDown = false;
    }

    // Change the scroll icon based on scrolling direction
    if (scrollingDown) {
      // Change the scroll icon to your desired image for scrolling downwards
      scrollIcon.src = "./images/scroll-icon.png";
    } else {
      // Change the scroll icon to your desired image for scrolling upwards
      scrollIcon.src = "./images/scroll-icon-mirror.png";
    }

    // Update the last scroll position
    scrollY = currentScrollY;
  });
});

/* Footer list toggle */
$(document).ready(function () {
  // Function to toggle the dropdown list
  function toggleDropdown($button) {
    $button.next(".dropdown-list").slideToggle();
  }

  // Toggle Section 1
  $(".toggle-btn-1").click(function () {
    if ($(window).width() < 768) {
      toggleDropdown($(this));
    }
  });

  // Toggle Section 2
  $(".toggle-btn-2").click(function () {
    if ($(window).width() < 768) {
      toggleDropdown($(this));
    }
  });

  // Toggle Section 3
  $(".toggle-btn-3").click(function () {
    if ($(window).width() < 768) {
      toggleDropdown($(this));
    }
  });

  // Toggle Section 4
  $(".toggle-btn-4").click(function () {
    if ($(window).width() < 768) {
      toggleDropdown($(this));
    }
  });
});
