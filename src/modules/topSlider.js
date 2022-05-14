const topSlider = () => {
  const sliderBlock = document.querySelector('.top-slider');
  const slides = document.querySelectorAll('.top-slider .item');
  const timerPeriod = 3000;
  let dotsArea = document.querySelector('.top-slider .slick-dots');
  let dots = sliderBlock.querySelectorAll('.top-slider .dot');
  let currentSlide = 0;
  let interval;

  const createDots = () => {
    if (!dotsArea) {
      sliderBlock.insertAdjacentHTML('beforeend', `<ul class="slick-dots"></ul>`);
    }
    dotsArea = document.querySelector('.top-slider .slick-dots');
    slides.forEach((elem,index) => {
      const newDot = document.createElement('li');
      newDot.classList.add('dot');
      if (index === 0) {
        newDot.classList.add('slick-active');
      }
      dotsArea.append(newDot);
    });
    dots = sliderBlock.querySelectorAll('.dot');
  };

  const prevSlide = (elems,index,strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems,index,strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides,currentSlide,'top-slide-active');
    // prevSlide(dots,currentSlide,'dot-active');
    currentSlide ++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides,currentSlide,'top-slide-active');
    // nextSlide(dots,currentSlide,'dot-active');
  };

  const startSlider = () => {
    interval = setInterval(autoSlide,timerPeriod);
  };

  const stopSlider = () => {
    clearInterval(interval);
  };

  // sliderBlock.addEventListener('mouseenter', (e) => {
  //   if (e.target.matches('.portfolio-btn, .dot')) {
  //     stopSlider();
  //   }
  // },true);

  // sliderBlock.addEventListener('mouseleave', (e) => {
  //   if (e.target.matches('.portfolio-btn, .dot')) {
  //     startSlider();
  //   }
  // },true);

  // sliderBlock.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   if (!e.target.matches('.portfolio-btn, .dot')) {
  //     return;
  //   }
  //   prevSlide(sliders,currentSlide,'portfolio-item-active');
  //   prevSlide(dots,currentSlide,'dot-active');

  //   if (e.target.matches('#arrow-left')) {
  //     currentSlide --;
  //     currentSlide = currentSlide < 0 ? sliders.length - 1 : currentSlide;
  //   } else if (e.target.matches('#arrow-right')) {
  //     currentSlide ++;
  //     currentSlide = currentSlide >= sliders.length ? 0 : currentSlide;
  //   } else if (e.target.matches('.dot')) {
  //     dots.forEach((dot,index) => {
  //       if (dot === e.target) {
  //         currentSlide = index;
  //       }
  //     });
  //   }

  //   nextSlide(sliders,currentSlide,'portfolio-item-active');
  //   nextSlide(dots,currentSlide,'dot-active');
  // });

  createDots();
  startSlider();
};

export default topSlider;