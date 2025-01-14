const {Contact_data} = require('../db_models/db_models.js');
// Контроллер по post/get для контактных данных для бронирующего билет(ы)

class ContactdataController {
    async createContactData(req, res) { // Создание контактных данных в БД при броне
        const {contact_data_name, contact_data_surname, contact_data_email, contact_data_phone} = req.body
        const contact_data = await Contact_data.create({contact_data_name, contact_data_surname, contact_data_email, contact_data_phone})
        return res.json(contact_data)
    }
    async getAll(req, res) { // Вывод всех контактных данных в БД при броне (не нужно)
        const contact_data = await Contact_data.findAll()
        return res.json(contact_data)
    }
    async getLastOne(req, res) { // Запрос последнего ID записи контактных данных
        const lastRecord = await Contact_data.findOne({
            attributes: ['contact_data_id'],
            order: [['contact_data_id', 'DESC']],
        });
        return res.json(lastRecord)
    }
    async delete(req, res) { // Удаление контактных данных (не нужно)
        const {contact_data_email} = req.body
        const user = await Contact_data.destroy({where : {contact_data_email}})
        return res.json({message : "Удалено"})
    }
}

module.exports = new ContactdataController()