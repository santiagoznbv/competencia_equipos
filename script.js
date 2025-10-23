console.log('Script.js cargado correctamente');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM completamente cargado');
    
    initHeaderColorChange();
    initInteractiveButton();
    initFormValidation();
});

function initHeaderColorChange() {
    const header = document.querySelector('header');
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.backgroundColor = '#2c3e50';
            header.style.transition = 'background-color 0.3s ease';
        } else {
            header.style.backgroundColor = '#34495e';
        }
    });
}