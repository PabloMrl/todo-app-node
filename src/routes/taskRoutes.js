// Routes/taskRoutes.js

import express from 'express';

import * as tasksController from '../controllers/tasksController.js';

const router = express.Router();



// Rutas

// // Obtener todas las tareas
// router.get('/', async (req, res) => {
  
//     try {
//         const tasks = await Task.find();
//         res.json(tasks);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // Ruta para obtener una tarea por su ID
// router.get('/:taskId', getTask, (req, res) => {
//     res.json(req.task);

// })

// // Ruta para crear una nueva tarea
// router.post('/', async (req, res) => {

//     //Extraer  los datos del cuerpo de la solicitud
//     const {title, completed} = req.body;
//     // Validar las tareas
//     if(!title|| completed === undefined) {
//         return res.status(400).json({ message: 'Title and completed are required' });
//     }
//     // Crear una nueva tarea
//     const task = new Task({
//         title,
//         completed,
//         dateAdded: new Date()    
//     });

//     try {
//         const existingTask = await Task.findOne({ title });

//         // Si se encuentra una tarea existente, devolver un mensaje indicando que ya existe
//         if (existingTask) {
//             return res.status(409).json({ message: 'La tarea ya existe' });
//         }
//         const newTask = await task.save();
//         res.status(201).json(newTask);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// // Ruta para eliminar una tarea
// router.delete('/:taskId', async (req, res) => {
//     const { taskId } = req.params;

//     try {
//         // Buscar la tarea por su ID y eliminarla
//         const deletedTask = await Task.findByIdAndDelete(taskId);

//         // Si no se encuentra la tarea, devolver un mensaje indicando que no se encontró
//         if (!deletedTask) {
//             return res.status(404).json({ message: 'Tarea no encontrada' });
//         }

//         // Si se encuentra y se elimina la tarea, devolver la tarea eliminada como respuesta
//         res.json(deletedTask);
//     } catch (error) {
//         // Si hay un error al eliminar la tarea, devolver un mensaje de error
//         res.status(500).json({ message: error.message });
//     }
// });
router.get('/:taskId', tasksController.getTask, (req, res) => {
    res.json(req.task); // Utilizar la tarea adjunta en el objeto 'req'
});
router.get('/', tasksController.getAllTask);
router.get('/:taskId', tasksController.getTaskById);
router.post('/', tasksController.createTask);
router.delete('/:taskId', tasksController.deleteTaskById);
router.put('/:taskId', tasksController.updateTaskById);



export default router;