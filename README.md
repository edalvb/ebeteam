# EBE TEAM

El proyecto está hecho en Angular 11, Strapi, GraphQL para la API, MySQL para la base de datos.

Comandos para ejecutar el proyecto:

1. Instalar NPM `10.16.0` Puedes usar [NVM](https://github.com/coreybutler/nvm-windows/releases)

    1.1. Instalar NVM
    
    1.2. Instalar NPM `10.16.0` con el comando `nvm install 10.16.0`
   
    1.3. Seleccionar la versión de NPM con el comando `nvm use 10.16.0`
2. Ve a la carpeta `client` y ejecuta el comando `npm install`
3. Ejecuta el comando `npm start` para ejecutar el proyecto de Angular
4. Ve a la carpeta `server` y ejecuta el comando `npm install`
5. MySQL

    5.1. Instalar [MySQL](https://dev.mysql.com/downloads/installer)

    5.2. Crear una base de datos llamada `ebeteam`

    5.3. Crear un usuario con los siguientes datos:
    
        - Usuario: `ebeteam`
        - Contraseña: `ebe-team1`

6. En carpeta `server`, ejecuta Strapi con el comando `npm run develop`. Este comando creará las tablas necesarias en la base de datos.
7. Inserta los datos en la base de datos con los archivos que se encuentran en la carpeta `db/consulta`


Dentro de los archivos client y server ejecuta los comandos `npm install` para que se instalen todas las dependencias tanto de Angular como de Strapi.

Una vez hecho esto para ejecutar Strapi ejecuta `npm run develop` y para ejecutar Angular ejecuta `ng serve`

[DEMO](http://ebe-team.web.app/)
