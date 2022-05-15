const accordeon = () => {
  const accord = document.querySelector('.accordeon');
  const accBtns = accord.querySelectorAll('.element');

  accord.addEventListener('click', (e) => {
    if (e.target.matches('.title')) {
      accBtns.forEach((btn) => {
        let elemContent = btn.querySelector('.element-content');
        if (e.target.parentElement === btn) {
          btn.classList.add('active');
          elemContent.style.display = 'block';
        } else {
          btn.classList.remove('active');
          elemContent.style.display = 'none';
        }
      });
    }
  });
};

export default accordeon;