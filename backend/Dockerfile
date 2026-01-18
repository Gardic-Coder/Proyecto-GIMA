FROM php:8.2-fpm

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \
    libpq-dev \
    zip \
    unzip \
    git \
    curl \
    libicu-dev # Útil para validaciones de Laravel

# Instalar extensiones de PHP para Postgres e Intl
RUN docker-php-ext-install pdo pdo_pgsql intl

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Copiamos solo los archivos de dependencias primero (Optimiza el cache de Docker)
COPY composer.json composer.lock ./

# Instalamos dependencias (esto usará el compose.lock)
RUN composer install --no-scripts --no-autoloader

# Ahora copiamos el resto del código
COPY . .

# Finalizamos la autoinstalación de composer
RUN composer dump-autoload

# Permisos corregidos para evitar problemas de "Permission Denied"
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

EXPOSE 8000

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]