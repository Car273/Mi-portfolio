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
   2. BASE DE DATOS DE PROYECTOS
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
        // Aquí agregas los modelos 3D que has realizado
        modelos: [
            {
                title: "Escena & Entorno Virtual",
                image: "img/render_oxxo.png", // Nombre de tu primer render
                description: "Modelado tridimensional y composición de iluminación para entorno comercial virtual.",
                link: "#"
            },
            {
                title: "Objeto Complejo 3D",
                image: "img/render_modelo2.png", // Nombre de tu segundo render
                description: "Estructuración de geometría y sombreado en Blender.",
                link: "#"
            },
            {
                title: "Escena Interactiva Three.js",
                image: "img/render_modelo3.png", // Nombre de tu tercer render
                description: "Renderizado y manipulación de cámaras en tiempo real sobre canvas WebGL.",
                link: "#"
            }
        ]
    }
};

/* ==========================================
   3. LÓGICA DEL CARRUSEL Y MODAL
   ========================================== */
let modeloIndexActual = 0;

function abrirAnuncioProyecto(id) {
    const info = proyectosWeb[id];
    if (!info) return;

    const tarjeta = document.getElementById('modal-card-content');
    const controlesCarrusel = document.getElementById('modal-carousel-controls');
    tarjeta.className = 'modal-card ' + info.themeClass;

    if (info.tipo === "carrusel") {
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

function cargarModeloEnModal(modelo) {
    document.getElementById('modal-img').src = modelo.image;
    document.getElementById('modal-title').textContent = modelo.title;
    document.getElementById('modal-desc').textContent = modelo.description;
    document.getElementById('modal-link').href = modelo.link;
}

function cambiarModelo(direccion) {
    const lista = proyectosWeb.modelado3d.modelos;
    modeloIndexActual += direccion;

    if (modeloIndexActual < 0) {
        modeloIndexActual = lista.length - 1;
    } else if (modeloIndexActual >= lista.length) {
        modeloIndexActual = 0;
    }

    cargarModeloEnModal(lista[modeloIndexActual]);
}

function cerrarAnuncioDirecto() {
    document.getElementById('anuncio-modal').classList.remove('active');
}

function cerrarAnuncioAfuera(event) {
    if (event.target.id === 'anuncio-modal') {
        cerrarAnuncioDirecto();
    }
}