import { $host, $authHost } from "../http/index";
import {jwtDecode} from "jwt-decode"

export const registration = async (sign_up_email, sign_up_passwd, sign_up_phone, sign_up_name) => {
    const {data} = await $host.post("api/signup/registration", {sign_up_email, sign_up_passwd, sign_up_phone, sign_up_name, sign_up_role:"client"});
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (sign_up_email, sign_up_passwd) => {
    const {data} = await $host.post("api/signup/login", {sign_up_email, sign_up_passwd});
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const comment = async (comments_data, comments_name, comments_comment) => {
    const {data} = await $host.post("api/comment", {comments_data, comments_name, comments_comment})
    return data
}

export const check = async () => {
    const {data} = await $host.post("api/auth");
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}