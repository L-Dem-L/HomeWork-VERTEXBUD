document.addEventListener('DOMContentLoaded', nav);
function nav() {
    const BURGER = document.querySelector('.burger');
    const NAV = document.querySelector('.main-nav');
    let LIN = document.querySelectorAll('.nav-links a');
    BURGER.addEventListener('click', () => {
        LIN.forEach((hr)=>{
            hr.addEventListener('click', () => {
                NAV.classList.remove('show')
            });
        })
        NAV.classList.toggle('show')
    })
}