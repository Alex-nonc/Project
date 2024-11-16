const Router = require('express')
const router = new Router()
const signupController = require('../controllers/signupController')

// Маршрутизация для регистрации

router.post('/registration', signupController.registration)
router.post('/login', signupController.login)
router.get('/auth', signupController.logcheck)

module.exports = router