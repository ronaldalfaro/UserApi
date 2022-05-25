import mongoose from "mongoose";

//User Schema
const userSchema = new mongoose.Schema({
    id_number:{
        type: Number,
        required: [true, 'Por favor la cédula'],
    },
    first_name:{
        type: String,
        required: [true, 'Por favor ingresa el nombre']
    },
    last_name:{
        type: String,
        required: [true, 'Por favor ingresa los apellidos']
    },
    type:{
        type:String,
        required:[true,'Por favor ingresa un tipo/rol de usuario'],
        enum: ['Administrador', 'Inventario', 'Cajero', 'Vendedor'],
        default:'Vendedor'
    },
    created:{
        type: Date,
        default: Date.now
    }
});

//Exporting User model
module.exports = mongoose.model('User', userSchema);