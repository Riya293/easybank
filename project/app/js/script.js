const btnhamburger=document.querySelector('#btnhamburger');
const header=document.querySelector('.header');
const overlay=document.querySelector('.overlay');


btnhamburger.addEventListener('click', function () {
    console.log('open hamburger');

    if (header.classList.contains('open')) {//close manu
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');


    }
    else {//open menu
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');


    }
});
