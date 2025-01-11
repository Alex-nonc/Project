const Router = require('express')
const bookingRouter = require('./bookingRouter')
const commentRouter = require('./commentRouter')
const signupRouter = require('../routes/signupRouter')

// Определение маршрутизаций

const router = new Router()

router.use(`/booking`, bookingRouter)
router.use(`/signup`, signupRouter)
router.use(`/comment`, commentRouter)

module.exports = router