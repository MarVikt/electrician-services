import{animate} from './helpers';

const modal = (idModal) => {
  const modalForm = document.getElementById(idModal);
  const modalOverlay = document.querySelector('.modal-overlay');
  const form = document.querySelector(`form[name="form-${idModal}"]`);

  const showModal = () => {
    modalForm.style.display = "block";
    modalOverlay.style.display = "block";
    document.body.style.overflow = "hidden";
    animate({
      duration: 500,
      timing(timeFraction) {
        return Math.pow(timeFraction, 2);
      },
      draw(progress) {
        modalForm.style.opacity = progress;
      }
    });
  };

  showModal();

  document.body.addEventListener('click', (e) => {
    if (e.target.closest('.modal-overlay') || e.target.closest('.modal-close')) {
      modalForm.style.display = "none";
      modalOverlay.style.display = "none";
      document.body.style.overflow = "auto";
    } else if (e.target.matches('input[type="submit"]')) {
      // console.log('отправим форму');
    }
  });
  
};
export default modal;