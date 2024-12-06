const Router = require('express')
const signupController = require('../controllers/signupController')
const authMiddleware = require('../middleware/authMiddleWare')

// Маршрутизация для регистрации
const router = new Router()

router.post('/registration', signupController.registration)
router.post('/login', signupController.login)
router.get('/auth', authMiddleware, signupController.logcheck)
router.delete('/delete', signupController.delete)

module.exports = router