# Depo Xona 🎓 - Gestión de Deportes

Sistema de gestión para la Dirección de Deportes de Xonacatlán (Depo Xona)

## 📋 Descripción

Aplicación web PHP/MySQL/XAMPP para administrar:
- 📚 Cursos y modalidades
- 👥 Gestión de usuarios
- 📝 Sistema de inscripciones
- 🎉 Eventos deportivos
- 📂 Archivos multimedia
- 🔐 Panel de administrador

## 🚀 Tecnologías

- PHP 7.4+
- MySQL 5.7+
- HTML5, CSS3, JavaScript
- Bootstrap (opcional)
- PDO para conexiones a BD

## 📦 Instalación

### Requisitos previos
- XAMPP instalado
- Git instalado

### Pasos

1. **Clona el repositorio**
```bash
git clone https://github.com/tu-usuario/depo-xona.git
cd depo-xona
```

2. **Configura los datos de conexión**
```bash
cp config.php.example config.php
cp config/conexion.php.example config/conexion.php
cp db/conexion.php.example db/conexion.php
```

Edita cada archivo con tus credenciales de MySQL:
- Usuario MySQL
- Contraseña
- Nombre de base de datos

3. **Inicia servicios en XAMPP**
- Apache
- MySQL

4. **Crea la base de datos**
Accede a: `http://localhost/depo-xona/db/crear_base_datos.php`

5. **Accede a la aplicación**
```
http://localhost/depo-xona
```

## 🔐 Credenciales por defecto

**Admin:**
- Usuario: `Evan`
- Contraseña: `1234`

⚠️ **CAMBIAR EN PRODUCCIÓN**

## 📁 Estructura del proyecto

```
depo-xona/
├── admin/                    # Panel administrativo
│   ├── dashboard.php        # Dashboard
│   ├── cursos.php           # Gestión de cursos
│   ├── usuarios.php         # Gestión de usuarios
│   ├── inscripciones.php    # Gestión de inscripciones
│   ├── eventos.php          # Gestión de eventos
│   ├── archivos.php         # Gestión multimedia
│   ├── login.php            # Login admin
│   └── logout.php
├── public/                   # Sitio público
│   ├── index.php            # Inicio
│   ├── cursos.php           # Listado de cursos
│   ├── eventos.php          # Listado de eventos
│   ├── inscripcion.php      # Formulario de inscripción
│   ├── registro_usuario.php # Registro de usuarios
│   ├── login_usuario.php    # Login de usuarios
│   └── logout.php
├── config/
│   ├── conexion.php         # Conexión PDO
│   ├── conexion.php.example # Ejemplo de configuración
│   └── helpers.php          # Funciones auxiliares
├── db/
│   ├── crear_base_datos.php # Script de creación de BD
│   └── conexion.php         # Conexión alternativa
├── assets/
│   ├── css/style.css        # Estilos
│   ├── app.js               # JavaScript
│   ├── style.css
│   └── uploads/             # Archivos subidos (usuarios)
├── .gitignore              # Archivos ignorados por Git
├── config.php              # Configuración (NO VERSIONAR)
├── config.php.example      # Ejemplo de config
├── index.php               # Redirección a public/
└── README.md
```

## 💡 Funcionalidades

### Admin
- ✅ CRUD completo de cursos
- ✅ CRUD de usuarios
- ✅ Gestión de inscripciones
- ✅ CRUD de eventos
- ✅ Gestor de archivos multimedia
- ✅ Gestión de administradores

### Usuarios
- ✅ Registro de usuarios
- ✅ Login seguro
- ✅ Ver cursos disponibles
- ✅ Ver eventos
- ✅ Inscribirse en cursos
- ✅ Ver multimedia

## 🔐 Seguridad

Características implementadas:
- Prepared statements con PDO
- Hash de contraseñas
- Validación server-side con `filter_input`
- Sanitización de inputs

⚠️ **Mejoras recomendadas para producción:**
- Implementar CSRF tokens
- Validar tamaño/tipo de archivos en uploads
- Usar HTTPS
- Implementar rate limiting
- Mejorar manejo de errores (sin exponer BD)
- Agregar logs de seguridad

## 📝 Uso

### Crear base de datos
1. Asegúrate de tener Apache y MySQL ejecutándose
2. Navega a: `http://localhost/depo-xona/db/crear_base_datos.php`
3. Se crearán automáticamente:
   - BD: `depo_xona`
   - Tablas con relaciones
   - Datos de prueba

### Acceder como Admin
```
URL: http://localhost/depo-xona/admin/login.php
Usuario: Evan
Contraseña: 1234
```

### Acceder como Usuario
- Registro: `/public/registro_usuario.php`
- Login: `/public/login_usuario.php`

## 📚 Tablas de BD

- `administradores` - Gestores del sistema
- `usuarios` - Usuarios registrados
- `cursos` - Oferta de cursos
- `inscripciones` - Registros en cursos
- `eventos` - Eventos deportivos
- `archivos` - Multimedia del sistema

## 🤝 Contribuir

Las contribuciones son bienvenidas! Por favor:
1. Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Proyecto personal - Uso libre

## 📧 Contacto

Para preguntas o sugerencias, crea un issue en el repositorio.
