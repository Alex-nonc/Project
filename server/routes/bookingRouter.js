const Router = require('express')
const bookingController = require('../controllers/bookingController')

// Маршрутизация для брони

const router = new Router()

router.post('/', bookingController.create)
router.get('/', bookingController.getAll)
router.get('/:id', bookingController.getOne)
router.delete('/delete', bookingController.delete)

module.exports = router