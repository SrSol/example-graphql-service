# Example GraphQL Service
Pequeño demo para ilustrar las consultas de objetos embebidos en GraphQL.

## Tecnologías
- [Node.js](https://nodejs.org/)
- [Apollo Server](http://dev.apollodata.com/tools/)
- [Koa](http://koajs.com/)
- [MongoDB](https://www.mongodb.com/)

## Uso

### Configuración previa
Para poder clonar y ejecutar este proyecto, primero debes tener instalados en tu computadora: GIT, NodeJS (el cuál viene con npm) y MongoDB.

### Instalación
```bash
# Clonar repositorio
$ git clone https://github.com/SrSol/example-graphql-service.git

# Acceder al respositorio
$ cd /your/path/example-graphql-service

# Instalar dependencias
$ npm install
```

### Uso
Para ejecutar el proyecto tenemos dos opciones:

*Opción 1* usamos el comando
```bash
$ npm start
```
Esto ejecutará el proyecto con los valores por defecto del archivo */config/system_variables.env*

*Opción 2* creamos el archivo */config/develop_variables.env* con las valores personalizados del archivo */config/system_variables.env*

Luego ejecutamos el comando
```bash
$ npm run develop
```

## Licencia
ISC
