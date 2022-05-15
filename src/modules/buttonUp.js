import{animate} from './helpers';

const buttonUp = () => {
  const upBtn = document.querySelector('img.up');
  let upBtnIsDisplayed = false;
  
  upBtn.style.opacity = 0;
  upBtn.style.cursor = 'default';

 // @media only screen and (min-width: 992px)
  if (window.screen.availWidth > 991) {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 600) {
        if (!upBtnIsDisplayed) {
          upBtn.style.cursor = 'pointer';
          animate({
            duration: 500,
            timing(timeFraction) {
              return Math.pow(timeFraction, 2);
            },
            draw(progress) {
              upBtn.style.opacity = progress;
            }
          });
          upBtnIsDisplayed = true;
        }
      } else {
        if (upBtnIsDisplayed) {
          animate({
            duration: 500,
            timing(timeFraction) {
              return Math.pow(timeFraction, 2);
            },
            draw(progress) {
              upBtn.style.opacity = 1 - progress;
            }
          });
          upBtn.style.cursor = 'default';
          upBtnIsDisplayed = false;
        }
      }
    });
  
    upBtn.addEventListener('click', () => {
      if (upBtnIsDisplayed) {
        const currentScroll = document.documentElement.scrollTop;
        animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            document.documentElement.scrollTop = (1 - progress) * currentScroll;
          }
        });
      }
    });
  }
};

export default buttonUp;