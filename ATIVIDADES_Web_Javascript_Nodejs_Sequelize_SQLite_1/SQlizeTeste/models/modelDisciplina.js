import { DataTypes } from "sequelize";
import sequelize from "../config/bd.js";

const Disciplina = sequelize.define('disciplina', {
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    ch: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true
        }
    },
    professor: {
        type: DataTypes.STRING,
        allowNull: false
    }

},
    {
        tableName: 'DiscSeq',
        timestamps: false
    }
)


export default Disciplina