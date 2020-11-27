window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    // const opacity = document.querySelector('.box1')
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * -0.7 + 'px)';
    // box1.style.transform = 'opacity(100%)';
});

const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navmain = document.querySelector('nav');

    burger.addEventListener('click',()=>{
            nav.classList.toggle('nav-active');
            navmain.classList.toggle('nav-active');

            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation=''
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
                }
            });

            burger.classList.toggle('toggle');

        });
    }

navSlide();

// window.addEventListener('scroll', function() {
//     const boxtext = document.querySelector('.box2');
//     let scrollPosition = window.pageXOffset;

//     boxtext.style.transform = 'translateX(' + (scrollPosition + -0.7) + '%)';

// });