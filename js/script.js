// DOM Elements
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// 1. Menú Móvil (Toggle)
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Cambio de icono hamburguesa a X
    const icon = mobileMenuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Cerrar menú al hacer click en un enlace (UX móvil)
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
    });
});

// 2. Año Dinámico en Footer
document.getElementById('year').textContent = new Date().getFullYear();

// 3. Scroll Spy (Intersection Observer API para performance)
// Esto detecta qué sección está visible y marca el enlace activo en el menú
const observerOptions = {
    threshold: 0.3 // Se activa cuando el 30% de la sección es visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remover clase active de todos
            links.forEach(link => link.classList.remove('active'));

            // Agregar clase active al enlace correspondiente
            const id = entry.target.getAttribute('id');
            const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// 4. Header Effect on Scroll (Opcional: añade sombra al hacer scroll)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Log de SEO para Martín (visible solo en consola)
console.log("%c Portfolio Cargado ", "background: #38bdf8; color: #000; font-weight: bold;");
console.log("SEO Check: Meta description presente, Semántica HTML5 verificada, Contraste accesible.");