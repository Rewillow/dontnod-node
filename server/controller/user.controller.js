require('dotenv').config()
const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const {Op} = require("sequelize")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

const userController = {
// Per ricevere la lista di tutti gli utenti
usersList: async (req, res) => {
    const userId = req.params.id
    try {
        const getUsers = await User.findAll(userId)
        res.status(200).json(getUsers)
    } catch(err) {
        res.status(500).json({error: "Impossibile ricevere la lista",})
    }
},
singleUser: async(req,res) => {
    const userId = req.params.userId
    try {
        const getUser = await User.findByPk(userId)
        if (getUser) {
            res.json(getUser)
        } else {
            res.status(404).json({message: "Utente non trovato"})
        }
    } catch(err) {
        console.error(err);
    }
},

// Per permettere la registrazione utente
// router.post('/signup', async(req,res) => {
//     const {username, email, password} = req.body
//     try {
//         const existingUser = await User.findOne({where: {[Op.or]: [{ username },{ email }]}});
//         if(existingUser) {
//             return res.status(400).json({error: "Utente già registrato"})
//         }
//         const newUser = await User.create({username, email, password})
//         req.session.auth = true
//         res.status(201).json({message: "Registrazione effettuata con successo", newUser})
//     } catch(err) {
//         console.error("Errore durante la creazione dell'utente");
//         res.status(500).json({error: "Errore interno del server", err})
//     }
// })

signup: async(req,res) => {
    const {username, email, password} = req.body
    try {
        const existingUser = await User.findOne({where: {[Op.or]: [{ username },{ email }]}});
        if(existingUser) {
            return res.status(400).json({error: "Utente già registrato"})
        }
        const newUser = await User.create({username, email, password})
        // Crea un token JWT
        const token = jwt.sign(
            { userId: newUser.id }, // payload
            process.env.JWT_SECRET, // segreto
            { expiresIn: '1h' } // opzioni
        );
        req.session.auth = true
        res.status(201).json({message: "Registrazione effettuata con successo", newUser, token})
    } catch(err) {
        console.error("Errore durante la creazione dell'utente");
        res.status(500).json({error: "Errore interno del server", err})
    }
},
login: async(req,res) => {
    const {email, password} = req.body
    try {
        const existingUser = await User.findOne({where: {[Op.or]: [{ email },{ password }]}})
        if(existingUser) {
            const passwordMatch = await bcrypt.compare(password, existingUser.password)
            if (passwordMatch) {
                // Crea un token JWT
                const token = jwt.sign(
                    { userId: existingUser.id }, // payload
                    process.env.JWT_SECRET, // segreto
                    { expiresIn: '1h' } // opzioni
                );
                req.session.auth = true
                res.status(200).json({message:"Accesso effettuato", token})
            } else {
                return res.status(401).json({message: "Dati non corretti"})
            }
        } else {
            return res.status(401).json({error: "Dati non corretti"})
        }
    } catch(err) {
        console.error("Errore durante l'accesso");
        return res.status(500).json({error: "Errore interno del server"})
    }
},

// Per permettere l'accesso all'utente
// router.post('/login', async(req,res) => {
//     const {email, password} = req.body
//     try {
//         const existingUser = await User.findOne({where: {email}})
//         if(existingUser) {
//             const passwordMatch = await bcrypt.compare(password, existingUser.password)
//             if (passwordMatch) {
//                 req.session.auth = true
//                 return res.status(200).json({message:"Accesso effettuato"})
//             } else {
//                 return res.status(401).json({message: "Dati non corretti"})
//             }
//         } else {
//             return res.status(401).json({error: "Dati non corretti"})
//         }
//     } catch(err) {
//         console.error("Errore durante l'accesso");
//         return res.status(500).json({error: "Errore interno del server"})
//     }
// })

// Per permettere all'utente di scollegarsi
logout: async(req,res) => {
    req.session.auth = false
    try {
        res.status(200).json({message: "Logout effettuato con successo"})
    } catch(err) {
        res.status(500).json({error: "Errore nella disconnessione"})
    }
},

// router.post('/login', async(req,res) => {
//     const {email, password} = req.body
//     try {
//         const existingUser = await User.findOne({where: {email}})
//         if(existingUser) {
//             const passwordMatch = await bcrypt.compare(password, existingUser.password)
//             if (passwordMatch) {
//                 // Crea un token JWT
//                 const token = jwt.sign(
//                     { userId: existingUser.id }, // payload
//                     process.env.JWT_SECRET, // segreto
//                     { expiresIn: '1h' } // opzioni
//                 );
//                 return res.status(200).json({message:"Accesso effettuato", token})
//             } else {
//                 return res.status(401).json({message: "Dati non corretti"})
//             }
//         } else {
//             return res.status(401).json({error: "Dati non corretti"})
//         }
//     } catch(err) {
//         console.error("Errore durante l'accesso");
//         return res.status(500).json({error: "Errore interno del server"})
//     }
// })

// Rotta di autenticazione
// router.get('/authh', async (req, res) => {
//     const token = req.headers.authorization;
//     if (!token) {
//         return res.status(401).json({ authenticated: false, error: "Errore nell'autenticazione" });
//     }
//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const existingUser = await User.findByPk(decoded.userId);
//         console.log(existingUser);
//         if (existingUser) {
//             return res.status(200).json({ authenticated: true, message: "Autenticato" });
//         } else {
//             return res.status(401).json({ authenticated: false, error: "Errore nell'autenticazione" });
//         }
//     } catch (err) {
//         console.error("Errore durante l'autenticazione", err);
//         return res.status(401).json({ authenticated: false, error: "Errore nell'autenticazione" });
//     }
// });

auth: (req,res) => {
    const isAuthenticated = req.session.auth
    if(isAuthenticated) {
        res.status(200).json({authenticated: true, message:"Utente autenticato"})
    } else {
        res.status(401).json({ authenticated: false, message: 'Utente non autenticato' });
    }
}
}

module.exports = userController