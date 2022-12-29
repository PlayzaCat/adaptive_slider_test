



var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 

// Readmore block



let content = document.querySelector(".logo-block")
let show = document.querySelector('.readmore__open');
let hide = document.querySelector('.readmore__close');

hide.addEventListener("click", () => {
   content.style.height = '180px';
})

show.addEventListener("click", () => {
   content.style.height = 'auto';
})



const menu = document.querySelector('.readmore');
const open = document.querySelector('.readmore__open');
const close = document.querySelector('.readmore__close');

close.addEventListener('click', () => {
    menu.classList.remove('readmore__open');
  });


open.addEventListener('click', () => {
  menu.classList.add('readmore__open');
});





