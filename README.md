# 🚀 Proyecto GIMA - Guía de Integración

Bienvenido al repositorio central de **Proyecto-GIMA**. Este entorno utiliza contenedores para garantizar que todos trabajemos exactamente con las mismas versiones de PHP, Node.js y PostgreSQL, evitando errores de configuración local.

---

## 🛠️ Inicialización del Proyecto

Sigue estos pasos para configurar tu entorno por primera vez:

1. **Variables de Entorno del Ecosistema:**
En la raíz del proyecto, crea un archivo `.env` basado en el ejemplo para configurar la Base de Datos en Docker:
* Copia el archivo: `cp .env.example .env` (o créalo manualmente).
* Define tus credenciales de PostgreSQL en este archivo. El `docker-compose.yml` las leerá automáticamente.


2. **Variables de Entorno del Backend:**
Entra a la carpeta `backend/` y prepara su configuración:
* `cp backend/.env.example backend/.env`
* **Importante:** Asegúrate de que los valores de `DB_DATABASE`, `DB_USERNAME` y `DB_PASSWORD` coincidan con los que pusiste en el `.env` de la raíz. El `DB_HOST` debe ser `db`.


3. **Levantar Contenedores:**
* **Linux/macOS:** `docker compose up -d --build`
* **Windows:** `docker-compose up -d --build`


4. **Migraciones y Datos iniciales:**
```bash
docker compose exec app php artisan key:generate
docker compose exec app php artisan migrate --seed

```

---

## 📖 Diccionario de Comandos Útiles

| Acción | Comando |
| --- | --- |
| **Ver Logs (Errores)** | `docker compose logs -f [servicio]` (servicios: `app`, `frontend`, `db`) |
| **Instalar dependencias Backend** | `docker run --rm -v $(pwd)/backend:/app composer install` |
| **Instalar dependencias Frontend** | `docker run --rm -v $(pwd)/frontend:/app -w /app node:20 npm install` |
| **Detener todo** | `docker compose down` |
| **Acceso manual a DB** | Usar **DBeaver** en `localhost:5432` con las credenciales del `.env` |
| **Reiniciar Servicio:** | `docker compose restart [servicio]` |
| **Limpiar Docker:** | `docker system prune` (Uso con precaución) |

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

* **Ramas de Trabajo:** Crea una rama propia para cada funcionalidad: `feature/nombre-de-la-tarea`.
* **Commits Semánticos:** Usa mensajes descriptivos:
* `feat:` para nuevas funcionalidades.
* `fix:` para corregir errores.
* `docs:` para cambios en documentación.


* **Prohibido Push Directo:** Nunca hagas push directo a la rama principal de integración. Solicita un Code Review.

---

## ✅ Funcionalidades Integradas (Status)

Esta lista se actualiza conforme unimos piezas del puzzle.

* [x] **Infraestructura:** Dockerización de Fullstack (PHP 8.2, Node 20, Postgres 15).
* [x] **Seguridad Base:** Sistema de Autenticación (Login) conectado con Backend.
* [x] **Persistencia:** Gestión de Tokens JWT/Sanctum en `localStorage`.
* [x] **Protección de Rutas:** Middleware `AuthGuard` operativo para restringir accesos.
* [x] **Gestión de Sesión:** Funcionalidad de Logout y redirección automática.
* [ ] **Dashboard General:** (En proceso...)
* [ ] **Otras funcionalidades:** (Pendiente de integración...)

---

## 🌐 Direcciones Locales

* **Frontend:** [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)
* **Backend API:** [http://localhost:8000](https://www.google.com/search?q=http://localhost:8000)
* **DB Host:** `localhost` | **Port:** `5432`

---

## 🛤️ Mapa de Rutas (Endpoints y Vistas)

### 🖥️ Frontend (Next.js - Puerto 3000)

| Ruta | Descripción | Acceso |
| --- | --- | --- |
| `/auth/login` | Formulario de acceso | Público |
| `/logout` | Cierre de sesión y limpieza | Público |
| `/dashboard` | Panel principal del sistema | Solo Logueados |

### ⚙️ Backend API (Laravel - Puerto 8000)

*Prefijo de ruta: `http://localhost:8000/api*`

| Método | Endpoint | Descripción |
| --- | --- | --- |
| **POST** | `/autenticacion/iniciar-sesion` | Login (Retorna Token y Usuario) |
| **GET** | `/autenticacion/perfil` | Datos del usuario logueado |

---



**Nota:** Si tienes dudas sobre cómo conectar una nueva vista, consulta el componente `<AuthGuard />` en la carpeta de componentes.

---
