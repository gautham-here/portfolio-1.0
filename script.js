// Smooth scrolling for section navigation
document.querySelectorAll('a[href^="#"], #arrow-btn').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});
