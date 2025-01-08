import { $host, $authHost } from "../http/index";
import { jwtDecode } from "jwt-decode";

export const registration = async (sign_up_email, sign_up_passwd, sign_up_phone, sign_up_name) => {
    const {data} = await $host.post("api/signup/registration", {sign_up_email, sign_up_passwd, sign_up_phone, sign_up_name, sign_up_role:"client"});
    return jwtDecode(data.token)
}

export const login = async (sign_up_email, sign_up_passwd) => {
    const {data} = await $host.post("api/signup/login", {sign_up_email, sign_up_passwd});
    return jwtDecode(data.token)
}

export const check = async () => {
    const response = await $host.post("api/auth");
    return response
}