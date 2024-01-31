const express = require("express")
const router = express.Router()
const userController = require("../controller/user.controller")



router.get('/user', userController.usersList)
router.get('/user/:userId', userController.singleUser)
router.post('/signup', userController.signup)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/auth', userController.auth)

module.exports = router