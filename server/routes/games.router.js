const express = require("express")
const router = express.Router()
const gamesController = require("../controller/games.controller")


router.get('/listGames', gamesController.listGames)
router.get('/listGames/:gameId', gamesController.singleGame)


module.exports = router