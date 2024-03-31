// Importar módulos utilizando la sintaxis de EcmaScript 6
import express from 'express';
import bodyParser from 'body-parser';
import taskRoutes from './routes/taskRoutes.js';
import cors from 'cors';
import connectDB from './db/db.js';
import Task from './models/task.js';

const app = express();

// Configuración del motor de plantillas PUG
app.set('view engine', 'pug');
app.set('views', 'src/views'); // Especifica el directorio de las vistas

// Definir rutas para renderizar vistas Pug
app.get('/', (req, res) => {
    res.render('index'); // Renderizar views/index.pug
});

app.get('/tasks', async (req, res) => {
    try {
        // Obtener todas las tareas de la base de datos
        const tasks = await Task.find();
    
        // Renderizar la vista 'tasks' y pasar las tareas como datos
        res.render('tasks', { tasks });
      } catch (error) {
        // Manejar cualquier error
        res.status(500).json({ message: error.message });
      }
    
  });
  

// Middleware
app.use(bodyParser.json());

// Conectar a la base de datos
connectDB();

// Configurar CORS
app.use(cors());

// Routes 
app.use('/api/tasks', taskRoutes);

// Manejar solicitudes POST a la ruta "api/tasks"
app.post('/api/tasks', (req, res) => {
    res.send('POST request received');
});

// Establecer variable de entorno 'PORT' si no está definida
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

