import axio from "axios"

const $host = axio.create({
    baseURL: process.env.REACT_APP_API_URL,
})

const $authHost = axio.create({
    baseURL: process.env.REACT_APP_API_URL,
})


const authInterceptor = config => {
    config.headers['Authorization']  = localStorage.getItem('token')
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}