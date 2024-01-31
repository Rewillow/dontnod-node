const express = require("express")
const router = express.Router()
const favoriteController = require("../controller/favorites.controller")


router.post('/listGames/:gameId/add', favoriteController.addGame)
router.post('/listGames/:gameId/remove', favoriteController.removeGame) 
router.get('/listFavorites', favoriteController.listFavorites)
router.get('/listFavorites/:userId', favoriteController.userFavorites)

module.exports = router

