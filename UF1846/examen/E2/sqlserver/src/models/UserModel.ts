import { DataTypes } from 'sequelize';
import db from '../config/connectdb';

const Usuario = db.define('usuarios',{
    nombre: {
        type: DataTypes.STRING
    },
    apellidos: {
        type: DataTypes.STRING
    },
    Fnacimiento: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    tipo: {
        type: DataTypes.STRING
    },
    foto: {
        type: DataTypes.STRING
    },
    anotaciones: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
}
);

export default Usuario;