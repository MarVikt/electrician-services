import{animate, checkValueForm} from './helpers';
import {sendForm} from './sendForm';

const modal = (idModal, applicationInput='') => {
  const modalForm = document.getElementById(idModal);
  const modalOverlay = document.querySelector('.modal-overlay');

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

  const closeModal = (msec) => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        if (modalForm.style.display === "block") {
          modalForm.style.display = "none";
          modalOverlay.style.display = "none";
          document.body.style.overflow = "auto";
          document.body.removeEventListener('click', modalProcessing);
        }
      }, msec);
    });
  };

  const modalProcessing = (e) => {
    e.preventDefault();
    if (e.target.closest('.modal-overlay') || e.target.closest('.modal-close')) {
      closeModal(0);
    } else if (e.target.matches('input[type="submit"]')) {
      const formInputs = modalForm.querySelectorAll('input,textarea');
      const formData = {};
      formInputs.forEach(elem => {
        if (elem.getAttribute('name') !== null) {
          formData[elem.getAttribute('name')] = elem.value.trim();
        }
      });

      if (checkValueForm(formData)) {
        sendForm(idModal, formData);
        // очистим поля формы
        formInputs.forEach(elem => {
          if (elem.getAttribute('name') !== null && elem.getAttribute('name') !== 'service_name') {
          elem.value = '';
          }
        });
        closeModal(5000);
      }
    }
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

  if (idModal === 'application') {
    modalForm.querySelector('input[name="service_name"]').value = applicationInput;
  }

  showModal();
  document.body.addEventListener('click', modalProcessing);
  
};
export default modal;