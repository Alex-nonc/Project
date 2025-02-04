const ApiError = require('../error_handler/ApiError.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Sign_up } = require('../db_models/db_models')

// Функция генерации токена на 24ч

const generateJwt = function(sign_up_id, sign_up_email, sign_up_role) {
    return token = jwt.sign(
        {sign_up_id, sign_up_email, sign_up_role}, 
        process.env.KEY,
        {expiresIn: '24h'}
    )
}

// Контроллер по post/get для регистрации или авторизации пользователей

class SignUpController {
    async registration(req, res, next) {
        const {sign_up_id, sign_up_phone, sign_up_email, sign_up_passwd, sign_up_name, sign_up_role} = req.body
        if (!sign_up_passwd || !sign_up_email) {
            return next(ApiError.badRequest(`Неккоретный email или password`))
        }
        const candidate = await Sign_up.findOne({where: {sign_up_email}})
        if (candidate) {
            return next(ApiError.badRequest(`Пользователь с таким email уже зарегистрирован`))
        }
        const hashedPasswd = await bcrypt.hash(sign_up_passwd, 5)
        const user = await Sign_up.create({sign_up_id, sign_up_phone, sign_up_email, sign_up_passwd: hashedPasswd, sign_up_name, sign_up_role})
        const token = generateJwt(user.sign_up_id, user.sign_up_email, user.sign_up_passwd, user.sign_up_role)
        return res.json({token})
    }
    async login(req, res, next) {
        const {sign_up_email, sign_up_passwd} = req.body
        const user = await Sign_up.findOne({ where: {sign_up_email}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(sign_up_passwd, user.sign_up_passwd) // Дешифрование пароля
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.sign_up_id, user.sign_up_email, user.sign_up_role)
        return res.json({token})
    }
    async logcheck(req, res) { // Провверка токена
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
    async getName(req, res) { // Вывод имени и ID
        const {sign_up_email} = req.body
        const name = await Sign_up.findOne({attributes: ['sign_up_name','sign_up_id'], where: {sign_up_email}}) 
        return res.json(name)
    }
    async delete(req, res) { // Удаление (не нужно)
        const {sign_up_email} = req.body
        const user = await Sign_up.destroy({where : {sign_up_email}})
        return res.json({message : `Удален пользователь: ${sign_up_email}`})
    }
}

module.exports = new SignUpController()