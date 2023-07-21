import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Cita = sequelize.define("Cita", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.STRING
    },
    inicio: {
        type: DataTypes.STRING
    },
    fin: {
        type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
})