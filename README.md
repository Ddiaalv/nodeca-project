# **Nodeca**

- [**Nodeca**](#nodeca)
  - [**Estructura**](#estructura)
    - [**Database**](#database)
    - [**Backend**](#backend)
  - [**Entorno de desarrollo**](#entorno-de-desarrollo)
    - [**Database**](#database-1)
      - [**Credenciales**](#credenciales)
      - [**Información adicional**](#información-adicional)
    - [**Backend**](#backend-1)
  - [**Tecnologías**](#tecnologías)
    - [**Database**](#database-2)
    - [**Backend**](#backend-2)

## **Estructura**

### **Database**

Base de datos creada mediante [Docker](https://www.docker.com/)
utilizando [docker-compose](https://docs.docker.com/compose/) para generar un contenedor de MariaDB al que atacar desde
el Backend.

### **Backend**

Pequeña aplicación creada con el objetivo de ofrece uno o varios end points de datos para utilizar desde el Frontend.

## **Entorno de desarrollo**

Requisitos:

- Docker + Docker-composer

### **Database**

```bash
# Entramos en la carpeta de database.
cd database

# Creamos nuestro contenedor de MariaDB.
docker-compose up
```

#### **Credenciales**

```bash
Host: localhost
Port: 3306
Nombre BDD: nodeca
Usuario: root
Contraseña BDD: secret
```

> Este tipo de datos debería de estar gestionado mediante variables de entorno, pero por ahora el ejercicio no lo necesita ya que es educativo.

#### **Información adicional**

Este contenedor genera automáticamente la estructura de la base de datos tales como las tablas además importa los datos e inserta en éstas desde un archivo csv. (`database/init/csv/[nombre-archivo].csv`). Cabe destacar que este contenedor tiene configurado un volumen con permanencia de datos (los datos se guardarán en: `database/data`), para evitar que la información desaparezca si el contenedor se detiene .

### **Backend**

```bash
# Entramos en la carpeta de nuestro backend.
cd backend

# Si es la primera vez, instalamos las dependencias.
yarn install

# Ejecutar nuestro servidor de desarrollo.
yarn dev
```

## **Tecnologías**

### **Database**

| Nombre                              | Detalles                                       |
| ----------------------------------- | ---------------------------------------------- |
| 🐳[Docker](https://www.docker.com/) | Despliegue de base de datos en un contenedor . |

### **Backend**

| Nombre                                                 | Detalles                                                                    |
| ------------------------------------------------------ | --------------------------------------------------------------------------- |
| 💻[Node.js](https://nodejs.org/en/)                    | Es nuestro entorno en tiempo de ejecución con Javascript                    |
| 🔨[Express](http://expressjs.com/)                     | Utilidad para gestionar de mejor forma el crear aplicaciones web y API      |
| 🌐[Typescript](https://www.typescriptlang.org/)        | Lenguaje de tipos para Javascript                                           |
| 👀[Eslint](https://eslint.org/)                        | Linter para controlar errores en nuestro código                             |
| 🦋[Prettier](https://prettier.io/)                     | Formateador de nuestro código                                               |
| 👻[DotEnv](https://www.npmjs.com/package/dotenv)       | Utilidad para utilizar variables de entorno en nuestro desarrollo           |
| 👻[Cross-env](https://www.npmjs.com/package/cross-env) | Simplifica la asignación de nuestras variables de entorno                   |
| 🧪[Jest](https://jestjs.io/)                           | Nuestro gestor de test para Javascript                                      |
| ⚗️[Supertest](https://www.npmjs.com/package/supertest) | Módulo para la abstracción de alto nivel para testing de HTTP               |
| 👿[Nodemon](https://www.npmjs.com/package/nodemon)     | Utilidad que monitorea los cambios de nuestro código mientras desarrollamos |
| 🐺[Husky](https://www.npmjs.com/package/husky)         | Comprueba errores en nuestro código para evitar errores en nuestros commit  |
| 🚫[Lint-staged](https://github.com/okonet/lint-staged) | Ejecuta linter/formater/tests para evitar errores antes de hacer un commit  |
| 💽[Mysql](https://www.npmjs.com/package/mysql)         | Conector para node para realizar una conexión a nuestra base de datos Mysql |
