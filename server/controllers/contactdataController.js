const {Contact_data} = require('../db_models/db_models.js');
// Контроллер по post/get для контактных данных для бронирующего билет(ы)

class ContactdataController {
    async createContactData(req, res) {
        const {contact_data_name, contact_data_surname, contact_data_email, contact_data_phone} = req.body
        const contact_data = await Contact_data.create({contact_data_name, contact_data_surname, contact_data_email, contact_data_phone})
        return res.json(contact_data)
    }
    async getAll(req, res) {
        const contact_data = await Contact_data.findAll()
        return res.json(contact_data)
    }
    async getOne(req, res) {
        const contact_data = await Contact_data.findOne({where: {contact_data}})
        return res.json(contact_data)
    }
    async delete(req, res) {
        const {contact_data_email} = req.body
        const user = await Contact_data.destroy({where : {contact_data_email}})
        return res.json({message : "Удалено"})
    }
}

module.exports = new ContactdataController()