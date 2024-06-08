const menuBtn = document.querySelector(".menu-btn");
const menuMobail = document.querySelector(".menu-mobail");

menuBtn.addEventListener("click", () => {
menuMobail.classList.toggle("menu--open");
});

const swiper = new Swiper(".swiper", {
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
  });