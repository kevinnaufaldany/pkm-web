//SWIPER

const swiperFavorites = new Swiper('.slide-content-swiper', {
  loop: true,
  grabCursor: true,
  slidesPerView: 3,
  // slidesPerView: 'auto',
  centeredSlides: 'auto',
  spaceBetween: 50,
  // pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
})

// var swiper = new Swiper(".slide-content-swiper", {
//   slidesPerView: 3,
//   spaceBetween: 50,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

//.slide-content-swiper
//READ MORE
let more = document.querySelectorAll(".more");
for (let i = 0; i < more.length; i++) {
  more[i].addEventListener("click", function () {
    more[i].parentNode.classList.toggle("active");
  });
}
