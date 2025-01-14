import React from "react";
import { observer } from "mobx-react-lite";
import { useState, useContext, useEffect } from "react";
import { Context } from "../index";
import { commentPost, getAll, getName } from "../http/userAPI";

const Blog = observer(() => {
  const [comments_comment, setComment] = useState(""); // useState - хук, который запоминает значение. Нужен в тегах
  const [comments_date, setDate] = useState(null);
  const [comments, setComments] = useState([]);

  const { user } = useContext(Context);

  // Функция вывода всех комментариев

  const loadComments = async () => {
    let data;
    data = await getAll();
    setComments(data);
  };

  // useEffect - хук, который продолжает работу loadComments после рендера страницы

  useEffect(() => {
    const interval = setInterval(() => {
      loadComments(); // Периодически загружаем комментарии
    }, 200); // Обновляем каждые 200 милисекунд

    return () => clearInterval(interval);
  }, []);

  // Функция добавления комментария

  const Post_up = async () => {
    if (comments_comment.trim().length < 2) {
      alert("Комментарий должен содержать хотя бы 2 буквы.");
      return;
    }
    try {
      let data;
      const data_email = localStorage.getItem("sign_up_email"); // Получаем значение из локального хранилища
      let userName = await getName(data_email); // Получение имени и ID авторизованного пользователя
      data = await commentPost(
        comments_date,
        userName.sign_up_name,
        comments_comment,
        userName.sign_up_id
      );
      alert("Комментарий добавлен");
    } catch (e) {
      alert(e.message);
    }
  };

  // Определение возможности оставить комментарий если авторизован пользователь или нет

  let Post = user.isAuth ? (
    <>
      <label className="lbl_comment_user_block">
        <label className="lbl_comment_user_block">Написать комментарий</label>
        <p>
          <textarea
            className="textarea_comment_user_block"
            name="comment"
            value={comments_comment}
            onChange={(e) => {
              setDate(new Date());
              setComment(e.target.value);
            }}
          ></textarea>
        </p>
      </label>
      <button id="add_comment" onClick={() => Post_up()}>
        Добавить комментарий
      </button>
    </>
  ) : (
    <label className="lbl_comment_user_block">
      Для добавления комментария авторизируйтесь
    </label>
  );
  // Вывод всех комментариев
  return (
    <div className="comment_position">
      {comments.map((comment, index) => (
        <div key={index} className="comment_blocks">
            <label className="lbl_comment_block">
              {"Имя: "+comment.comments_name + "  "}({"Дата публикации: " + new Date(comment.comments_date).toLocaleDateString()})
            </label>
            <textarea disabled className="textarea_comment_block">
              {comment.comments_comment}
            </textarea>
        </div>
      ))}
      <div className="comment_user_block">{Post}</div>
    </div>
  );
});

export default Blog;
