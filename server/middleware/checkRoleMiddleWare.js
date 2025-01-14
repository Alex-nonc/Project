const jwt = require('jsonwebtoken');

// Проверка прав (не актуально)

module.exports = function(role){
    return function(req, res, next) {
        if (req.method === 'OPTIONS') {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                res.status(401).json({ message: "Не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.KEY)
            if (decoded.sign_up_role !== role) {
                res.status(403).json({ message: "У вас недостаточно прав"})
            }
            req.user = decoded
            next()
        } catch (err) {
            res.status(401).json({ message: "Не авторизован"})
        }
    }
}