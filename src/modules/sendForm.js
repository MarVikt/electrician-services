import{checkValueForm} from './helpers';

const sendForm = (formId, formBody) => {
  const dataBaseUrl = 'https://jsonplaceholder.typicode.com/posts';
  const form = document.getElementById(formId);

  const sendData = (data) => {
    return fetch(dataBaseUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${ response.status }`);
      }
      return response.json();
    });
  };

  const deleteBlock = (block,msec) => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        if (block) {
          block.remove();
        }
      }, msec);
    });
  };

  try {
    if (!form) {
      throw new Error (`Форма ${formId} отсутствует на странице`);
    }

    let statusBlock = document.getElementById(`status-${formId}`);
    if (!statusBlock) {
      statusBlock = document.createElement('h3');
      statusBlock.id = `status-${formId}`;
      form.append(statusBlock);
    }
    statusBlock.textContent = 'Загрузка...';

    if (checkValueForm(formBody)) {
      statusBlock.textContent = 'Отправка...';
      sendData(formBody)
        .then(data => {
          statusBlock.textContent = 'Спасибо! Наш менеджер свяжется с Вами!';
          deleteBlock(statusBlock,5000);
          return true;
          // console.log(data);
        })
        .catch(error => {
          console.log(error.message);
          statusBlock.textContent = 'Ошибка отправки';
        });
    } else {
      statusBlock.textContent = '';
      // alert('данные формы не валидны');
    }
  } catch (error) {
    console.log(error.message);
  } 
  return false;
};

export {sendForm};