import modal from "./modal";

const buttonServices = () => {
  const servicesBtn = document.querySelector('.button-services');

  servicesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal('feedback');
  });
};

export default buttonServices;