import { DataTypes } from 'sequelize';
import db from '../config/connectdb';

const Mensaje = db.define('mensaje',{
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    asunto: {
        type: DataTypes.STRING
    },
    textomensaje: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
}
);

export default Mensaje;