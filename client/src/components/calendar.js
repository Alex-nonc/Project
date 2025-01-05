import { useEffect } from "react";

const monthYearElement = document.getElementById('mounthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentDate = new Date();
const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay(); // День недели первого дня
    const lastDay = new Date(currentYear, currentMonth + 1, 0); // Последний день месяца
    const totalDays = lastDay.getDate();
    const lastDayIndex = lastDay.getDay(); // День недели последнего дня месяца

    const monthYearString = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    monthYearElement.textContent = monthYearString;

    let datesHTML = '';

    // Даты предыдущего месяца
    const prevMonthDays = firstDayIndex === 0 ? 6 : firstDayIndex - 1; // Определяем количество дней для отображения
    const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
    for (let i = prevMonthDays; i > 0; i--) {
        const day = prevMonthLastDay - i + 1;
        datesHTML += `<div class="date inactive">${day}</div>`;
    }

    // Даты текущего месяца
    for (let i = 1; i <= totalDays; i++) {
        const date = new Date(currentYear, currentMonth, i);
        const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
        datesHTML += `<div class="date ${activeClass}">${i}</div>`;
    }

    // Даты следующего месяца
    const nextMonthDays = 7 - lastDayIndex - 1; // Определяем количество дней для отображения
    for (let i = 1; i <= nextMonthDays; i++) {
        datesHTML += `<div class="date inactive">${i}</div>`;
    }

    datesElement.innerHTML = datesHTML;

    // Привязываем обработчики кликов к датам после обновления контента
    const dates = document.querySelectorAll('.date'); // Теперь выбираем .date после обновления календаря
    dates.forEach(date => {
        date.addEventListener('click', () => {
            dates.forEach(d => d.classList.remove('active'));
            date.classList.add('active');
        });
    });
};

function prevBtnClick() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
}

function nextBtnClick(){
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
}

export default updateCalendar;