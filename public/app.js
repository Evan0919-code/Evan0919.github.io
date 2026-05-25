// ============================================
// DATOS DE EJEMPLO
// ============================================

function getDataCursos() {
    return [
        {
            id: 1,
            nombre: "Yoga para Principiantes",
            descripcion: "Aprende los fundamentos del yoga y mejora tu flexibilidad",
            requisitos: "Ninguno",
            costo: 150
        },
        {
            id: 2,
            nombre: "Natación Básica",
            descripcion: "Curso para aprender a nadar desde cero",
            requisitos: "Edad mínima: 5 años",
            costo: 200
        },
        {
            id: 3,
            nombre: "Fitness Intenso",
            descripcion: "Entrena tu cuerpo con ejercicios de alta intensidad",
            requisitos: "Buena condición física",
            costo: 180
        },
        {
            id: 4,
            nombre: "Pilates Avanzado",
            descripcion: "Fortalece tu core con ejercicios de pilates avanzados",
            requisitos: "Experiencia previa en fitness",
            costo: 200
        },
        {
            id: 5,
            nombre: "Danza Moderna",
            descripcion: "Expresate a través del movimiento y la música",
            requisitos: "Ninguno",
            costo: 160
        },
        {
            id: 6,
            nombre: "Boxeo para Adultos",
            descripcion: "Aprende técnicas de boxeo profesional",
            requisitos: "Edad mínima: 18 años",
            costo: 220
        }
    ];
}

function getDataEventos() {
    return [
        {
            id: 1,
            nombre: "Torneo de Futbol",
            descripcion: "Competencia amistosa de futbol para todos los niveles",
            curso: "Deportes",
            requisitos: "Ninguno",
            costo: 50
        },
        {
            id: 2,
            nombre: "Maratón Deportiva",
            descripcion: "Corre 5km en un ambiente familiar y competitivo",
            curso: "Atletismo",
            requisitos: "Buena condición física",
            costo: 100
        },
        {
            id: 3,
            nombre: "Torneo de Voleibol",
            descripcion: "Competencia de voleibol por equipos",
            curso: "Voleibol",
            requisitos: "Experiencia en voleibol",
            costo: 75
        },
        {
            id: 4,
            nombre: "Campeonato de Natación",
            descripcion: "Competencia de natación en diferentes categorías",
            curso: "Natación",
            requisitos: "Saber nadar",
            costo: 60
        },
        {
            id: 5,
            nombre: "Clase Magistral de Yoga",
            descripcion: "Sesión especial de yoga con instructor certificado",
            curso: "Yoga",
            requisitos: "Ninguno",
            costo: 40
        },
        {
            id: 6,
            nombre: "Festival de Danza",
            descripcion: "Presentaciones de danza de diferentes estilos",
            curso: "Danza",
            requisitos: "Ninguno",
            costo: 80
        }
    ];
}

function getDataArchivos() {
    return [
        {
            id: 1,
            id_evento: 1,
            nombre: "Reglas del Torneo",
            multimedia: "https://example.com/reglas.pdf"
        },
        {
            id: 2,
            id_evento: 2,
            nombre: "Ruta de la Maratón",
            multimedia: "https://example.com/ruta.pdf"
        },
        {
            id: 3,
            id_evento: 3,
            nombre: "Horario de Partidos",
            multimedia: "https://example.com/horario.pdf"
        },
        {
            id: 4,
            id_evento: 6,
            nombre: "Programación Festival",
            multimedia: "https://example.com/programacion.pdf"
        }
    ];
}

function getDataUsuarios() {
    const stored = localStorage.getItem('usuarios');
    if (!stored) {
        // Usuarios de prueba iniciales
        const usuariosIniciales = [
            {
                id: 1,
                nombre: "Juan García",
                telefono: "5551234567"
            },
            {
                id: 2,
                nombre: "María López",
                telefono: "5559876543"
            },
            {
                id: 3,
                nombre: "Carlos Rodríguez",
                telefono: "5552223333"
            }
        ];
        localStorage.setItem('usuarios', JSON.stringify(usuariosIniciales));
        return usuariosIniciales;
    }
    return JSON.parse(stored);
}

// ============================================
// MANEJO DE SESIÓN
// ============================================

function setUsuario(usuario) {
    localStorage.setItem('usuarioActivo', JSON.stringify(usuario));
    updateNavBar();
}

function getUsuario() {
    const stored = localStorage.getItem('usuarioActivo');
    return stored ? JSON.parse(stored) : null;
}

function logout() {
    localStorage.removeItem('usuarioActivo');
    updateNavBar();
    window.location.href = 'index.html';
}

function checkAuth() {
    updateNavBar();
}

function updateNavBar() {
    const usuario = getUsuario();
    const authLink = document.getElementById('auth-link');
    const inscripcionNav = document.getElementById('inscripcion-nav');
    const logoutNav = document.getElementById('logout-nav');

    if (usuario && authLink) {
        authLink.textContent = usuario.nombre;
        authLink.href = '#';
        authLink.onclick = (e) => {
            e.preventDefault();
            return false;
        };
    }

    if (inscripcionNav) {
        inscripcionNav.style.display = usuario ? 'block' : 'none';
    }

    if (logoutNav) {
        logoutNav.style.display = usuario ? 'block' : 'none';
    }
}

// ============================================
// USUARIOS
// ============================================

function getUserByCredentials(nombre, telefono) {
    const usuarios = getDataUsuarios();
    return usuarios.find(u => u.nombre === nombre && u.telefono === telefono);
}

function addUsuario(usuario) {
    const usuarios = getDataUsuarios();
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function removeUsuario(id) {
    const usuarios = getDataUsuarios();
    const actualizado = usuarios.filter(u => u.id !== id);
    localStorage.setItem('usuarios', JSON.stringify(actualizado));
}

// ============================================
// INSCRIPCIONES
// ============================================

function getInscripciones() {
    const stored = localStorage.getItem('inscripciones');
    return stored ? JSON.parse(stored) : [];
}

function addInscripcion(inscripcion) {
    const inscripciones = getInscripciones();
    
    // Verificar que no exista una inscripción igual
    const existe = inscripciones.some(i => 
        i.id_usuario === inscripcion.id_usuario && 
        ((i.id_curso === inscripcion.id_curso && inscripcion.id_curso) ||
         (i.id_evento === inscripcion.id_evento && inscripcion.id_evento))
    );

    if (!existe) {
        inscripciones.push(inscripcion);
        localStorage.setItem('inscripciones', JSON.stringify(inscripciones));
    }
}

function removeInscripcion(id) {
    let inscripciones = getInscripciones();
    inscripciones = inscripciones.filter(i => i.id !== id);
    localStorage.setItem('inscripciones', JSON.stringify(inscripciones));
}

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Asegurar que los datos iniciales existan
    getDataUsuarios();
});
