// This script adds interactivity and smooth scrolling

document.addEventListener('DOMContentLoaded', () => {

    
    const navLinks = document.querySelectorAll('.nav-links a');
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {

        navLinksContainer.classList.toggle('active');
    });

    navLinks.forEach(link => {
    
        link.addEventListener('click', function(e) {
            e.preventDefault();

    
            const targetId = this.getAttribute('href');
            
    
            const targetSection = document.querySelector(targetId);

            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }

            if (navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
            }
        });
    });
});
