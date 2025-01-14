import { $host, $authHost } from "../http/index";

// Вызов контроллеров по запросам через axios для не авторизованных пользователей (в index.js)

export const createContactData = async (contact_data_name, contact_data_surname, contact_data_email, contact_data_phone) => {  // Создание записи в БД в таблице Contact_data
    const response = await $host.post("api/contactdata", {contact_data_name, contact_data_surname, contact_data_email, contact_data_phone});
    return response
}

export const getLastOne = async () => { // Запрос последнего ID в Contact_data
    const response = await $host.post("api/contactdata/getLastOne");
    return response
}

export const createBooking = async (booking_quantity, booking_summ_prices, booking_date, booking_client_id, booking_type_client_id) => { // Создание записи в БД в таблице Booking
    const response = await $host.post("api/booking", {booking_quantity, booking_summ_prices, booking_date, booking_client_id, booking_type_client_id});
    return response
}