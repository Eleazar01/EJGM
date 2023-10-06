import { DataTypes } from 'sequelize';
import db from '../config/connectdb';

const Archivo = db.define('Archivo',{
    idusuario: {
        type: DataTypes.STRING
    },
    filename: {
        type: DataTypes.STRING
    },
    path: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
}
);

export default Archivo;