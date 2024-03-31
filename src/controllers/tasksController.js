// Importar el modelo de tareas

import Task from '../models/task.js';

// Middleware
export const getTask = async (req, res, next) => {
    let task; 
    const {taskId} = req.params;

    //verificar si el ID de la tarea es válido
    if(!taskId.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({ message: 'Task not found' });
    }

    try {
    // BUSQUEDA DE TAREA POR ID
    task = await Task.findById(taskId);
    // Si la tarea no existe, devolver un error 404
    if(!task) {
        return res.status(404).json(
            { message: 'Task not found' });
    }
    } catch (error) {

        // Si hay un error al buscar la tarea, enviar un mensaje de error
        return res.status(500).json({
            message: error.message
        });
    }
// Si la tarea existe y no hay errores, adjuntar la tarea al objeto 'req'
req.task = task;
next();
}


// Controlador para obtener todas las tareas
export const getAllTask = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// Controlador para obtener una tarea por su ID
export const getTaskById = async (req, res) => {
    res.json(req.task);
};

// Crear una nueva tarea
export const createTask = async (req, res) => {
    
    //Extraer  los datos del cuerpo de la solicitud
    const {title, completed} = req.body;
    // Validar las tareas
    if(!title|| completed === undefined) {
        return res.status(400).json({ message: 'Title and completed are required' });
    }
    // Crear una nueva tarea
    const task = new Task({
        title,
        completed,
        dateAdded: new Date()    
    });

    try {
        const existingTask = await Task.findOne({ title });

        // Si se encuentra una tarea existente, devolver un mensaje indicando que ya existe
        if (existingTask) {
            return res.status(409).json({ message: 'La tarea ya existe' });
        }
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Modificar una tarea por su ID
export const updateTaskById = async (req, res) => {
    const {taskId} = req.params;
    const {title, completed} = req.body;
    try{
        // Verificar si la tarea existe
        const existingTask = await Task.findById(taskId);
        if (!existingTask) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        // Actualizar la tarea con los datos proporcionados
        existingTask.title = title;
        existingTask.completed = completed;
        existingTask.dateAdded = new Date();
        const updatedTask = await existingTask.save();
        res.json(updatedTask);
    } catch(error){
        res.status(400).json({ message: error.message });}
}

// ELiminar tareas  por ID
export const deleteTaskById = async (req, res) => {
    const { taskId } = req.params;

    try {
        // Buscar la tarea por su ID y eliminarla
        const deletedTask = await Task.findByIdAndDelete(taskId);

        // Si no se encuentra la tarea, devolver un mensaje indicando que no se encontró
        if (!deletedTask) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }

        // Si se encuentra y se elimina la tarea, devolver la tarea eliminada como respuesta
        res.json(deletedTask);
    } catch (error) {
        // Si hay un error al eliminar la tarea, devolver un mensaje de error
        res.status(500).json({ message: error.message });
    }
}


//Controler views pug index.pug
// export const renderTasksView = async (req, res) => {
//     try {
//         const tasks = await Task.find();
//         res.render('index', { tasks });
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message });
//       }
// }

// Función para renderizar la vista de tareas
// Controlador para renderizar la vista de tareas
