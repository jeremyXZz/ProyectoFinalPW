import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
export const Estudiante=sequelize.define("Estudiante",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    correo:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    nombre:{
        type: DataTypes.STRING
    },
    apellido:{
        type: DataTypes.STRING
    },
    tipodni:{
        type: DataTypes.STRING
    },
    dni:{
        type: DataTypes.INTEGER
    },
    rol:{
        type: DataTypes.STRING
    }


}, {    
    freezeTableName: true
})