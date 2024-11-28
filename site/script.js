// Fonction pour faire défiler la page vers une section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 60, // ajuster l'offset pour la navbar
        behavior: 'smooth',
    });
}

// Gestion du menu burger
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
});
