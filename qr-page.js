// handel scroll header 
window.onscroll = function() {
    if (window.scrollY > 100) {
        document.querySelector('header').classList.add('sticky');
    } else{
        document.querySelector('header').classList.remove('sticky');
    }
}

// swiper 
var swiper_ = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true
    },
    keyboard: {
        enabled: true
    },
    mousewheel: {
        thresholdDelta: 70
    },
    spaceBetween: 60,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});