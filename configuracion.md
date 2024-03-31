# Configuración node y express

## Paso 1: Configurar el entorno

1. **Instalar Node y npm.js:**
2. **Crear un nuevo directorio para tu proyecto:**
Abre una terminal y crea un nuevo directorio para tu proyecto:

```bash
mkdir todo-app
cd todo-app
````

## **Paso 2:Inicializar el proyecto**

1. **Inicializar un proyecto de Node.js**:
Ejecuta el siguiente comando para iniciar un nuevo proyecto de Node.js. Esto creará un archivo `package.json` que mantendrá un registro de las dependencias de tu proyecto:

```bash
npm  init -y
```

## **Paso 3:Instalar dependencias**

1.**Instalar Express:**
Express es un framework de node.js para construir aplicaiciones web. Instálalo ejecutando:

```bash
    npm install express
```

2.**Instalar mongoose**:
Mongoose es una biblioteca de modelado de objetos MongoDB para node.js. Facilita la interacción con una base de datos MongoDB.

```bash
    npm install mongoose
```

3.**Instalar body-parser**:
Body-parser es un middleware de Node.js para analizar datos JSON, URL y otros tipos de datos. Se utiliza para analizar solicitudes HTTP en el servidor Express

```bash
    npm install body-parser
```

4.**Instalar nodemon**:
Instalación `nodemon` de forma local.

```bash
npm install --save-dev nodemon

```

Debemos modificar el archivo package.json.

```json
 "scripts": {
    "dev": "nodemon src/app.js",
    "start": "node src/app.js"
    }
```

4.**Instalar dotenv**:
1.Instalación `dotenv`:

```bash
npm install dotenv
```

2.**Configuración**:
Una vez que `dotenv` esté instalado, crear un archivo llamado `.env` en el directorio raíz de tu proyecto. Este archivo contendrá las variables de entorno.

```paintext
DB_HOST=localhost
DB_USER=myusername
DB_PASS=mypassword

```

3.**USO EN LA APLICACION**:

En la aplicación de Node.js, debes cargar las variables de entorno definidos en el archivo `.env` utilizando `dotenv`. Por lo general, esto se hace al principio de tu archivo de entrada (por ejemplo, index.js, app.js, etc.).

```js
// app.js

// Cargar variables de entorno desde el archivo .env
import dotenv from 'dotenv';
dotenv.config();

// Tu código de aplicación continua aquí...

```
