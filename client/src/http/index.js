import axio from "axios"

const $host = axio.create({
    baseURL: 'http://localhost:5000/',
})

const $authHost = axio.create({
    baseURL: 'http://localhost:5000/',
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}