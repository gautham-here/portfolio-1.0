// Smooth scrolling for section navigation
const scrollToSection = (sectionId) => {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
};

// Button click event for the arrow button to navigate to the journey section
document.getElementById('arrow-btn').addEventListener('click', () => {
    scrollToSection('#journey');
});

// Dynamically alternate card positions in the journey section
const cards = document.querySelectorAll('.journey-card');
cards.forEach((card, index) => {
    if (index % 2 === 0) {
        card.classList.add('left-card');
    } else {
        card.classList.add('right-card');
    }
});
