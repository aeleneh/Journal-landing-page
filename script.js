document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const authMenu = document.querySelector('.auth-button');
    
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        authMenu.classList.toggle('active');
    });
    
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !authMenu.contains(event.target) && authMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            authMenu.classList.remove('active');
        }
    });
    
    const authLinks = document.querySelectorAll('.auth-button li a');
    authLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            authMenu.classList.remove('active');
        });
    });
});