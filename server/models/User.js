const {DataTypes} = require("sequelize")
const database = require("../database/connectDB")
const bcrypt = require("bcrypt")

const User = database.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [7, 255]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            const hashedPassword = bcrypt.hashSync(value, 10)
            this.setDataValue('password', hashedPassword)
        }
    }
}, {
    tableName: 'user',
    timestamps: false
})

module.exports = User