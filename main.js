// handel scroll header 
window.onscroll = function() {
    if (window.scrollY > 100) {
        document.querySelector('header').classList.add('sticky');
    } else{
        document.querySelector('header').classList.remove('sticky');
    }
}