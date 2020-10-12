const mainbtn = document.querySelector('.mainbar__menubtn');
const mainmenu = document.querySelector('.mainbar__menu');
const mainlinks = document.querySelector('.mainbar__links');

const sortbtn = document.querySelector('.sectionbar__sortbtn');
const sortmenu = document.querySelector('.sectionbar__menu');


mainbtn.addEventListener('click', ()=> {
    mainmenu.classList.toggle('active');
    mainlinks.classList.toggle('active');
});

sortbtn.addEventListener('click', ()=> {
    sortmenu.classList.toggle('active');
});

