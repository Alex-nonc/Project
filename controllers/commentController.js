const {Comments} = require('../db_models/db_models.js');
const ApiError = require('../error_handler/ApiError.js');

// Контроллер по post/get для хранения комментариев на главной странице

class CommentController {
    async create(req, res) {
        const {comments_date, comments_comment} = req.body
        const comments = await Comments.create({comments_date, comments_comment})
        return res.json(comments)
    }
    async getAll(req, res) {
        const comments = await Comments.findAll()
        return res.json(comments)
    }
}

module.exports = new CommentController()