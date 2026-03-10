FROM node:20-alpine

# Habilitar corepack e instalar pnpm globalmente
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copiar SOLO los archivos de dependencias primero (para aprovechar el caché de Docker)
COPY package.json pnpm-lock.yaml* ./

# Instalar dependencias usando pnpm
RUN pnpm install

# Copiar el resto del código
COPY . .

# Exponer el puerto
EXPOSE 3000

# Comando para iniciar
CMD ["pnpm", "dev"]