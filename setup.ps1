$ErrorActionPreference = "Stop"

Write-Host "=====================================================" -ForegroundColor Cyan
Write-Host "🚀 Iniciando configuración del Proyecto GIMA..." -ForegroundColor Cyan
Write-Host "=====================================================" -ForegroundColor Cyan

# --- 0. Validaciones previas ---
try {
    $dockerCheck = Get-Command docker -ErrorAction Stop
} catch {
    Write-Host "`n❌ Error: Docker no está instalado. Por favor instálalo (https://docs.docker.com/desktop/) y vuelve a intentar." -ForegroundColor Red
    exit
}

if (Get-Command "docker-compose" -ErrorAction SilentlyContinue) {
    $DOCKER_CMD = "docker-compose"
} else {
    $DOCKER_CMD = "docker compose"
}

# --- 1. Solicitud de Puertos ---
Write-Host "`n⚙️ CONFIGURACIÓN DE PUERTOS" -ForegroundColor Yellow

$PORT_FRONTEND = Read-Host "Ingrese el puerto para el FRONTEND [Por defecto: 3000]"
if ([string]::IsNullOrWhiteSpace($PORT_FRONTEND)) { $PORT_FRONTEND = "3000" }

$PORT_BACKEND = Read-Host "Ingrese el puerto para el BACKEND [Por defecto: 8000]"
if ([string]::IsNullOrWhiteSpace($PORT_BACKEND)) { $PORT_BACKEND = "8000" }

$PORT_IA = Read-Host "Ingrese el puerto para el módulo IA [Por defecto: 3001]"
if ([string]::IsNullOrWhiteSpace($PORT_IA)) { $PORT_IA = "3001" }

$PORT_POSTGRES = Read-Host "Ingrese el puerto para la BASE DE DATOS [Por defecto: 5432]"
if ([string]::IsNullOrWhiteSpace($PORT_POSTGRES)) { $PORT_POSTGRES = "5432" }

# --- 2. Base de Datos ---
Write-Host "`n🗄️ CONFIGURACIÓN DE LA BASE DE DATOS" -ForegroundColor Yellow
$DB_USER = Read-Host "Introduce el usuario para PostgreSQL [Por defecto: postgres]"
if ([string]::IsNullOrWhiteSpace($DB_USER)) { $DB_USER = "postgres" }

$DB_PASS = Read-Host "Introduce la contraseña para PostgreSQL" -AsSecureString
$BSTR = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($DB_PASS)
$DB_PASS_PLAIN = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR)

# --- 3. API Keys ---
Write-Host "`n🤖 CONFIGURACIÓN DE IA" -ForegroundColor Yellow

do {
    $GROQ_KEY = Read-Host "Introduce tu GROQ API KEY (o escribe HELP para saber cómo obtenerla)"
    if ($GROQ_KEY.ToUpper() -eq "HELP") {
        Write-Host "`n--- 💡 CÓMO OBTENER LA GROQ API KEY ---" -ForegroundColor Cyan
        Write-Host "1. Ve a https://console.groq.com/keys"
        Write-Host "2. Inicia sesión o crea una cuenta gratis."
        Write-Host "3. Haz clic en 'Create API Key'."
        Write-Host "4. Copia la clave generada (debe empezar con gsk_)."
        Write-Host "----------------------------------------`n" -ForegroundColor Cyan
    } elseif ([string]::IsNullOrWhiteSpace($GROQ_KEY)) {
        Write-Host "⚠️ La clave no puede estar vacía." -ForegroundColor Yellow
    }
} until ($GROQ_KEY.ToUpper() -ne "HELP" -and -not [string]::IsNullOrWhiteSpace($GROQ_KEY))

do {
    $GOOGLE_KEY = Read-Host "Introduce tu GOOGLE API KEY (o escribe HELP para saber cómo obtenerla)"
    if ($GOOGLE_KEY.ToUpper() -eq "HELP") {
        Write-Host "`n--- 💡 CÓMO OBTENER LA GOOGLE API KEY ---" -ForegroundColor Cyan
        Write-Host "1. Ve a https://aistudio.google.com/app/apikey"
        Write-Host "2. Inicia sesión con tu cuenta de Google."
        Write-Host "3. Haz clic en 'Create API key'."
        Write-Host "4. Copia la clave generada (debe empezar con AIza...)."
        Write-Host "------------------------------------------`n" -ForegroundColor Cyan
    } elseif ([string]::IsNullOrWhiteSpace($GOOGLE_KEY)) {
        Write-Host "⚠️ La clave no puede estar vacía." -ForegroundColor Yellow
    }
} until ($GOOGLE_KEY.ToUpper() -ne "HELP" -and -not [string]::IsNullOrWhiteSpace($GOOGLE_KEY))

# --- 4. Configurar .env del Backend (Seguro para caracteres especiales) ---
Write-Host "`n📄 Configurando entornos..." -ForegroundColor Yellow
if (-not (Test-Path "backend/.env.example")) {
    Write-Host "❌ Error: No se encontró backend/.env.example." -ForegroundColor Red
    exit
}
Copy-Item "backend/.env.example" "backend/.env"
(Get-Content "backend/.env") | ForEach-Object {
    if ($_ -match "^DB_USERNAME=") { "DB_USERNAME=$DB_USER" }
    elseif ($_ -match "^DB_PASSWORD=") { "DB_PASSWORD=`"$DB_PASS_PLAIN`"" }
    elseif ($_ -match "^DB_HOST=") { "DB_HOST=db" }
    else { $_ }
} | Set-Content "backend/.env" -Encoding UTF8

# --- 5. Configurar .env del módulo IA ---
if (-not (Test-Path "ia/.env.example")) {
    Write-Host "❌ Error: No se encontró ia/.env.example" -ForegroundColor Red
    exit
}
Copy-Item "ia/.env.example" "ia/.env"
(Get-Content "ia/.env") | ForEach-Object {
    if ($_ -match "^GROQ_API_KEY=") { "GROQ_API_KEY=$GROQ_KEY" }
    elseif ($_ -match "^GOOGLE_GENERATIVE_AI_API_KEY=") { "GOOGLE_GENERATIVE_AI_API_KEY=$GOOGLE_KEY" }
    else { $_ }
} | Set-Content "ia/.env" -Encoding UTF8

# --- 6. Crear archivo .env raíz para Docker ---
$DockerEnv = @"
PORT_BACKEND=$PORT_BACKEND
PORT_POSTGRES=$PORT_POSTGRES
PORT_FRONTEND=$PORT_FRONTEND
PORT_IA=$PORT_IA
DOCKER_DB_NAME=gima_bd
DOCKER_DB_USER=$DB_USER
DOCKER_DB_PASSWORD=$DB_PASS_PLAIN
"@
$DockerEnv | Out-File -FilePath ".env" -Encoding ascii

# --- 7. Instalación de dependencias previas (Opcional) ---
Write-Host "`n📦 Comprobando dependencias locales previas (opcional)..." -ForegroundColor Yellow
$ErrorActionPreference = "Continue" 
try { Set-Location frontend; pnpm install 2>$null; Set-Location .. } catch { Write-Host "⚠️ No se detectó pnpm localmente en frontend. Docker lo instalará." -ForegroundColor DarkYellow; Set-Location .. }
try { Set-Location ia; pnpm install 2>$null; Set-Location .. } catch { Write-Host "⚠️ No se detectó pnpm localmente en IA. Docker lo instalará." -ForegroundColor DarkYellow; Set-Location .. }
$ErrorActionPreference = "Stop"

# --- 8. Levantar Docker ---
Write-Host "`n🐳 Levantando contenedores de Docker..." -ForegroundColor Yellow
Invoke-Expression "$DOCKER_CMD up -d --build"

# --- 9. Configuración interna del contenedor ---
Write-Host "`n⏳ Esperando 15 segundos a que la base de datos esté lista para recibir conexiones..." -ForegroundColor Cyan
Start-Sleep -Seconds 15

Write-Host "`n⚙️ Configurando Laravel (Dependencias, Key y Migraciones)..." -ForegroundColor Yellow
Invoke-Expression "$DOCKER_CMD exec app composer install"
Invoke-Expression "$DOCKER_CMD exec app php artisan key:generate"
Invoke-Expression "$DOCKER_CMD exec app php artisan migrate --seed"

Write-Host "`n✅ ¡PROYECTO GIMA LEVANTADO CON ÉXITO!" -ForegroundColor Green
Write-Host "➡️  Frontend disponible en:  http://localhost:$PORT_FRONTEND"
Write-Host "➡️  Backend disponible en:   http://localhost:$PORT_BACKEND"
Write-Host "➡️  Módulo IA disponible en: http://localhost:$PORT_IA"
