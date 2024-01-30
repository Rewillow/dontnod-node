const express = require("express")
const router = express.Router()
const Games = require('../models/Games')

router.get('/listGames', async(req,res) => {
    try {
        const allGames = await Games.findAll()
        res.json(allGames)
    } catch (err) {
        console.error("Errore nel recupero della lista", err);
    }
})

router.get('/listGames/:gameId', async (req, res) => {
    const gameId = req.params.gameId;
    try {
      const singleGame = await Games.findByPk(gameId);
      if (singleGame) {
        res.json(singleGame);
      } else {
        res.status(404).json({ error: 'Gioco non trovato' });
      }
    } catch (err) {
      console.error("Errore durante la ricerca del gioco:", err);
      res.status(500).json({ error: 'Errore interno del server' });
    }
  });

module.exports = router