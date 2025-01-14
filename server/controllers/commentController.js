const {Comments} = require('../db_models/db_models.js');
const ApiError = require('../error_handler/ApiError.js');

// Контроллер по post/get для хранения комментариев на главной странице

class CommentController {
    async create(req, res) { // Создание комментария в БД
        const {comments_date, comments_name, comments_comment, comments_sign_up_id} = req.body
        const comments = await Comments.create({comments_date, comments_name, comments_comment, comments_sign_up_id})
        return res.json(comments)
    }
    async getName(req, res) { // Запрос имени из комментария (не нужно)
        const {comments_comment} = req.body
        const comments = await Comments.findOne({where: {comments_comment}})
        return res.json(comments)
    }
    async getAll(req, res) { // Вывод всех комментариев
        const comments = await Comments.findAll()
        return res.json(comments)
    }
    async delete(req, res) { // Удаление комментария по ID
        const {id} = req.body
        const comment = await Comments.findByPk(id)
        if (!comment) {
            return next(ApiError.internal('Комментарий не найден'))
        }
        await comment.destroy()
        return res.json({message: 'Комментарий удален'})
    }
}

module.exports = new CommentController()