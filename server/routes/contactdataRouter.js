const Router = require('express')
const contactdataController = require('../controllers/contactdataController')

// Маршрутизация для контактных данных

const router = new Router()

router.post('/', contactdataController.createContactData) 
router.post('/getLastOne', contactdataController.getLastOne) 
router.delete('/delete', contactdataController.delete)

module.exports = router