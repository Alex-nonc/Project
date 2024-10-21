const Router = require('express')
const bookingController = require('../controllers/bookingController')

const router = new Router()

router.post('/', bookingController.create)
router.get('/:id', bookingController.getOne)

module.exports = router