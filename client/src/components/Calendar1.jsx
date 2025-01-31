import chevronleft from "./chevron-left-solid.svg";
import chevronright from "./chevron-right-solid.svg";
import "./Calendar.css";
import { useState } from "react";

const currentDate = new Date();

export default function Calendar1() {


  const [currentDate, setCurrentDate] = useState(new Date());
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay(); // День недели первого дня
  const lastDay = new Date(currentYear, currentMonth + 1, 0); // Последний день месяца
  const totalDays = lastDay.getDate();
  const lastDayIndex = lastDay.getDay(); // День недели последнего дня месяца
  const prevMonthDays = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

  function nextMonth() {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  }

  function prevMonth() {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);

    const today = new Date();
    if (
      newDate.getFullYear() > today.getFullYear() ||
      (newDate.getFullYear() === today.getFullYear() &&
        newDate.getMonth() >= today.getMonth())
    ) {
      setCurrentDate(newDate);
    }
  }
  function PrevDay({ dayindex }) {
    return <div class="date inactive">{dayindex}</div>;
  }
  const Day = ({ dayindex, inactive }) => {
    const [isActive, setIsActive] = useState(false);
  
    return (
      <div 
        className={`date ${inactive ? "inactive" : ""} ${isActive ? "active" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        {dayindex}
      </div>
    );
  };



  
  const renderPrevMonthDays = () => {
    const prevMonthDays = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
    const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
    const prevMonthDaysElements = [];
    
    for (let i = prevMonthDays; i > 0; i--) {
        const day = prevMonthLastDay - i + 1;
        prevMonthDaysElements.push(<PrevDay key={`prev-${day}`} dayindex={day} inactive={true} />);
    }

    return prevMonthDaysElements;
};

const renderMonthDays = () => {
    const today = new Date();
    const MonthDaysElements = [];

    for (let i = 1; i <= totalDays; i++) {
        const currentDay = new Date(currentYear, currentMonth, i);
        const isInactive = currentDay < today.setHours(0, 0, 0, 0); // Дни до сегодняшнего - неактивны

        MonthDaysElements.push(
            <Day key={`day-${i}`} dayindex={i} inactive={isInactive} />
        );
    }

    return MonthDaysElements;
};


  // let datesHTML = '';

  // // Даты предыдущего месяца
  // const prevMonthDays = firstDayIndex === 0 ? 6 : firstDayIndex - 1; // Определяем количество дней для отображения
  // const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
  // for (let i = prevMonthDays; i > 0; i--) {
  //     const day = prevMonthLastDay - i + 1;
  //     datesHTML += `<div class="date inactive">${day}</div>`;
  // }

  // // Даты текущего месяца
  // for (let i = 1; i <= totalDays; i++) {
  //     const date = new Date(currentYear, currentMonth, i);
  //     const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
  //     datesHTML += `<div class="date ${activeClass}">${i}</div>`;
  // }

  // // Даты следующего месяца
  // const nextMonthDays = 7 - lastDayIndex - 1; // Определяем количество дней для отображения
  // for (let i = 1; i <= nextMonthDays; i++) {
  //     datesHTML += `<div class="date inactive">${i}</div>`;
  // }

  // datesElement.innerHTML = datesHTML;

  // // Привязываем обработчики кликов к датам после обновления контента
  // const dates = document.querySelectorAll('.date'); // Теперь выбираем .date после обновления календаря
  // dates.forEach(date => {
  //     date.addEventListener('click', () => {
  //         dates.forEach(d => d.classList.remove('active'));
  //         date.classList.add('active');
  //     });
  // });
  // }
  return (
    <div className="calendar">
      <div className="calendar_header">
        <button id="prevBtn" onClick={prevMonth}>
          <img src={chevronleft} style={{ width: "10px" }} />
        </button>

        <div className="mounthYear" id="mounthYear">
          {currentDate
            .toLocaleString("default", { month: "long", year: "numeric" })
            .toUpperCase()}
        </div>
        <button id="nextBtn" onClick={nextMonth}>
          <img src={chevronright} style={{ width: "10px" }} alt="" />
        </button>
      </div>
      <div class="days">
        <div class="day">Mon</div>
        <div class="day">Tue</div>
        <div class="day">Wed</div>
        <div class="day">Thu</div>
        <div class="day">Fri</div>
        <div class="day">Sat</div>
        <div class="day">Sun</div>
      </div>
      <div class="dates" id="dates">
        
      {renderPrevMonthDays()}
      {renderMonthDays()}
      
      </div>  
    </div>
  );
}

