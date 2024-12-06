const ApiError = require('../error_handler/ApiError');

// Мидлвейр (в разработке)
module.exports = function (err, req, res, next) {{
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message });
    } 
    return res.status(500).json({ message: 'Internal Server Error' });
}};