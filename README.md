
# Demo Landing Page

 Click Aquí para ver ==> <a href="http://104.236.67.205/"> Ver Demo</a>



## Objetivos desempeñados en la Demo

- Construcción de una App utilizando React, Redux, Node, Express, Postgres, Sequelize, JWS, bcrypt, Bootstrap.
- Opción del usuario poder registrarse y una vez registrado, puede editar su perfil o eliminarlo si lo desea.
- Autenticacion por Json Web Token
- Las password estan encriptadas.
- App deplegada en DigitalOceam tanto back como front.
- Se hizo uso de axios para las peticiones en el front.
- El formulario de registro cuenta con validaciones tanto por error o estructura del dato ingresado como duplicidad de usuario registrado.
- Protección de las rutas en el front.


## Horarios y Fechas

El proyecto tendrá una duración máxima de dos semanas. En el caso de que completan todas las tareas antes de dicho lapso podrán avisar a su Instructor para coordinar una fecha de presentación del trabajo (DEMO).

## Comenzando

__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor


## App

La App cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=postgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

La base de datos tiene por nombre `landing`


#### Tecnologías necesarias:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres
- [ ] Json Web Token
- [ ] Bootstrap
- [ ] bcrypt

#### Frontend

Se  desarrolló una aplicación de React/Redux que contiene las siguientes pantallas/rutas.


__Ruta principal__: Contine
- [ ] Una imagen de cabezera
- [ ] Menú de navegación
- [ ] Botón de Login

__Ruta de Registro__: Contiene formulario controlado con las siguientes validaciones
- [ ]  El username no puede estar registrado dos veces
- [ ] El email no puede estar registrado dos veces
- [ ] El password debe contener minimo 8 caracter y contener un amayuscula
- [ ] El password debe coincidir con el segundo intento
- [ ] El email debe tener la siguientes estructura juanito@perez.com
- [ ] Todos los datos deben llenarse o sino no puede segir con el registro

__Ruta de login__: Contiene 
- [ ] Un formulario con a solicitud de el username y el password con el que se registró. este se desabilita cuando el usuario se há registrado, habilitando el singUp

__Ruta de about__: Esta ruta solo se habilita cuando el usuario está registrado y es donde puede ver su perfil 

__Ruta de pricing__: solo texto

__Ruta de contact__: solo texto

__Ruta de features__: solo texto


#### Base de datos

El modelo de la base de datos contiene como entidad unica (Aquellas propiedades marcadas con asterísco son obligatorias):

- [ ] Usuario:
  - ID  *
  - Username *
  - Nombre *
  - Lastname *
  - password*
  - Email *
  - Año de nacimiento *



#### Backend

Se desarrolló una api en Node/Express con las siguientes rutas:




- [ ] __GET /user/{idUser}__:
  - Obtiene el detalle de un usuario, mas no fue necesario usarlo en el front.
- [ ] __POST /user__:
  - Recibe los datos recolectados desde el formulario controlado de registro por body.
  - Crea un usuario.
- [ ] __POST /user/userdata/token__:
  - Permite mantener activo el usuario logueado por medio del token usado como autenticación para ello se crea una funcion que verify la activación del token.
- [ ] __POST /user/signIn__ : 
  - Permite la validación del usuario al momemnto de loguearse.
- [ ] __PUT /user/{idUser}__:
  - Recibe los datos recolectados desde el formulario controlado de registro por body de un usurio en particular y modifica los datos existentes.
- [ ] __DELETE /user/{idUser}__:
  - Elimina un usurio en particular por medio de su ID.
  
