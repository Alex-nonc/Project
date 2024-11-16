const Router = require('express')
const commentController = require('../controllers/commentController')

// Маршрутизация для комментариев

const router = new Router()

router.post('/', commentController.create)
router.get('/', commentController.getAll)

module.exports = router