FROM node:20-alpine

WORKDIR /app

# Copiamos los archivos de dependencias
COPY package.json package-lock.json* ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código
COPY . .

# Exponer el puerto
EXPOSE 3000

# Comando para iniciar
CMD ["npm", "run", "dev"]