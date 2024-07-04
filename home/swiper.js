var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 25,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });