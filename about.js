// --------toggle icon navbar----------

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x')
    navbar.classList.toggle('active')
}

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.homecontent, .heading', { origin: 'left' });
ScrollReveal().reveal('.home-img, .services-container, .project-content, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.homecontent h1, .about-img, .contact p', { origin: 'left' });
ScrollReveal().reveal('.homecontent p, .about-content', { origin: 'right' });