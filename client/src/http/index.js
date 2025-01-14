import axio from "axios"

// Создание базового URL для Axios для отправки запросов в контроллеры бэка

const $host = axio.create({
    baseURL: process.env.REACT_APP_API_URL,
})

const $authHost = axio.create({
    baseURL: process.env.REACT_APP_API_URL,
})

// Интерцептор, нужен для манипуляций с токеном (не актуально)

const authInterceptor = config => {
    config.headers['Authorization']  = localStorage.getItem('token')
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}