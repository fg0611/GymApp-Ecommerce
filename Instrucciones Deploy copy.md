# Instrucciones Deploy Heroku back y front vercel
# IMPORTANTE
Avisar al grupo el uso de BASE_URL_API
Agregar un process.env.PORT y agregarlo en el .env PORT = 3000
```DB_USER=postgres
DB_PASSWORD=postgres1
DB_HOST=localhost
DB_NAME=sportgym
PORT = 3000
```

## Installar libreria cors

npm i cors
Requerirlo en app, del back
var cors = require('cors');

## Para aceptar URLS remotas se agrega un asterisco para no configurar cuales son las URLS, con el '*' acepta todos.
back/app.js
res.header("Access-Control-Allow-Origin", "*")

## Configuracion Sequelize para Heroku
back/db.js
En esta estapa usamos un "___true/false?true:false(no recuerdo el nombre)_____" para que si el proyecto esta montado en heroku la tome, si no tome la configurarion local.
sequelize<produccion> ? sequelize<local>

```js
const sequelize =
  process.env.NODE_ENV === "production"
  //Si esta en produccion, toma este sequelize para heroku
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
//Si esta en desarrollo, toma este sequelize local.
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/{DB_NAME}`,
        { logging: false, native: false }
      );
```

## La base de datos PARECE que debe estar en la conexion que se reconstruya cuando se modifica el codigo. 

```js
conn.sync({ force: true })

```


## Agregar un process.env.PORT y agregarlo en el .env PORT = 3000

```js
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log("%s listening at 3000"); // eslint-disable-line no-console
  });
});
```
# Front vercel

# https://vercel.com

## Instalar dotenv
```
npm i dotenv
```
## Axios / Fetch
Con axios debe agregar esta configuracion, que si tiene una api externa la toma como la base de url de axios, usando la propiedad default, si no, toma la url local. Con fetch, por el index no me lo exporta (se pede verificar) asi que lo hice de otra manera.
front/index.js
```js
import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";
```
Lo hice de esta forma
front/App.js
```js
import dotenv from "dotenv";
dotenv.config();

BASE_URL_API = process.env.REACT_APP_API || "http://localhost:3001";
```
En heroku

nodemon no puede estar como dependencia desarrollo, para el heroku
Videos Diego Rodriguez
Link de Vimeo: https://vimeo.com/510792531/20d64d4a98

Otro video de Diego: https://drive.google.com/file/d/1WJwrpz5o-iIyFKKixMotsxfU_xAEw7UB/view