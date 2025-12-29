// --- ANIMACIÓN DE SCROLL REVEAL ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// --- MENÚ HAMBURGUESA (MÓVIL) ---
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

// Función para alternar el menú
const toggleMenu = () => {
    // 1. Abrir/Cerrar menú
    nav.classList.toggle('nav-active');

    // 2. Animar Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''; // Resetear animación si cerramos
        } else {
            // Animar si abrimos
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // 3. Animar Icono Burger
    burger.classList.toggle('toggle');
}

// Evento al hacer click en la hamburguesa
burger.addEventListener('click', toggleMenu);

// NUEVO: Evento para cerrar menú al hacer click en un enlace
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        // Solo cerramos si el menú está abierto
        if (nav.classList.contains('nav-active')) {
            toggleMenu();
        }
    });
});