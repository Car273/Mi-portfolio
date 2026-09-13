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

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

/* ==========================================
   2. FILTRADO DE PROYECTOS
   ========================================== */
function filterProjects(category, event) {
    // 1. Cambiar estado visual de los botones
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Marcar como activo el botón presionado si proviene de un evento
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    // 2. Mostrar u ocultar tarjetas según la categoría
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

/* ==========================================
   3. BASE DE DATOS DE PROYECTOS
   ========================================== */
const proyectosWeb = {
    deptos: {
        tipo: "simple",
        title: "Departamentos Cortázar",
        image: "img/favicon.png",
        description: "Confort, seguridad y hogar. Plataforma web interactiva desarrollada para la presentación, administración y gestión visual de la propiedad familiar.",
        link: "https://car273.github.io/departamentos-cortazar/", 
        themeClass: "theme-deptos"
    },
    modelado3d: {
        tipo: "carrusel",
        title: "Galería de Modelados 3D",
        themeClass: "theme-3d",
        modelos: [
            {
                title: "Escena & Entorno Virtual",
                image: "img/render_oxxo.png",
                description: "Modelado tridimensional y composición de iluminación para entorno comercial virtual.",
                link: "#"
            },
            {
                title: "Objeto Complejo 3D",
                image: "img/render_modelo2.png",
                description: "Estructuración de geometría y sombreado en Blender.",
                link: "#"
            },
            {
                title: "Escena Interactiva Three.js",
                image: "img/render_modelo3.png",
                description: "Renderizado y manipulación de cámaras en tiempo real sobre canvas WebGL.",
                link: "#"
            }
        ]
    },
    galeriaFotos: {
        tipo: "carrusel",
        title: "Galería Fotográfica",
        themeClass: "theme-5d",
        modelos: [
            {
                title: "Composición Urbana",
                image: "img/foto1.jpeg",
                description: "Exploración de encuadres, geometría urbana y perspectiva.",
                link: "#"
            },
            {
                title: "Contraste & Luz",
                image: "img/foto2.jpeg",
                description: "Captura enfocada en el tratamiento del color y sombras.",
                link: "#"
            },
            {
                title: "Detalle & Textura",
                image: "img/foto3.jpeg",
                description: "Enfoque macro y edición digital de detalle.",
                link: "#"
            },
            {
                title: "Detalle & Textura",
                image: "img/foto4.jpeg",
                description: "Enfoque macro y edición digital de detalle.",
                link: "#"

            },
            {
                title: "Detalle & Textura",
                image: "img/foto5.jpeg",
                description: "Enfoque macro y edición digital de detalle.",
                link: "#"

            },

        ]
    }
};

/* ==========================================
   4. LÓGICA DEL MODAL Y CARRUSEL
   ========================================== */
let proyectoCarruselActual = 'modelado3d';
let modeloIndexActual = 0;

function abrirAnuncioProyecto(id) {
    const info = proyectosWeb[id];
    if (!info) return;

    const tarjeta = document.getElementById('modal-card-content');
    const controlesCarrusel = document.getElementById('modal-carousel-controls');
    
    tarjeta.className = 'modal-card ' + info.themeClass;

    if (info.tipo === "carrusel") {
        proyectoCarruselActual = id;
        modeloIndexActual = 0;
        controlesCarrusel.style.display = 'flex';
        cargarModeloEnModal(info.modelos[modeloIndexActual]);
    } else {
        controlesCarrusel.style.display = 'none';
        document.getElementById('modal-img').src = info.image;
        document.getElementById('modal-title').textContent = info.title;
        document.getElementById('modal-desc').textContent = info.description;
        document.getElementById('modal-link').href = info.link;
    }

    document.getElementById('anuncio-modal').classList.add('active');
}

function cargarModeloEnModal(item) {
    document.getElementById('modal-img').src = item.image;
    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-desc').textContent = item.description;
    document.getElementById('modal-link').href = item.link;
}

function cambiarModelo(direccion) {
    const lista = proyectosWeb[proyectoCarruselActual].modelos;
    modeloIndexActual += direccion;

    if (modeloIndexActual < 0) {
        modeloIndexActual = lista.length - 1;
    } else if (modeloIndexActual >= lista.length) {
        modeloIndexActual = 0;
    }

    cargarModeloEnModal(lista[modeloIndexActual]);
}

/* ==========================================
   5. CIERRE DEL MODAL
   ========================================== */
function cerrarAnuncioDirecto() {
    const modal = document.getElementById('anuncio-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function cerrarAnuncioAfuera(event) {
    if (event.target.id === 'anuncio-modal') {
        cerrarAnuncioDirecto();
    }
}

// Cerrar modal con la tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        cerrarAnuncioDirecto();
    }
});