// ============================================
// GESTIÓN DE ADMINISTRADORES
// ============================================

function getAdmins() {
    const stored = localStorage.getItem('admins');
    if (!stored) {
        // Admin por defecto
        const adminsIniciales = [
            {
                id: 1,
                usuario: 'admin',
                password: 'admin123', // Hash simple para demo
                esAdmin: true
            },
            {
                id: 2,
                usuario: 'evan',
                password: '1234',
                esAdmin: true
            }
        ];
        localStorage.setItem('admins', JSON.stringify(adminsIniciales));
        return adminsIniciales;
    }
    return JSON.parse(stored);
}

function setAdmin(admin) {
    localStorage.setItem('adminActivo', JSON.stringify(admin));
}

function getAdmin() {
    const stored = localStorage.getItem('adminActivo');
    return stored ? JSON.parse(stored) : null;
}

function verifyAdminCredentials(usuario, password) {
    const admins = getAdmins();
    return admins.find(a => a.usuario === usuario && a.password === password);
}

// ============================================
// FUNCIONES DE GESTIÓN (complementarias)
// ============================================

function removeUsuario(id) {
    const usuarios = getDataUsuarios();
    const actualizado = usuarios.filter(u => u.id !== id);
    localStorage.setItem('usuarios', JSON.stringify(actualizado));
}

function deleteCurso(id) {
    // Implementado cuando sea necesario
    alert('Funcionalidad de edición de cursos próximamente');
}

function deleteEvento(id) {
    // Implementado cuando sea necesario
    alert('Funcionalidad de edición de eventos próximamente');
}
