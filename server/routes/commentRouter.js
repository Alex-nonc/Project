const Router = require('express')
const commentController = require('../controllers/commentController')

// Маршрутизация для комментариев

const router = new Router()

router.post('/', commentController.create)
router.post('/getAll', commentController.getAll)
router.delete('/delete', commentController.delete)

module.exports = router