(()=>{"use strict";(()=>{const e=document.querySelector(".top-menu"),t=document.querySelector(".header-wrapper");e.addEventListener("click",(e=>{if(e.target.matches('a[href*="#"]')){e.preventDefault();const o=e.target.getAttribute("href").substr(1);window.scrollTo({top:document.getElementById(o).offsetTop-(t?t.offsetHeight:100),behavior:"smooth"})}}))})(),console.log("второй модуль")})();