const {DataTypes} = require("sequelize")
const database = require("../database/connectDB")
const Games = require("./Games")
const User = require("./User")


const Favorites = database.define('Favorites', {
    user : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    game: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    is_favorite: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
        allowNull: false
    }
}, {
    tableName: 'favorites',
    timestamps: false
})

Favorites.sync()

Favorites.belongsTo(User, { foreignKey: 'user' });
Favorites.belongsTo(Games, { foreignKey: 'game' });

module.exports = Favorites