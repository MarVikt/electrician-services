const topSlider = () => {
  const sliderBlock = document.querySelector('.top-slider');
  const slides = sliderBlock.querySelectorAll('.item');
  const textSlides = sliderBlock.querySelectorAll('.table');
  const timerPeriod = 5000;
  let dotsArea = sliderBlock.querySelector('.slick-dots');
  let dots = sliderBlock.querySelectorAll('.dot');
  let currentSlide = 0;
  let interval;

  const createDots = () => {
    if (!dotsArea) {
      sliderBlock.insertAdjacentHTML('beforeend', `<ul class="slick-dots"></ul>`);
    }
    dotsArea = sliderBlock.querySelector('.slick-dots');
    slides.forEach((elem,index) => {
      const newDot = document.createElement('li');
      newDot.classList.add('dot');
      newDot.style.zIndex = '20';
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
    prevSlide(textSlides,currentSlide,'active');
    prevSlide(dots,currentSlide,'slick-active');
    currentSlide ++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides,currentSlide,'top-slide-active');
    nextSlide(textSlides,currentSlide,'active');
    nextSlide(dots,currentSlide,'slick-active');
  };

  const startSlider = () => {
    interval = setInterval(autoSlide,timerPeriod);
  };

  const stopSlider = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener('mouseenter', (e) => {
    if (e.target.matches('.dot')) {
      stopSlider();
    }
  },true);

  sliderBlock.addEventListener('mouseleave', (e) => {
    if (e.target.matches('.dot')) {
      startSlider();
    }
  },true);

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();
    if (!e.target.matches('.dot')) {
      return;
    }
    prevSlide(slides,currentSlide,'top-slide-active');
    prevSlide(textSlides,currentSlide,'active');
    prevSlide(dots,currentSlide,'slick-active');

    if (e.target.matches('.dot')) {
      dots.forEach((dot,index) => {
        if (dot === e.target) {
          currentSlide = index;
        }
      });
    }

    nextSlide(slides,currentSlide,'top-slide-active');
    nextSlide(textSlides,currentSlide,'active');
    nextSlide(dots,currentSlide,'slick-active');
  });

  createDots();
  startSlider();
};

export default topSlider;