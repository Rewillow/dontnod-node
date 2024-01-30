require('dotenv').config()
const express = require("express")
const session = require("express-session")
const cors = require("cors")
const morgan = require("morgan")
const PORT = 5000
const app = express()
const gameRouter = require("./routes/games")
const userRouter = require("./routes/user")
const favoriteRouter = require("./routes/favorites")
const crypto = require("crypto")
const connectDB = require("./database/connectDB")


app.use(session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.get('/', (req,res) => {
    res.send("Benvenuto!")
})

app.use('/api', gameRouter)
app.use('/api', userRouter)
app.use('/api', favoriteRouter)


app.listen(PORT, () => {
    console.log(`Server attivo nella porta ${PORT}`);
})




