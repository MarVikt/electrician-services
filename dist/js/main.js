(()=>{"use strict";document.querySelector(".header").addEventListener("click",(e=>{if(e.target.closest(".top-menu")){if(e.target.matches("a")){e.preventDefault();const t=e.target.getAttribute("href").substr(1),o=document.querySelector(".header-wrapper");window.scrollTo({top:document.getElementById(t).offsetTop-(o?o.offsetHeight:100),behavior:"smooth"})}}else e.target.closest(".callback-btn")&&(e=>{const t=document.getElementById(e),o=document.querySelector(".modal-overlay");document.querySelector(`form[name="form-${e}"]`),t.style.display="block",o.style.display="block",document.body.style.overflow="hidden",(({timing:e,draw:t,duration:o})=>{let r=performance.now();requestAnimationFrame((function l(c){let a=(c-r)/o;a>1&&(a=1);let s=e(a);t(s),a<1&&requestAnimationFrame(l)}))})({duration:500,timing:e=>Math.pow(e,2),draw(e){t.style.opacity=e}}),document.body.addEventListener("click",(e=>{e.target.closest(".modal-overlay")||e.target.closest(".modal-close")?(t.style.display="none",o.style.display="none",document.body.style.overflow="auto"):e.target.matches('input[type="submit"]')}))})("callback")})),(()=>{const e=document.querySelector(".services-carousel"),t=document.querySelectorAll(".col-md-4");document.querySelector(".services-arrow .arrow-left"),document.querySelector(".services-arrow .arrow-right"),t.forEach((e=>{e.style.display="inline"})),e.style.widht="2000px",e.style.display="block"})()})();