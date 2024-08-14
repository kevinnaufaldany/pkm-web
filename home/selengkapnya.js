//SWIPER

const swiperFavorites = new Swiper('#artikel .slide-content-swiper', {
  loop: true,
  grabCursor: true,
  slidesPerView: 3,
  slidesPerView: 'auto',
  centeredSlides: 'auto',
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

//NAV MENU
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

