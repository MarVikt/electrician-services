const ourServices = () => {
  const servicesBlock = document.querySelector('.services-carousel');
  const items = document.querySelectorAll('.col-md-4');
  const arrowLeft = document.querySelector('.services-arrow .arrow-left');
  const arrowRight = document.querySelector('.services-arrow .arrow-right');
  let count = 3;


  items.forEach((item) => {
    item.style.display = "inline";
  });
  servicesBlock.style.widht = "2000px";
  servicesBlock.style.display = "block";
};

export default ourServices;