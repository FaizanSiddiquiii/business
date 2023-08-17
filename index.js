// --------toggle icon navbar----------

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x')
    navbar.classList.toggle('active')
}

// typedjs
const typed = new Typed('.multiple-text', {
    strings: ['Consultants', 'Service Providers', 'One - Stop Solution'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

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


// scroll to top btn
const backToTop = document.querySelector("#backtotop")

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) {
        if (!backToTop.classList.contains("btnEntrance")) {
            backToTop.classList.remove("btnExit")
            backToTop.classList.add("btnEntrance")
            backToTop.style.display = "block";
        }
    }
    else {
        if (backToTop.classList.contains("btnEntrance")){
            backToTop.classList.add("btnEntrance")
            backToTop.classList.add("btnExit")
            setTimeout(function() {
                backToTop.style.display = "none";
            }, 250);
        }
    }
}

backToTop.addEventListener("click", backToTopp);

function backToTopp() {
    window.scrollTo(0, 0);
}