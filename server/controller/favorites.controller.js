const express = require("express")
const router = express.Router()
const Favorites = require("../models/Favorites");



const favoriteController = {
    addGame: async(req,res) => {
        const gameId = req.params.gameId;  // Leggi il parametro dalla URL
        const { userId } = req.body;
        try {
            if (!userId || !gameId) {
                return res.status(400).send('ID utente e ID gioco sono obbligatori');
            }
            await Favorites.create({
                user: userId,
                game: gameId,
                is_favorite: true
            }),
            res.status(200).json({message: "Gioco aggiunto ai preferiti", userId, gameId})
        } catch(err) {
            console.error("Errore", err);
            res.status(500).json({error: "Errore durante l'aggiunta ai preferiti", err})
        }
    },
    removeGame: async(req,res) => {
        const gameId = req.params.gameId;  // Leggi il parametro dalla URL
        const { userId } = req.body;
        try {
            await Favorites.destroy({
                where: {
                    user: userId,
                    game: gameId,
                    is_favorite: 1
                }
            });
            res.status(200).json({message: "Gioco rimosso dai preferiti", userId, gameId})
        } catch(err) {
            res.status(400).json({error: "Errore nella rimozione dai preferiti", err})
        }
    },
    listFavorites: async (req, res) => {
        try {
            const favorites = await Favorites.findAll({
                where: {
                    is_favorite: 1
                }
            });
            res.status(200).json(favorites);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Errore durante la verifica dei preferiti"});
        }
    },
    
    userFavorites: async (req, res) => {
        const userId = req.params.userId;
        try {
            const favorites = await Favorites.findAll({
                where: {
                    user: userId, // user fa riferimento al modello User che hai creato
                    is_favorite: 1
                }
            });
            if (favorites.length > 0) {
                res.status(200).json(favorites);
            } else {
                res.status(404).json({ error: "Nessun preferito trovato per l'utente specificato" });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Errore durante la verifica dei preferiti", err });
        }
    }
}



module.exports = favoriteController


// router.post('/listGames/:gameId/add')
// router.post('/listGames/:gameId/remove') 
// router.get('/listFavorites')
// router.get('/listFavorites/:userId')