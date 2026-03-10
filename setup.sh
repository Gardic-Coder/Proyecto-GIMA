#!/bin/bash

# Salir inmediatamente si un comando crítico falla
set -e

echo "====================================================="
echo "🚀 Iniciando configuración del Proyecto GIMA..."
echo "====================================================="

# --- 0. Validaciones previas ---
if ! command -v docker &> /dev/null; then
    echo "❌ Error: Docker no está instalado. Por favor instálalo (https://docs.docker.com/get-docker/) y vuelve a intentar."
    exit 1
fi

# Comando unificado de docker (soporta 'docker compose' y 'docker-compose')
if docker compose version &> /dev/null; then
    DOCKER_CMD="docker compose"
elif command -v docker-compose &> /dev/null; then
    DOCKER_CMD="docker-compose"
else
    echo "❌ Error: Docker Compose no está instalado."
    exit 1
fi

# --- 1. Solicitud de Puertos ---
echo -e "\n⚙️ CONFIGURACIÓN DE PUERTOS"
read -p "Ingrese el puerto para acceder al FRONTEND [Por defecto: 3000]: " PORT_FRONTEND
PORT_FRONTEND=${PORT_FRONTEND:-3000}

read -p "Ingrese el puerto para acceder al BACKEND [Por defecto: 8000]: " PORT_BACKEND
PORT_BACKEND=${PORT_BACKEND:-8000}

read -p "Ingrese el puerto para acceder al módulo IA [Por defecto: 3001]: " PORT_IA
PORT_IA=${PORT_IA:-3001}

read -p "Ingrese el puerto para la BASE DE DATOS [Por defecto: 5432]: " PORT_POSTGRES
PORT_POSTGRES=${PORT_POSTGRES:-5432}

# --- 2. Solicitud de Base de Datos ---
echo -e "\n🗄️ CONFIGURACIÓN DE LA BASE DE DATOS"
read -p "Introduce el usuario para PostgreSQL [Por defecto: postgres]: " DB_USER
DB_USER=${DB_USER:-postgres}
read -s -p "Introduce la contraseña para PostgreSQL: " DB_PASS
echo ""

# --- 3. Solicitud de API Keys ---
echo -e "\n🤖 CONFIGURACIÓN DE IA"
while true; do
    read -p "Introduce tu GROQ API KEY (o escribe HELP para saber cómo obtenerla): " GROQ_KEY
    if [[ "${GROQ_KEY,,}" == "help" ]]; then
        echo -e "\n--- 💡 CÓMO OBTENER LA GROQ API KEY ---"
        echo "1. Ve a https://console.groq.com/keys"
        echo "2. Inicia sesión o crea una cuenta gratis."
        echo "3. Haz clic en 'Create API Key'."
        echo "4. Copia la clave generada (debe empezar con gsk_)."
        echo -e "----------------------------------------\n"
    elif [[ -z "$GROQ_KEY" ]]; then
        echo "⚠️  La clave no puede estar vacía."
    else
        break
    fi
done

while true; do
    read -p "Introduce tu GOOGLE API KEY (o escribe HELP para saber cómo obtenerla): " GOOGLE_KEY
    if [[ "${GOOGLE_KEY,,}" == "help" ]]; then
        echo -e "\n--- 💡 CÓMO OBTENER LA GOOGLE API KEY ---"
        echo "1. Ve a https://aistudio.google.com/app/apikey"
        echo "2. Inicia sesión con tu cuenta de Google."
        echo "3. Haz clic en 'Create API key'."
        echo "4. Copia la clave generada (debe empezar con AIza...)."
        echo -e "-------------------------------------------\n"
    elif [[ -z "$GOOGLE_KEY" ]]; then
        echo "⚠️  La clave no puede estar vacía."
    else
        break
    fi
done

# --- 4. Configurar .env del Backend ---
echo -e "\n📄 Configurando entornos..."
if [ ! -f "backend/.env.example" ]; then
    echo "❌ Error: No se encontró backend/.env.example."
    exit 1
fi
cp backend/.env.example backend/.env
sed -i "s/DB_USERNAME=.*/DB_USERNAME=$DB_USER/" backend/.env
sed -i "s/DB_PASSWORD=.*/DB_PASSWORD=$DB_PASS/" backend/.env
sed -i "s/DB_HOST=.*/DB_HOST=db/" backend/.env

# --- 5. Configurar .env de la IA ---
if [ ! -f "ia/.env.example" ]; then
    echo "❌ Error: No se encontró ia/.env.example."
    exit 1
fi
cp ia/.env.example ia/.env
sed -i "s/GROQ_API_KEY=.*/GROQ_API_KEY=$GROQ_KEY/" ia/.env
sed -i "s/GOOGLE_GENERATIVE_AI_API_KEY=.*/GOOGLE_GENERATIVE_AI_API_KEY=$GOOGLE_KEY/" ia/.env

# --- 6. Crear archivo .env principal para Docker ---
cat <<EOF > .env
PORT_BACKEND=$PORT_BACKEND
PORT_POSTGRES=$PORT_POSTGRES
PORT_FRONTEND=$PORT_FRONTEND
PORT_IA=$PORT_IA
DOCKER_DB_NAME=gima_bd
DOCKER_DB_USER=$DB_USER
DOCKER_DB_PASSWORD=$DB_PASS
EOF

# --- 7. Levantar servicios de Docker ---
echo -e "\n🐳 Levantando contenedores de Docker..."
$DOCKER_CMD up -d --build

# --- 8. Configuración interna del contenedor (Migraciones y Claves) ---
echo -e "\n⏳ Esperando 15 segundos a que la base de datos esté lista para recibir conexiones..."
sleep 15

echo -e "\n⚙️ Configurando Laravel (Dependencias, Key y Migraciones)..."
# Instalamos dependencias DENTRO del contenedor para que no necesiten PHP en su máquina local
$DOCKER_CMD exec app composer install
$DOCKER_CMD exec app php artisan key:generate
$DOCKER_CMD exec app php artisan migrate --seed

echo -e "\n✅ ¡PROYECTO GIMA LEVANTADO Y CONFIGURADO CON ÉXITO!"
echo "➡️  Frontend disponible en:  http://localhost:$PORT_FRONTEND"
echo "➡️  Backend disponible en:   http://localhost:$PORT_BACKEND"
echo "➡️  Módulo IA disponible en: http://localhost:$PORT_IA"