import modal from "./modal";

const headerAnchors = () => {
  const header = document.querySelector('.header');

  header.addEventListener('click', (e) => {
    if (e.target.closest('.top-menu')) {
      if (e.target.matches('a')) {
        e.preventDefault();
        const blockId = e.target.getAttribute('href').substr(1);
        const headerWrapper = document.querySelector('.header-wrapper');
  
        window.scrollTo({
          top: document.getElementById(blockId).offsetTop - (headerWrapper ? headerWrapper.offsetHeight : 100),
          behavior: 'smooth'
        });
      }
    } else if (e.target.closest('.callback-btn')) {
      modal('callback');
    }
  });
};

export default headerAnchors;