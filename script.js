// Copyright
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile Navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Navigation Smooth Scroll
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("nav-btn"))
      headerEl.classList.toggle("nav-open");
  });
});

// Back to top button
const toTop = document.querySelector(".to-top")

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 540) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active")
  }
})

// Carousel
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  autoplay: true,
  autoplayTimeout: 2000,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      },
      1400:{
          items:3
      }
  }
})