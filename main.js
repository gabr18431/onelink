// handel scroll header 
window.onscroll = function() {
    if (window.scrollY > 100) {
        document.querySelector('header').classList.add('sticky');
    } else{
        document.querySelector('header').classList.remove('sticky');
    }
}


// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });

// handel Show Content 
let allTabs = document.querySelectorAll('.connections .tabs button');
function handelShowContent(btn) {
    allTabs.forEach(b => {
        if (b.title === btn.title) {
            b.classList.add('active');
        } else {
            b.classList.remove('active');
        }
    })
    if (btn.title === 'short-link') {
        document.querySelector('.landing-page-content').style.display = 'none';
        document.querySelector('.QR-code-content').style.display = 'none';
        document.querySelector('.short-link-content').style.display = 'block';
    } else if (btn.title === 'QR-code') {
        document.querySelector('.short-link-content').style.display = 'none';
        document.querySelector('.landing-page-content').style.display = 'none';
        document.querySelector('.QR-code-content').style.display = 'block';
    } else {
        document.querySelector('.short-link-content').style.display = 'none';
        document.querySelector('.QR-code-content').style.display = 'none';
        document.querySelector('.landing-page-content').style.display = 'block';
    }
}