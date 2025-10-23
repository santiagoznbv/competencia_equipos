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

function initInteractiveButton() {
    const interactiveBtn = document.getElementById('interactive-btn');
    if (!interactiveBtn) return;
    
    let isToggled = false;
    
    interactiveBtn.addEventListener('click', function() {
        isToggled = !isToggled;
        
        if (isToggled) {
            this.textContent = '¡Activado! 🎉';
            this.style.backgroundColor = '#27ae60';
            this.style.transform = 'scale(1.05)';
        } else {
            this.textContent = 'Click Me!';
            this.style.backgroundColor = '#3498db';
            this.style.transform = 'scale(1)';
        }
        
        this.style.transition = 'all 0.3s ease';
    });
}

