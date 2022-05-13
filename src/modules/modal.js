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

  if (!modalForm.classList.contains('modal-callback')) {
    modalForm.classList.add('modal-callback');
    modalForm.insertAdjacentHTML('afterbegin', `
    <div class="modal-close">
			<img src="images/close_icon_green.svg" alt="modal-close">
		</div>
    `);
  }

  if (idModal === 'feedback') {
    modalForm.style.top = '5%';
  }

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