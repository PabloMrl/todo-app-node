import mongoose from "mongoose";

const { Schema, model } = mongoose;

// Función para invertir el formato de la hora de derecha a izquierda


const taskSchema = new mongoose.Schema({
    id: String,
    title: String,
    completed: Boolean,
    dateAdded: {
        type: Date,
        default: Date.now // Esto establece la fecha de forma automática al momento de agregar la tarea
    }
});

export default model('Task', taskSchema);
