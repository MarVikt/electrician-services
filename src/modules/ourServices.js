import Swiper, { Navigation, Keyboard } from "swiper";
import modal from "./modal";

const ourServices = () => {
  const servicesBlock = document.querySelector('.services-carousel');

  const swiper = new Swiper(".swiper", {

    // configure Swiper to use modules
    modules: [Navigation, Keyboard],

    // Optional parameters
    direction: "horizontal",
    loop: true,

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      // when window width is >= 550px
      550: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  servicesBlock.addEventListener('click', (e) => {
    if (e.target.matches('a[href="#application"]')) {
      modal('application', e.target.dataset.application);
    }
  });
};

export default ourServices;
