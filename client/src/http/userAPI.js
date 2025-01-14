import { $host, $authHost } from "../http/index";
import {jwtDecode} from "jwt-decode"

// Вызов контроллеров по запросам через axios для не авторизованных пользователей (в index.js)

export const registration = async (sign_up_email, sign_up_passwd, sign_up_phone, sign_up_name) => { // Создание записи в БД в таблице Sign_up
    const {data} = await $host.post("api/signup/registration", {sign_up_email, sign_up_passwd, sign_up_phone, sign_up_name, sign_up_role:"client"});
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (sign_up_email, sign_up_passwd) => { // Запрос записи в БД из таблицы Sign_up
    const {data} = await $host.post("api/signup/login", {sign_up_email, sign_up_passwd});
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const getName = async (sign_up_email) => { // Запрос имени в БД из таблицы Sign_up
    const {data} = await $host.post("api/signup/getName", {sign_up_email});
    return data
}

export const getAll = async () => { // Запрос всех записей в БД из таблицы Sign_up
    const {data} = await $host.post("api/comment/getAll", {Headers: {
        'Cache-Control': 'no-cache', // Запрет кэширования
      }});
    return data
} 

export const commentPost = async (comments_date, comments_name, comments_comment, comments_sign_up_id) => { // Создание записи в БД из таблицы Comments
    const {data} = await $host.post("api/comment", {comments_date, comments_name, comments_comment, comments_sign_up_id})
    return data
}

export const check = async () => { // Запрос из локального хранилища токена (не актуально)
    const {data} = await $host.post("api/auth");
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}