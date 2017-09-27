# Example GraphQL Service
Pequeño demo para ilustrar las consultas de objetos embebidos en GraphQL.

## Tecnologías
- NodeJS v8.1.0
- Apollo Server 
- Apollo Server v0.8.0 y sus herramientas
- Koa v2.2.0
- MongoDB 3.4

## Uso

### Configuración previa
Para poder clonar y ejecutar este proyecto, primero debes tener instaldos en tu computadora: GIT, NodeJS (el cuál viene con npm) y MongoDB.

### Instalación
```
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
```
$ npm start
```
Esto ejecutará el proyecto con los valores por defecto del archivo */config/system_variables.env*

*Opción 2* creamos el archivo */config/develop_variables.env* con las valores personalizados del archivo */config/system_variables.env*

Luego ejecutamos el comando
```
$ npm run develop
```

## Licencia
ISC
