import { Sequelize } from "sequelize";


const sequelize = new Sequelize('appprueba', 'root', 'Dhrakun_1987', {
    host: 'localhost',
    dialect: 'mysql',   
});

export default sequelize;