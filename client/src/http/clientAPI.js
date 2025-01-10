import { $host, $authHost } from "../http/index";

export const createContactData = async (contact_data_name, contact_data_surname, contact_data_email, contact_data_phone) => {
    const response = await $host.post("api/contactdata", {contact_data_name, contact_data_surname, contact_data_email, contact_data_phone});
    return response
}

export const createBooking = async (booking_quantity, booking_summ_prices, booking_date) => {
    const response = await $host.post("api/booking", {booking_quantity, booking_summ_prices, booking_date});
    return response
}