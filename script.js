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

// Menú Hamburguesa en versión móvil
const mobileMenuBtn = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar el menú automáticamente al hacer clic en cualquier opción
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Base de datos de información para el Modal/Anuncio
const projectsData = {
    deptos: {
        title: "Gestión de Departamentos",
        // 1. Imagen de referencia (reemplaza por la URL o ruta de tu captura)
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop", 
        // 2. Breve descripción
        description: "Plataforma web diseñada para la administración y publicación de departamentos en renta. Facilita la visualización de espacios, contacto rápido y control de disponibilidad.",
        // 3. Link directo al sitio web del departamento
        link: "https://tu-sitio-de-departamentos.com", 
        // 4. Color característico (clase CSS)
        themeClass: "theme-deptos"
    }
};

function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    const modal = document.getElementById('project-modal');
    const modalCard = document.getElementById('modal-card-content');
    
    // Cargar datos en el anuncio flotante
    document.getElementById('modal-img').src = data.image;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-desc').textContent = data.description;
    document.getElementById('modal-link').href = data.link;

    // Aplicar color característico
    modalCard.className = 'modal-card ' + data.themeClass;

    // Mostrar modal
    modal.classList.add('active');
}

function closeProjectModalDirect() {
    document.getElementById('project-modal').classList.remove('active');
}

function closeProjectModal(event) {
    if (event.target.id === 'project-modal') {
        closeProjectModalDirect();
    }
}