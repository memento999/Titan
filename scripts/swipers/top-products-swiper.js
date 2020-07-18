var swiper = new Swiper(".top-products__swiper", {
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    275: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 4,
    },
    1366: {
      slidesPerView: 5,
    },
  },
});
