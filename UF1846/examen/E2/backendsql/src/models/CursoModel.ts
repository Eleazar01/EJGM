import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

const Curso = sequelize.define('cursos',{
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    categoria: {
        type: DataTypes.STRING
    },
    duracion: {
        type: DataTypes.NUMBER
    },
    temas: {
        type: DataTypes.STRING
    },
    imagen: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false,
    // freezeTableName: true
}
);

export default Curso;