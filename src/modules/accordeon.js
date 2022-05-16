const accordeon = () => {
  const accord = document.querySelector('.accordeon');
  const accBtns = accord.querySelectorAll('.element');

  accord.addEventListener('click', (e) => {
    if (e.target.matches('.title')) {
      accBtns.forEach((btn) => {
        let elemContent = btn.querySelector('.element-content');
        if (e.target.parentElement === btn) {
          btn.classList.toggle('active');
        } else {
          btn.classList.remove('active');
        }
        if (btn.classList.contains('active')) {
          elemContent.style.display = 'block';
        } else {
          elemContent.style.display = 'none';
        }
      });
    }
  });
};

export default accordeon;