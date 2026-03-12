# 🚀 Proyecto GIMA - Guía de Integración

Bienvenido al repositorio central de **Proyecto-GIMA**. Este entorno utiliza contenedores para garantizar que todos trabajemos exactamente con las mismas versiones de PHP, Node.js y PostgreSQL, evitando errores de configuración local.

---

## 🚀 Guía de Instalación y Despliegue Rápido

Para facilitar la colaboración, el proyecto cuenta con un script de inicialización automática que se encarga de crear las variables de entorno, mapear los puertos, descargar las dependencias y orquestar todo a través de Docker.

### 📋 Requisitos Previos

El único requisito estricto para levantar el proyecto es contar con:

- **[Docker](https://docs.docker.com/get-docker/)** instalado y ejecutándose en tu máquina.
- Si usas Windows, se recomienda tener configurado **WSL2** en Docker Desktop.

---

### 🐧 Instrucciones para Linux o macOS

1. Clona el repositorio y navega hasta la carpeta raíz del proyecto:
   ```bash
      git clone <url-de-tu-repositorio>
      cd proyecto-gima
   ```
2. Otorga permisos de ejecución al script de configuración:
   ```bash
      chmod +x setup.sh
   ```
3. Ejecuta el script:
   ```bash
      ./setup.sh
   ```
4. Sigue las instrucciones interactivas en la consola. El script te pedirá:
   - Los puertos que deseas usar (puedes dejar los que vienen por defecto pulsando Enter).
   - Credenciales para la base de datos.
   - Tus API Keys de IA (Si no sabes cómo obtenerlas, escribe HELP cuando el script te lo solicite para ver un paso a paso).

### 🪟 Instrucciones para Windows

1. Clona el repositorio y abre una terminal de PowerShell como Administrador en la carpeta del proyecto.
2. (Opcional) Si es la primera vez que ejecutas scripts en tu PC, deberás habilitar temporalmente la ejecución de scripts. Escribe el siguiente comando y acepta (S):
   ```powershell
      Set-ExecutionPolicy RemoteSigned -Scope Process
   ```
3. Ejecuta el script de configuración:
   ```powershell
      .\setup.ps1
   ```
4. Completa los datos solicitados en consola:
   - Puertos de despliegue (presiona Enter para usar los valores por defecto).
   - Credenciales para la base de datos (Soporta caracteres especiales).
   - Tus API Keys de IA (Escribe HELP si necesitas instrucciones sobre dónde obtenerlas).

---

### ✅ Verificación

Una vez que el script finalice, todos los contenedores estarán corriendo en segundo plano. Podrás acceder a los servicios desde tu navegador:

- Frontend (Next.js): http://localhost:3000 (o el puerto que elegiste).
- Backend API (Laravel): http://localhost:8000
- Módulo IA: http://localhost:3001

Nota: El script ejecuta las migraciones (migrate --seed) automáticamente, por lo que la base de datos ya contará con usuarios y datos de prueba.

### 🛑 Posibles Soluciones a Errores (Troubleshooting)

Si al levantar el proyecto la base de datos rechaza la contraseña (error password authentication failed), es probable que exista un volumen de Docker anterior haciendo conflicto. Limpia el entorno y vuelve a ejecutar el script con:

```bash
   docker compose down -v
   ./setup.sh
```

---

## 📖 Diccionario de Comandos Útiles

| Acción                             | Comando                                                                  |
| ---------------------------------- | ------------------------------------------------------------------------ |
| **Ver Logs (Errores)**             | `docker compose logs -f [servicio]` (servicios: `app`, `frontend`, `db`) |
| **Instalar dependencias Backend**  | `docker run --rm -v $(pwd)/backend:/app composer install`                |
| **Instalar dependencias Frontend** | `docker run --rm -v $(pwd)/frontend:/app -w /app node:20 npm install`    |
| **Detener todo**                   | `docker compose down`                                                    |
| **Acceso manual a DB**             | Usar **DBeaver** en `localhost:5432` con las credenciales del `.env`     |
| **Reiniciar Servicio:**            | `docker compose restart [servicio]`                                      |
| **Limpiar Docker:**                | `docker system prune` (Uso con precaución)                               |

---

## ⚖️ Reglas de Oro para Colaboradores

Para mantener la integridad del sistema durante la integración, todos los miembros deben seguir estas normas:

1. **Intervención Mínima:** No modifiques archivos fuera de tu área asignada.
2. **Backend "Solo Lectura":** Queda prohibido modificar el código de la carpeta `backend/` sin consulta previa con el líder de integración. Si necesitas un cambio en la API, solicítalo.
3. **Respeto al Diseño:** En el Frontend, céntrate en la **lógica de funcionalidad** (fetch, estados, validaciones). No alteres clases de CSS (Tailwind), estructuras de `div` o el layout general, salvo que sea técnicamente imposible integrar la función sin hacerlo.
4. **Reporte de Errores Core:** Si el proyecto no levanta o detectas un error base en el Backend o Frontend que no fue causado por tus cambios, **no intentes parcharlo**. Notifícalo de inmediato para que el equipo responsable lo solucione en el repositorio origen.
5. **Sincronización:** Antes de empezar a trabajar, asegúrate de tener la última versión de la rama de integración.

---

## 🌿 Flujo de Trabajo en Git

Para evitar conflictos y mantener el historial limpio, sigue estas reglas:

- **Ramas de Trabajo:** Crea una rama propia para cada funcionalidad: `feature/nombre-de-la-tarea`.
- **Commits Semánticos:** Usa mensajes descriptivos:
- `feat:` para nuevas funcionalidades.
- `fix:` para corregir errores.
- `docs:` para cambios en documentación.

- **Prohibido Push Directo:** Nunca hagas push directo a la rama principal de integración. Solicita un Code Review.

---

## ✅ Funcionalidades Integradas (Status)

Esta lista se actualiza conforme unimos piezas del puzzle.

- [x] **Infraestructura:** Dockerización de Fullstack (PHP 8.2, Node 20, Postgres 15).
- [x] **Seguridad Base:** Sistema de Autenticación (Login) conectado con Backend.
- [x] **Persistencia:** Gestión de Tokens JWT/Sanctum en `localStorage`.
- [x] **Protección de Rutas:** Middleware `AuthGuard` operativo para restringir accesos.
- [x] **Gestión de Sesión:** Funcionalidad de Logout y redirección automática.
- [x] **Estado Global de Autenticación:** Implementación de `AuthContext` para disponibilidad centralizada de datos de sesión.
- [x] **Gestión de Usuarios (CRUD):** Integración completa de listado, creación, edición y eliminación de usuarios con la API REST.
- [x] **Búsqueda Optimizada:** Filtrado real en base de datos conectado al Frontend mediante técnica de _Debounce_ para reducir carga en el servidor.
- [x] **Paginación Reutilizable:** Componente modular `<Pagination />` con control de registros por página, salto directo y memoria en `localStorage`.
- [x] **Experiencia de Usuario (UX):** Modales de confirmación (`DeleteAlert`), estados de carga (`LoadingSpinner`) y manejo de errores.
- [ ] **Control de Acceso por Roles:** Renderizado condicional del Sidebar y protección de componentes mediante `RoleGuard`.
- [ ] **Dashboard General:** (En proceso...)
- [ ] **Gestión de Activos:** (Pendiente de integración...)
- [ ] **Módulo de Mantenimiento:** (Pendiente de integración...)

---

## 🌐 Direcciones Locales

- **Frontend:** [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)
- **Backend API:** [http://localhost:8000](https://www.google.com/search?q=http://localhost:8000)
- **DB Host:** `localhost` | **Port:** `5432`

---

## 🛤️ Mapa de Rutas (Endpoints y Vistas)

### 🖥️ Frontend (Next.js - Puerto 3000)

| Ruta                  | Descripción                                  | Acceso                        |
| --------------------- | -------------------------------------------- | ----------------------------- |
| `/auth/login`         | Formulario de acceso                         | Público                       |
| `/logout`             | Cierre de sesión y limpieza                  | Público                       |
| `/dashboard`          | Panel principal del sistema                  | Solo Logueados                |
| `/unauthorized`       | Pantalla de "Acceso Denegado"                | Solo Logueados (Sin permisos) |
| `/configuracion/User` | Tabla CRUD de gestión de personal y permisos | Logueados (Rol: `admin`)      |

### ⚙️ Backend API (Laravel - Puerto 8000)

_Prefijo de ruta: `http://localhost:8000/api`_

| Método     | Endpoint                        | Descripción                                                             |
| ---------- | ------------------------------- | ----------------------------------------------------------------------- |
| **POST**   | `/autenticacion/iniciar-sesion` | Login (Retorna Token y Usuario)                                         |
| **GET**    | `/autenticacion/perfil`         | Datos del usuario logueado                                              |
| **GET**    | `/admin/users`                  | Lista usuarios. Acepta query params: `?page=1&per_page=15&search=texto` |
| **POST**   | `/admin/users`                  | Crea un nuevo usuario. (Asigna contraseña por defecto temporalmente)    |
| **PUT**    | `/admin/users/{id}`             | Actualiza datos y/o roles de un usuario existente                       |
| **DELETE** | `/admin/users/{id}`             | Elimina un usuario del sistema (Retorna 204 No Content)                 |
