const ApiError = require('../error_handler/ApiError.js')

class SignUpController {
    async registration(req, res) {
    }
    async login(req, res) {
    }
    async logcheck(req, res, next) {
        const {id} = req.query
        if (!id){
            return next(ApiError.badRequest(`No id`))
        }
        res.json(id);
    }
}

module.exports = new SignUpController()