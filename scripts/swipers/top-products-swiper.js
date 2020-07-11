var swiper = new Swiper(".top-products__swiper", {
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    375: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    700: {
      slidesPerView: 4,
    },
    900: {
      slidesPerView: 5,
    },
  },
});
