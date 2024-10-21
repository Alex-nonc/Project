const Router = require('express')
const bookingRouter = require('./bookingRouter')
const commentRouter = require('./commentRouter')
const contactdataRouter = require('./contactdataRouter')
const signupRouter = require('../routes/signupRouter')

const router = new Router()

router.use(`/bookingRouter`, bookingRouter)
router.use(`/signup`, signupRouter)
router.use(`/contactdata`, contactdataRouter)
router.use(`/comment`, commentRouter)

module.exports = router