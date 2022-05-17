const ourServices = () => {
  const servicesBlock = document.querySelector('.services-carousel');
  const items = document.querySelectorAll('.col-md-4');
  const arrowBlock = document.querySelector('.services-arrow');
  const topPositionBlock = servicesBlock.offsetTop;
  const leftPositionBlock = servicesBlock.offsetLeft;
  let count = 3;
  let itemWidht = 300; // ширина элемента
  let widthBlock = servicesBlock.offsetWidth;
  let prevItemLeftPosition = leftPositionBlock;
  let position = 0; // положение ленты прокрутки

  // console.dir(servicesBlock);
  
  items.forEach((item,index) => {
    itemWidht = item.offsetWidth;
    if (index === 0) {
      servicesBlock.style.height = `${item.offsetHeight}px`;
    }
    if (item.offsetTop > topPositionBlock) {
      item.style.top = `${topPositionBlock - item.offsetTop}px`;
      item.style.left = `${prevItemLeftPosition + itemWidht - leftPositionBlock}px`;
    }
    prevItemLeftPosition = item.offsetLeft;
  //     console.dir(item);
  // console.log(prevItemLeftPosition);
  });
  arrowBlock.style.width = `${widthBlock}px`;

  arrowBlock.addEventListener('click', (e) => {
    if (e.target.matches('.arrow-left')) {
      position += itemWidht * count;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0);
      items.forEach(item => {
        item.style.left = `${position}px`;
      });
      // servicesBlock.style.left = position + 'px';
    } else if (e.target.matches('.arrow-right')) {
      position -= itemWidht * count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -itemWidht * (items.length - count));
      items.forEach(item => {
        item.style.left = position + 'px';
      });
      // servicesBlock.style.left = position + 'px';
    }
  });
};

export default ourServices;