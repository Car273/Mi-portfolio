/* ==========================================
   1. MENÚ MÓVIL Y NAVEGACIÓN
   ========================================== */
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenu && navMenu) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

/* ==========================================
   2. NUBE / MODAL TIPO ANUNCIO (PROYECTOS)
   ========================================== */

// Base de datos de proyectos
const datosProyectos = {
    deptos: {
        title: "Gestión de Departamentos",
        // 1. Imagen de referencia (reemplázala por tu captura real)
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop", 
        // 2. Breve descripción
        description: "Plataforma web para la gestión y presentación interactiva de propiedades y alquileres familiares.",
        // 3. Link directo al sitio
        link: "https://tu-sitio-de-departamentos.com", 
        // 4. Color característico (clase configurada en tu CSS)
        themeClass: "theme-deptos"
    }
};

// Función principal para abrir la ventanita
function abrirModalProyecto(idProyecto) {
    const proyecto = datosProyectos[idProyecto];
    if (!proyecto) return;

    // Cargar datos dentro de la nube
    const imgElem = document.getElementById('modal-img');
    const titleElem = document.getElementById('modal-title');
    const descElem = document.getElementById('modal-desc');
    const linkElem = document.getElementById('modal-link');
    const cardElem = document.getElementById('modal-card-content');
    const overlayElem = document.getElementById('project-modal');

    if (imgElem) imgElem.src = proyecto.image;
    if (titleElem) titleElem.textContent = proyecto.title;
    if (descElem) descElem.textContent = proyecto.description;
    if (linkElem) linkElem.href = proyecto.link;

    // Aplicar color característico e iluminar
    if (cardElem) cardElem.className = 'modal-card ' + proyecto.themeClass;
    if (overlayElem) overlayElem.classList.add('active');
}

// Funciones para cerrar
function cerrarModalDirecto() {
    const overlayElem = document.getElementById('project-modal');
    if (overlayElem) overlayElem.classList.remove('active');
}

function cerrarModalAfuera(event) {
    if (event.target.id === 'project-modal') {
        cerrarModalDirecto();
    }
}

// Base de datos de proyectos
const datosProyectos = {
    deptos: {
        title: "Departamentos Cortázar",
        // Reemplaza por la captura real de la plataforma o render del edificio
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop", 
        description: "Plataforma web interactiva desarrollada para la presentación, gestión visual y promoción del complejo de inmuebles familiares.",
        link: "https://github.com/tu-usuario/departamentos-cortazar", // O la URL desplegada final
        themeClass: "theme-deptos"
    }
};
