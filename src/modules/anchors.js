const anchors = () => {
  const topMenu = document.querySelector('.top-menu');
  const headerWrapper = document.querySelector('.header-wrapper');

  topMenu.addEventListener('click', (e) => {
    if (e.target.matches('a[href*="#"]')) {
      e.preventDefault();
      const blockId = e.target.getAttribute('href').substr(1);

      window.scrollTo({
        top: document.getElementById(blockId).offsetTop - (headerWrapper ? headerWrapper.offsetHeight : 100),
        behavior: 'smooth'
      });
    }
  });
};

export default anchors;