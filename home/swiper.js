//SWIPER

const swiperFavorites = new Swiper('.slide-content-swiper', {
  loop: true,
  grabCursor: true,
  slidesPerView: 3,
  slidesPerView: 'auto',
  centeredSlides: 'auto',
  spaceBetween: 50,
  pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
})

//READ MORE
let more = document.querySelectorAll(".more");
for (let i = 0; i < more.length; i++) {
  more[i].addEventListener("click", function () {
    more[i].parentNode.classList.toggle("active");
  });
}
