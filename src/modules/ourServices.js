const ourServices = () => {
  const servicesBlock = document.querySelector('.services-carousel');
  const items = document.querySelectorAll('.col-md-4');
  const arrowLeft = document.querySelector('.services-arrow .arrow-left');
  const arrowRight = document.querySelector('.services-arrow .arrow-right');
  let count = 3;
  let itemWidht = 300; // ширина элемента
  let position = 0; // положение ленты прокрутки

  items.forEach((item) => {
    item.style.display = "inline";
    itemWidht = item.clientWidth;
  });
  servicesBlock.style.widht = "2000px";
  servicesBlock.style.display = "inline-block";

  arrowLeft.addEventListener('click', () => {
    position += itemWidht * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0);
    servicesBlock.style.marginLeft = position + 'px';
  });

  arrowRight.addEventListener('click', () => {
    position -= itemWidht * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -itemWidht * (items.length - count));
    servicesBlock.style.marginLeft = position + 'px';
  });
};

export default ourServices;