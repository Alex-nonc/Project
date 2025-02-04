const jwt = require('jsonwebtoken');

// Проверка токена и оповещение

module.exports = function(req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            res.status(401).json({ message: "Не авторизован"})
        }
        const decoded = jwt.verify(token, process.env.KEY)
        req.user = decoded
        next()
    } catch (err) {
        res.status(401).json({ message: "Не авторизован"})
    }
}