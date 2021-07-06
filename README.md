# **Nodeca**

- [**Nodeca**](#nodeca)
  - [**Estructura**](#estructura)
    - [**Database**](#database)
  - [**Entorno de desarrollo**](#entorno-de-desarrollo)
    - [**Database**](#database-1)
      - [**Credenciales**](#credenciales)
      - [**Información adicional**](#información-adicional)

## **Estructura**

### **Database**

Base de datos creada mediante [Docker](https://www.docker.com/)
utilizando [docker-compose](https://docs.docker.com/compose/) para generar un contenedor de MariaDB al que atacar desde
el Backend.

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
