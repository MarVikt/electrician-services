// анимация
const animate = ({timing, draw, duration}) =>{
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
};

// проверка полей формы (dataForm - это Object, а не FormData)
const checkValueForm = (dataForm) => {
  // const isEmail = /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/gi;
  const isEmail = /[\-\.\w]+@([\w]+\.)+[\w]+/gi;
  let isValid = true;
  let name = '';
  let mail = '';
  let phone = '';
  let message = '';

  for (let key in dataForm) {
    if (/name/gi.test(key)) {
      name = dataForm[key];
    }
    if (/mail/gi.test(key)) {
      mail = dataForm[key];
    }
    if (/phone/gi.test(key)) {
      phone = dataForm[key];
    }
    if (/message/gi.test(key)) {
      message = dataForm[key];
    }
  }

  if (/[^а-я\s]+/gi.test(name) || name.replace(/[\s]/g,"") == '') {
    alert('введите имя кириллицей, можно использовать пробел');
    isValid = false;
  }

  if (!isEmail.test(mail)) {
   alert('введите правильный email');
   isValid = false;
  }

  if (/[^\d\(\)\-\+]+/gi.test(phone)) {
    alert('введите телефон цифрами, можно использовать круглые скобки, плюс и тире');
    isValid = false;
  }

  if (message !== '') {
    if (/[^а-я\d\s\-\.\,\!\?\:\;\(\)\"]+/gi.test(message)) {
      alert('введите сообщение кириллицей, можно использовать цифры, пробел и знаки препинания');
      isValid = false;
    }
  }

  return isValid;
};

export{animate, checkValueForm};