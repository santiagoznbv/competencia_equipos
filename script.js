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

function initFormValidation() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Resetear mensajes de error
        clearErrors();
        
        let isValid = true;
        
        // Validar nombre
        if (name === '') {
            showError('name', 'El nombre es requerido');
            isValid = false;
        }
        
        // Validar email
        if (email === '') {
            showError('email', 'El email es requerido');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Ingresa un email válido');
            isValid = false;
        }
        
        // Validar mensaje
        if (message === '') {
            showError('message', 'El mensaje es requerido');
            isValid = false;
        } else if (message.length < 10) {
            showError('message', 'El mensaje debe tener al menos 10 caracteres');
            isValid = false;
        }
        
        if (isValid) {
            // Simular envío exitoso
            showSuccess('¡Formulario enviado correctamente!');
            contactForm.reset();
        }
    });
}

// Función auxiliar para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para mostrar errores
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.8rem';
    errorDiv.style.marginTop = '5px';
    
    field.parentNode.appendChild(errorDiv);
    field.style.borderColor = '#e74c3c';
}

// Función para limpiar errores
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
    
    const fields = document.querySelectorAll('input, textarea');
    fields.forEach(field => {
        field.style.borderColor = '';
    });
}

// Función para mostrar éxito
function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    successDiv.style.backgroundColor = '#27ae60';
    successDiv.style.color = 'white';
    successDiv.style.padding = '15px';
    successDiv.style.borderRadius = '5px';
    successDiv.style.margin = '20px 0';
    successDiv.style.textAlign = 'center';
    
    const form = document.getElementById('contact-form');
    form.parentNode.insertBefore(successDiv, form);
    
    // Remover mensaje después de 3 segundos
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}
