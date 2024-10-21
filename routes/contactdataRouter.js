const Router = require('express')
const contactdataController = require('../controllers/contactdataController')

const router = new Router()

router.post('/', contactdataController.create) 
router.get('/', contactdataController.getAll)

module.exports = router