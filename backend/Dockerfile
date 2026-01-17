FROM php:8.2-fpm

# Instalar dependencias del sistema y extensiones de PHP para PostgreSQL
RUN apt-get update && apt-get install -y \
    libpq-dev \
    zip \
    unzip \
    git \
    curl

# Instalar extensiones de PHP necesarias para Laravel y Postgres
RUN docker-php-ext-install pdo pdo_pgsql

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Copiar el código del proyecto
COPY . .

# Dar permisos a las carpetas de Laravel
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

EXPOSE 8000

# Comando para iniciar el servidor de desarrollo de Laravel
CMD php artisan serve --host=0.0.0.0 --port=8000