const accordianBtns = document.querySelectorAll('.accordian');
const navBtns = document.querySelectorAll('.main-nav a');

navBtns.forEach(navBtn => {
    navBtn.addEventListener('click', ev => {
        ev.preventDefault();
        let targetElem = ev.target.getAttribute('href');      
        let accordian = document.querySelector(targetElem);
        toggle(ev.target, accordian);
    });
});

accordianBtns.forEach(accordianBtn => {
    accordianBtn.addEventListener('click', ev => {
        let targetElem = ev.target.getAttribute('id');
        let navBtn = document.querySelector(`a[href='#${targetElem}'`);
        toggle(navBtn, ev.target);
    });
});

function toggle(btn, accordian) {
    navBtns.forEach(navBtn => {
        if (navBtn.classList.contains('active')) {
            navBtn.classList.remove('active');
        }
    });

    btn.classList.add('active');

    accordianBtns.forEach(accordianBtn => {
        if (accordianBtn.classList.contains('open')) {
            accordianBtn.classList.remove('open');
            accordianBtn.nextElementSibling.classList.add('hidden');
        }
    });

    accordian.classList.add('open');
    accordian.nextElementSibling.classList.remove('hidden');

    setTimeout(() => {
        let top = accordian.offsetTop;
        window.scroll({
            top: top,
            behaviour: 'smooth'
        });
    },100);
}