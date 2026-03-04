FROM node:20-alpine

WORKDIR /app

# Copiar los archivos de dependencias
# Se incluyen comodines por si usas npm, pnpm o yarn
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código del proyecto
COPY . .

# Exponer el puerto por defecto de Next.js
EXPOSE 3000

# Comando para iniciar la aplicación en modo desarrollo
CMD ["npm", "run", "dev"]