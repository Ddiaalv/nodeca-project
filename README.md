# **Nodeca**

- [**Nodeca**](#nodeca)
  - [**Live**](#live)
  - [**Estructura del proyecto:**](#estructura-del-proyecto)
    - [**Database**](#database)
    - [**Backend**](#backend)
    - [**Frontend**](#frontend)
  - [**¿Cómo desplegar nuestro entorno de desarrollo?**](#cómo-desplegar-nuestro-entorno-de-desarrollo)
    - [**Backend y Frontend**](#backend-y-frontend)
  - [**¿Cómo está configurado mi dockerfile y docker-compose?**](#cómo-está-configurado-mi-dockerfile-y-docker-compose)
  - [**Credenciales base de datos local**](#credenciales-base-de-datos-local)
  - [**Malas prácticas**](#malas-prácticas)

## **Live**

[Nodeca](https://fe-ndc.vercel.app/)

## **Estructura del proyecto:**

### **Database**

Base de datos creada mediante [Docker](https://www.docker.com/)
utilizando [docker-compose](https://docs.docker.com/compose/) para generar un contenedor de MariaDB al que atacar desde el Backend.

### **Backend**

cd frontend
Node + Express para generar una API que utilizaremos desde el Frontend. "Dockerizamos" ésta misma app para utilizarla junto a la base de datos por medio de docker-compose.

### **Frontend**

Muestra un listado de monstruos con multiples filtros para buscar el monstruo que queramos y además ver la información de éste.

## **¿Cómo desplegar nuestro entorno de desarrollo?**

Este proyecto está mas centrado en el Frontend, por lo que para generar un entorno de desarrollo opté por dockerizar el _backend_ junto a la _base de datos_, para ello podemos utilizarla de la siguiente forma:

```bash
# Ejecutamos en la raíz de nuestro proyecto:
docker-compose up
```

### **Backend y Frontend**

```bash
# Entramos en la carpeta de nuestro frontend/backend.
cd frontend
cd backend

# Si es la primera vez, instalamos las dependencias.
yarn install

# Ejecutar nuestro servidor de desarrollo.
yarn dev # Frontend puerto 3000
yarn dev # Backend puerto 3001

```

## **¿Cómo está configurado mi dockerfile y docker-compose?**

La base de datos, como sus tablas se generan de forma automática por medio del script (`database/init/init.sql`). Éste script crea la base de datos, sus tablas y además importa los datos y los inserta en éstas desde un archivo csv. (`database/init/csv/[nombre-archivo].csv`). Cabe destacar que este contenedor tiene configurado un volumen con permanencia de datos (los datos se guardarán en: `database/data`), para evitar que la información desaparezca si el contenedor se detiene.

Al tener la base de datos preparada, se "dockeriza" el backend enlazado con ésta.

## **Credenciales base de datos local**

```bash
Host: localhost
Port: 3306
Nombre BDD: nodeca
Usuario: root
Contraseña BDD: secret
```

## **Malas prácticas**

En este proyecto tengo malas prácticas que fuerzo hacer para que no sea tan complicado "trastear" con este proyecto.

- No añadir el archivo .env.development a .gitignore. mostrando las credenciales de la base de datos local.

- Utilizar la cuenta de root para hacer consultas a la base de datos. Lo ideal sería utilizar un usuario con permisos de únicamente lectura.
