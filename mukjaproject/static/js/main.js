const togglebtn = document.querySelector('.mainbar__menubtn');
const menu = document.querySelector('.mainbar__menu');
const links = document.querySelector('.mainbar__links');


togglebtn.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    links.classList.toggle('active');
});

