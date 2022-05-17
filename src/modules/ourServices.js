import Swiper, { Navigation, Pagination } from 'swiper';

const ourServices = () => {
  const servicesBlock = document.querySelector('.services-carousel');
  const items = document.querySelectorAll('.col-md-4');
  const arrowBlock = document.querySelector('.services-arrow');

  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
  
    // Navigation arrows
    navigation: {
      nextEl: '.arrow-right',
      prevEl: '.arrow-left',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  
  });

  // document.body.addEventListener('click', (e) => {
  //   console.log(e.target);
  // });
};

export default ourServices;