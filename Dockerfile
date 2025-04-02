# Usa una imagen oficial de Node.js para construir la app
FROM node:18 AS build

WORKDIR /app

# Copia package.json y package-lock.json primero para optimizar la caché de dependencias
COPY package.json package-lock.json ./

RUN npm install

# Copia todos los archivos del proyecto al contenedor
COPY . .

# Construye la aplicación
RUN npm run build

# Usa una imagen ligera de Nginx para servir la app
FROM nginx:alpine

# Copia la aplicación compilada al servidor de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]