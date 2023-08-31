// document.addEventListener("DOMContentLoaded", function () {
//   const sidebar = document.querySelector(".sidenav");
//   const footer = document.querySelector("footer");
//   const footerTop = footer.offsetTop;

//   window.addEventListener("scroll", function () {
//     const scrollY = window.scrollY;
//     const windowHeight = window.innerHeight;
//     const sidebarHeight = sidebar.clientHeight;

//     if (scrollY + windowHeight > footerTop) {
//       const diff = scrollY + windowHeight - footerTop;
//       sidebar.style.top = `${windowHeight - sidebarHeight - diff}px`;
//     } else {
//       sidebar.style.top = 0;
//     }
//   });
// });

/* Footer list toggle */
$(document).ready(function () {
  if ($(window).width() < 767.98) {
    $(".toggle-btn-1").click(function () {
      $(this).next(".dropdown-list").slideToggle(); // Toggle the list visibility
    });

    $(".toggle-btn-2").click(function () {
      $(this).next(".dropdown-list").slideToggle(); // Toggle the list visibility
    });

    $(".toggle-btn-3").click(function () {
      $(this).next(".dropdown-list").slideToggle(); // Toggle the list visibility
    });

    $(".toggle-btn-4").click(function () {
      $(this).next(".dropdown-list").slideToggle(); // Toggle the list visibility
    });
  }
});
