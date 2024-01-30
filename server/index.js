require('dotenv').config()
const express = require("express")
const session = require("express-session")
const cors = require("cors")
const morgan = require("morgan")

const app = express()
const gameRouter = require("./routes/games")
const userRouter = require("./routes/user")
const favoriteRouter = require("./routes/favorites")
const connectDB = require("./database/connectDB")


app.use(cors())
app.use(session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(express.json())
app.use(morgan('tiny'))

app.get('/', (req,res) => {
    res.send("Benvenuto!")
})

app.use('/api', gameRouter)
app.use('/api', userRouter)
app.use('/api', favoriteRouter)


const port = process.env.DB_PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.DB_HOST);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();



