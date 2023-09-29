import { DataTypes } from 'sequelize';
import db from '../config/connectdb';

const Mensaje = db.define('mensajes',{
    remite: {
        type: DataTypes.STRING
    },
    mail: {
        type: DataTypes.STRING
    },
    asunto: {
        type: DataTypes.STRING
    },
    mensaje: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
}
);

export default Mensaje;