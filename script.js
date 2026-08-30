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

// Datos que aparecerán dentro de la nube / anuncio
const proyectosWeb = {
    deptos: {
        title: "Departamentos Cortázar",
        // 1. Imagen de referencia (pon aquí la ruta o URL de la captura real)
        image: "img/favicon.png",
        // 2. Breve descripción
        description: "Plataforma web diseñada para la administración, gestión y presentación interactiva del complejo de departamentos familiares.",
        // 3. Link directo al proyecto
        link: "https://car273.github.io/departamentos-cortazar/", 
        // 4. Color característico (definido en CSS)
        themeClass: "theme-deptos"
    }
};

// Abrir la nube/anuncio
function abrirAnuncioProyecto(id) {
    const info = proyectosWeb[id];
    if (!info) return;

    document.getElementById('modal-img').src = info.image;
    document.getElementById('modal-title').textContent = info.title;
    document.getElementById('modal-desc').textContent = info.description;
    document.getElementById('modal-link').href = info.link;

    const tarjeta = document.getElementById('modal-card-content');
    tarjeta.className = 'modal-card ' + info.themeClass;

    document.getElementById('anuncio-modal').classList.add('active');
}

// Cerrar la nube/anuncio
function cerrarAnuncioDirecto() {
    document.getElementById('anuncio-modal').classList.remove('active');
}

function cerrarAnuncioAfuera(event) {
    if (event.target.id === 'anuncio-modal') {
        cerrarAnuncioDirecto();
    }
}