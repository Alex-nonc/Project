const {Booking} = require('../db_models/db_models.js');
const ApiError = require('../error_handler/ApiError.js');

// Контроллер по post/get для брони билетов

class BookingController {
    async createBooking(req, res) {
        const {booking_quantity, booking_summ_prices, booking_date} = req.body
        const booking = await Booking.create({booking_quantity, booking_summ_prices, booking_date, ContactDatumContactDataId, TypeClientTypeClientId})
        return res.json(booking)
    }
    async getAll(req, res) {
        const booking = await Booking.findAll()
        return res.json(booking)
    }
    async getOne(req, res) {
        const {id} = req.params
        const booking = await Booking.findOne(
            {where: {booking_id: id}}
        )
        return res.json(booking)
    }
    async delete(req, res) {
        const {id} = req.params
        const booking = await Booking.findByPk(id)
        if (!booking) {
            return next(ApiError.internal('Бронь не найдена'))
        }
        await booking.destroy()
        return res.status(204).send()
    }
}

module.exports = new BookingController()