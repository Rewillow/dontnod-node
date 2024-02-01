require('dotenv').config()
const express = require("express")
const session = require("express-session")
const cors = require("cors")
const morgan = require("morgan")
const app = express()
const connectDB = require("./database/index")



app.use(cors())
app.use(session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(express.urlencoded({extended:false}))
app.use(express.json())
// app.use(morgan('tiny'))

const favoriteRouter = require("./routes/favorite.router")
const gamesRouter = require("./routes/games.router")
const userRouter = require("./routes/user.router")


app.use('/api', gamesRouter)
app.use('/api', userRouter)
app.use('/api', favoriteRouter)

const PORT = process.env.DB_PORT || 5000

app.listen(PORT, () => {
  console.log(`Il server è attivo alla porta ${PORT}`);
})






