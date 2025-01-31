import React from 'react';
import { NavLink } from 'react-router-dom';
import { MAIN_ROUTE } from '../utils/consts';
import Calendar1 from '../components/Calendar1';
import Tabs1 from '../components/Tabs.jsx';

const Bron = () => {
    return (
        <div>
            <>
  <header>
    <nav className="sticky">
      <div className="navbar">
        <ul className="navlist-1">
          <li>
          <NavLink to = {MAIN_ROUTE}>
            <a style={{ fontSize: 20 }}>
              <img
                style={{ width: 12 }}
                src="images/arrow-right-solid.svg"
                alt=""
              />
              Вернуться на главную
            </a>
          </NavLink>
          </li>
        </ul>
        <div className="right">
          <div className="number">+7 (923) 507-30-70</div>
          <div className="social-media-images">
            <a href="https://vk.com/hypebeachnvkz" target="_blank">
              <img src="images/vk.png" alt="" />
            </a>
            <a
              href="https://www.instagram.com/hype_beach_?igsh=NTc4MTIwNjQ2YQ=="
              target="_blank"
            >
              <img src="images/instagram.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <section>
    <div className="background">
      <div className="cards">
        <div className="card" style={{ justifyContent: "space-around" }}>
          <p>Выбор даты</p>
          <Calendar1 />
        </div>
        
          <Tabs1 />
     
        
        <div className="card">
          <div className="inp">
            <div className="titl">Ввод данных пользователя</div>
            <div className="main-fields">
              <div className="input-container">
                <label htmlFor="name">Имя :</label>
                <input type="text" id="name" placeholder="Иван" />
              </div>
              <div className="input-container">
                <label htmlFor="surname">Фамилия :</label>
                <input type="text" id="surname" placeholder="Фамилия" />
              </div>
              <div className="input-container">
                <label htmlFor="num">Номер тел.:</label>
                <input type="tel" id="num" placeholder="Телефон" />
              </div>
              <div className="input-container">
                <label htmlFor="em">Email* :</label>
                <input
                  type="email"
                  id="em"
                  placeholder="email(необязательно)"
                />
              </div>
            </div>
            <div className="pay-button">
              <button id="payButton">Оплатить!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <script>
    
  </script>
</>

        </div>
    );
}

export default Bron;