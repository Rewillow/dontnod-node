require('dotenv').config()
const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

connection.query(`
CREATE TABLE IF NOT EXISTS favorites (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user BIGINT,
    game BIGINT,
    is_favorite TINYINT(1)
)
`)