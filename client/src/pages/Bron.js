import React from "react";
import { observer } from "mobx-react-lite";
import { useState, useEffect } from "react";
import { createBooking, createContactData, getOneContactData } from "../http/clientAPI";

const Bron = observer(() => {
  const [currentId, setCurrentId] = React.useState(1);
  const [booking_summ_prices, setTickets] = useState([]);
  const [booking_quantity, setFinalPrice] = useState(0);

  // Билеты

  const [counts, setCounts] = useState({
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0,
  });

  const prices = {
    price1: 800, // Взрослый
    price2: 500, // Детский
    price3: 600, // Студенческий
    price4: 1000, // VIP zone
  };

  const addTicket = (type) => {
    if (booking_summ_prices.length >= 10) {
      alert("Максимальное количество билетов достигнуто (10).");
      return;
    }
    const newTicket = {
      type,
      price: prices[`price${type}`],
    };
    setTickets([...booking_summ_prices, newTicket]);
    setCounts({ ...counts, [`price${type}`]: counts[`price${type}`] + 1 });
    updateFinalPrice([...booking_summ_prices, newTicket]);
  };

  const removeTicket = (index) => {
    const ticketToRemove = booking_summ_prices[index];
    const newTickets = booking_summ_prices.filter((_, i) => i !== index);
    setTickets(newTickets);

    // Обновление счетчиков
    const updatedCounts = { ...counts };
    updatedCounts[`price${ticketToRemove.type}`] -= 1;
    setCounts(updatedCounts);

    updateFinalPrice(newTickets);
  };

  const updateFinalPrice = (updatedTickets) => {
    const total = updatedTickets.reduce((acc, ticket) => acc + ticket.price, 0);
    setFinalPrice(total);
  };

  //------------------------------------------------------------------------------------------------------------------------------------------
  // Календарь

  const [currentDate, setCurrentDate] = useState(new Date());
  const [dates, setDates] = useState([]);
  const [booking_date, setSelectedDate] = useState(null);

  useEffect(() => {
    updateCalendar();
  }, [currentDate, booking_date]);

  const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const totalDays = lastDay.getDate();
    const lastDayIndex = lastDay.getDay();

    let datesArray = [];

    // Даты предыдущего месяца
    const prevMonthDays = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
    const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
    for (let i = prevMonthDays; i > 0; i--) {
      const day = prevMonthLastDay - i + 1;
      datesArray.push({ day, active: false, inactive: true });
    }

    // Даты текущего месяца
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const isActive =
        booking_date && date.toDateString() === booking_date.toDateString();
      datesArray.push({ day: i, active: isActive, inactive: false });
    }

    // Даты следующего месяца
    const nextMonthDays = 7 - lastDayIndex - 1;
    for (let i = 1; i <= nextMonthDays; i++) {
      datesArray.push({ day: i, active: false, inactive: true });
    }

    setDates(datesArray);
  };

  const prevBtn = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextBtn = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (day) => {
    const newSelectedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setSelectedDate(newSelectedDate);
  };

  const monthYearString = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  //------------------------------------------------------------------------------------------------------------------------------------------
  // Валидация 4 окна

  const [contact_data_name, setName] = useState("");
  const [contact_data_surname, setSurname] = useState("");
  const [contact_data_email, setEmail] = useState("");
  const [contact_data_phone, setPhone] = useState("");

  // Регулярные выражения для проверки
  const phoneRegex = /^\+[0-9]{10,15}$/; // Телефон должен начинаться с "+" и содержать 10-15 цифр
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email: простой формат

  const handleSubmit = async () => {
    if (!booking_date) {
      alert("Не выбрана дата!"); // Или используйте alert("Не выбрана дата!");
      return;
    }

    if (booking_quantity == 0) {
      alert("Вы не добавили ни одного билета");
      return;
    }

    // Проверка полей
    if (!contact_data_name) {
      alert("Пожалуйста, введите имя");
      return;
    }

    if (!contact_data_surname) {
      alert("Пожалуйста, введите фамилию");
      return;
    }

    if (!contact_data_phone || !phoneRegex.test(contact_data_phone)) {
      alert(
        'Введите корректный номер телефона, начинающийся с "+" (10-15 цифр)'
      );
      return;
    }

    if (contact_data_email && !emailRegex.test(contact_data_email)) {
      alert("Введите корректный email или оставьте поле пустым");
      return;
    }

    try {
      let data1
      data1 = await createContactData(
        contact_data_name,
        contact_data_surname,
        contact_data_email,
        contact_data_phone
      );
      let contact_dataID
      contact_dataID = await getOneContactData(contact_data_name, contact_data_surname, contact_data_phone);
      let data2
      for (const i in counts){
        if (counts[i] === 0){
          continue;
        }
        else {
          data2 = await createBooking(
            booking_quantity,
            booking_summ_prices,
            booking_date,
            contact_dataID,
            1
          );
        }
      }
      alert("Форма заполнена корректно!");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div>
      <>
        <section>
          <div className="bron_background">
            <div className="bron_cards">
              <div
                className="bron_card"
                style={{ justifyContent: "space-around" }}
              >
                <p style={{ fontSize: 30, paddingTop: 30 }}>Выбор даты</p>
                <div className="bron_calendar">
                  <div className="bron_calendar_header">
                    <button id="prevBtn" onClick={prevBtn}>
                      <img
                        src="source/images/chevron-left-solid.svg"
                        style={{ width: 13 }}
                        alt=""
                      />
                    </button>
                    <div class="bron_mounthYear" id="mounthYear">
                      {monthYearString}
                    </div>
                    <button id="nextBtn" onClick={nextBtn}>
                      <img
                        src="source/images/chevron-right-solid.svg"
                        style={{ width: 13 }}
                        alt=""
                      />
                    </button>
                  </div>
                  <div className="bron_days">
                    <div className="bron_day">Mon</div>
                    <div className="bron_day">Tue</div>
                    <div className="bron_day">Wed</div>
                    <div className="bron_day">Thu</div>
                    <div className="bron_day">Fri</div>
                    <div className="bron_day">Sat</div>
                    <div className="bron_day">Sun</div>
                  </div>
                  <div className="bron_dates" id="bron_dates">
                    {dates.map((date, index) => (
                      <div
                        key={index}
                        className={`bron_date ${
                          date.inactive ? "inactive" : ""
                        } ${date.active ? "active" : ""}`}
                        onClick={() =>
                          !date.inactive && handleDateClick(date.day)
                        }
                      >
                        {date.day}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ marginInline: "2vw" }} className="bron_card">
                <div className="bron_tab-menu">
                  <div className="bron_tabs">
                    <button
                      className="bron_tab"
                      onClick={() => setCurrentId(1)}
                    >
                      Взрослый
                    </button>
                    <button
                      className="bron_tab"
                      onClick={() => setCurrentId(2)}
                    >
                      Детский
                    </button>
                    <button
                      className="bron_tab"
                      onClick={() => setCurrentId(3)}
                    >
                      Студенческий
                    </button>
                    <button
                      className="bron_tab"
                      onClick={() => setCurrentId(4)}
                    >
                      VIP zone
                    </button>
                  </div>
                  <div
                    id="grown"
                    className={
                      currentId === 1 ? "bron_content active" : "bron_content"
                    }
                  >
                    <div className="bron_text-container">
                      <div className="bron_text-row">
                        - Возможность пользоваться всеми преимуществами
                        комплекса.
                      </div>
                      <div
                        style={{ backgroundColor: "#d3d3d3cc" }}
                        className="bron_text-row"
                      >
                        - Тариф от открытия до закрытия комплекса.
                      </div>
                      <div className="bron_text-row">
                        - Гарантия того, что вам достанется жезлонг.
                      </div>
                      <div
                        style={{ backgroundColor: "#d3d3d3cc" }}
                        className="bron_text-row"
                      >
                        - Обеспечение безопасности в воде и за ее пределами.
                      </div>
                      <div className="bron_text-row">
                        - Возможность приобретения алкоголя и кальянов.
                      </div>
                      <div
                        style={{ backgroundColor: "#f89224", color: "#fff" }}
                        className="bron_text-row"
                      >
                        Цена : 800 руб
                      </div>
                    </div>
                    <button id="buy1" onClick={() => addTicket(1)}>
                      В корзину
                    </button>
                  </div>
                  <div
                    id="child"
                    className={
                      currentId === 2 ? "bron_content active" : "bron_content"
                    }
                  >
                    <div className="bron_text-container">
                      <div className="bron_text-row">
                        - Возможность пользоваться всеми преимуществами
                        комплекса.
                      </div>
                      <div
                        style={{ backgroundColor: "#d3d3d3cc" }}
                        className="bron_text-row"
                      >
                        - Тариф от открытия до закрытия комплекса.
                      </div>
                      <div className="bron_text-row">
                        - Гарантия того, что вам достанется жезлонг.
                      </div>
                      <div
                        style={{ backgroundColor: "#d3d3d3cc" }}
                        className="bron_text-row"
                      >
                        - Обеспечение безопасности в воде и за ее пределами.
                      </div>
                      <div
                        style={{ backgroundColor: "#f89224", color: "#fff" }}
                        className="bron_text-row"
                      >
                        Цена : 500 руб
                      </div>
                    </div>
                    <button id="buy2" onClick={() => addTicket(2)}>
                      В корзину
                    </button>
                  </div>
                  <div
                    id="student"
                    className={
                      currentId === 3 ? "bron_content active" : "bron_content"
                    }
                  >
                    <div className="bron_text-container">
                      <div className="bron_text-row">
                        - Возможность пользоваться всеми преимуществами
                        комплекса.
                      </div>
                      <div
                        style={{ backgroundColor: "#d3d3d3cc" }}
                        className="bron_text-row"
                      >
                        - Тариф от открытия до закрытия комплекса.
                      </div>
                      <div className="bron_text-row">
                        - Гарантия того, что вам достанется жезлонг.
                      </div>
                      <div
                        style={{ backgroundColor: "#d3d3d3cc" }}
                        className="bron_text-row"
                      >
                        - Обеспечение безопасности в воде и за ее пределами.
                      </div>
                      <div className="bron_text-row">
                        - Возможность приобретения алкоголя и кальянов.
                      </div>
                      <div
                        style={{ backgroundColor: "#f89224", color: "#fff" }}
                        className="bron_text-row"
                      >
                        Цена : 600 руб
                      </div>
                    </div>
                    <button id="buy3" onClick={() => addTicket(3)}>
                      В корзину
                    </button>
                  </div>
                  <div
                    id="VIP zone"
                    className={
                      currentId === 4 ? "bron_content active" : "bron_content"
                    }
                  >
                    <div className="bron_text-container">
                      <div className="bron_text-row">
                        - Возможность пользоваться всеми преимуществами
                        комплекса.
                      </div>
                      <div
                        style={{ backgroundColor: "#d3d3d3cc" }}
                        className="bron_text-row"
                      >
                        - Тариф от открытия до закрытия комплекса.
                      </div>
                      <div className="bron_text-row">
                        - Гарантия того, что вам достанется жезлонг.
                      </div>
                      <div
                        style={{ backgroundColor: "#d3d3d3cc" }}
                        className="bron_text-row"
                      >
                        - Обеспечение безопасности в воде и за ее пределами.
                      </div>
                      <div className="bron_text-row">
                        - Возможность приобретения алкоголя и кальянов.
                      </div>
                      <div
                        style={{ backgroundColor: "#d3d3d3cc" }}
                        className="bron_text-row"
                      >
                        - Возможно находится на отдельной территории, где вас не
                        потревожат
                      </div>
                      <div
                        style={{ backgroundColor: "#f89224", color: "#fff" }}
                        className="bron_text-row"
                      >
                        Цена : 1000 руб
                      </div>
                    </div>
                    <button id="buy4" onClick={() => addTicket(4)}>
                      В корзину
                    </button>
                  </div>
                </div>
              </div>
              <div style={{ marginInline: "2vw" }} className="bron_card">
                <div className="bron_count" style={{ justifyContent: "end" }}>
                  <div className="bron_final-count">
                    <div
                      className="bron_count-container"
                      id="count-container"
                    />
                    {booking_summ_prices.map((ticket, index) => (
                      <div
                        className="bron_container-row"
                        key={index}
                        data-type={ticket.type}
                      >
                        <p>
                          {ticket.type === 1
                            ? "Взрослый - "
                            : ticket.type === 2
                            ? "Детский - "
                            : ticket.type === 3
                            ? "Студенческий - "
                            : "VIP zone - "}
                          {ticket.price} руб
                        </p>
                        <button
                          className="bron_delete"
                          onClick={() => removeTicket(index)}
                        >
                          Удалить
                        </button>
                      </div>
                    ))}
                    <div
                      className="bron_final-count-text"
                      id="final-count-text"
                    >
                      Цена: {booking_quantity}
                      <p>
                        Общее количество билетов: {booking_summ_prices.length}
                      </p>
                      <p>----------------------------</p>
                      <p>Взрослый: {counts.price1}</p>
                      <p>Детский: {counts.price2}</p>
                      <p>Студенческий: {counts.price3}</p>
                      <p>VIP zone: {counts.price4}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bron_card">
                <div className="bron_inp">
                  <div className="bron_titl">Ввод данных пользователя</div>
                  <div className="bron_main-fields">
                    <div className="bron_input-container">
                      <label htmlFor="bron_name">Имя :</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Иван"
                        value={contact_data_name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="bron_input-container">
                      <label htmlFor="surname">Фамилия :</label>
                      <input
                        type="text"
                        id="surname"
                        placeholder="Фамилия"
                        value={contact_data_surname}
                        onChange={(e) => setSurname(e.target.value)}
                      />
                    </div>
                    <div className="bron_input-container">
                      <label htmlFor="num">Номер тел.:</label>
                      <input
                        type="tel"
                        id="num"
                        placeholder="Телефон"
                        value={contact_data_phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="bron_input-container">
                      <label htmlFor="em">Email* :</label>
                      <input
                        type="email"
                        id="em"
                        placeholder="email(необязательно)"
                        value={contact_data_email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="bron_pay-button">
                    <button
                      id="payButton"
                      type="submit"
                      onClick={() => handleSubmit()}
                    >
                      Оплатить!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
});

export default Bron;
