// Cambiar sombra del menú al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Filtro de proyectos
function filterProjects(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Asignar active al botón clickeado
    if (event && event.target) {
        event.target.classList.add('active');
    }

    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
            card.style.display = 'none';
        }
    });
}

// Activar nodo de la línea del tiempo y cambiar la esfera principal
function selectNode(selectedElement) {
    const allNodes = document.querySelectorAll('.timeline-node');
    allNodes.forEach(node => node.classList.remove('active'));
    
    selectedElement.classList.add('active');

    const orb = document.querySelector('.fluid-orb');
    if (orb) {
        orb.classList.add('purple-active');
    }
}

// Interacción directa con la esfera principal
document.addEventListener('DOMContentLoaded', () => {
    const orb = document.querySelector('.fluid-orb');
    if (orb) {
        orb.addEventListener('click', () => {
            orb.classList.toggle('purple-active');
        });
    }
});