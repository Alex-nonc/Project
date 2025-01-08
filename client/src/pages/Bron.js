import React from "react";
import { NavLink } from "react-router-dom";
import { MAIN_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const Bron = observer(() => {
  return (
    <div>
      <>
        <header>
          <nav className="sticky">
            <div className="navbar">
              <ul className="navlist-1">
                <li>
                  <NavLink to={MAIN_ROUTE}>
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
                <p style={{ fontSize: 30, paddingTop: 30 }}>Выбор даты</p>
                <div className="calendar">
                  <div className="calendar_header">
                    <button id="prevBtn" onclick={() => this.prevBtn()}>
                      <img
                        src="images/chevron-left-solid.svg"
                        style={{ width: 13 }}
                        alt=""
                      />
                    </button>
                    <div
                      className="mounthYear"
                      id="mounthYear"
                      onclick="mounthYearClick"
                    />
                    <button id="nextBtn" onclick={() => this.nextBtn()}>
                      <img
                        src="images/chevron-right-solid.svg"
                        style={{ width: 13 }}
                        alt=""
                      />
                    </button>
                  </div>
                  <div className="days">
                    <div className="day">Mon</div>
                    <div className="day">Tue</div>
                    <div className="day">Wed</div>
                    <div className="day">Thu</div>
                    <div className="day">Fri</div>
                    <div className="day">Sat</div>
                    <div className="day">Sun</div>
                  </div>
                  <div className="dates" id="dates" />
                </div>
              </div>
              <div style={{ marginInline: "2vw" }} className="card">
                <div className="tab-menu">
                  <div className="tabs">
                    <div
                      className="tab active"
                      onclick="changerulesslides(event,'grown')"
                    >
                      Взрослый
                    </div>
                    <div
                      className="tab"
                      onclick="changerulesslides(event,'child')"
                    >
                      Детский
                    </div>
                    <div
                      className="tab"
                      onclick="changerulesslides(event,'student')"
                    >
                      Студенческий
                    </div>
                    <div
                      className="tab"
                      onclick="changerulesslides(event,'VIP zone')"
                    >
                      VIP zone
                    </div>
                  </div>
                  <div id="grown" className="content active">
                    <div className="text-container">
                      <div className="text-row">
                        - Возможность пользоваться всеми преимуществами
                        комплекса.
                      </div>
                      <div
                        style={{ backgroundColor: "#d3d3d3cc" }}
                        className="text-row"
                      >
                        - Тариф от открытия до закрытия комплекса.
                      </div>
                      <div className="text-row">
                        - Гарантия того, что вам достанется жезлонг.
                      </div>
                      <div
                        style={{ backgroundColor: "#d3d3d3cc" }}
                        className="text-row"
                      >
                        - Обеспечение безопасности в воде и за ее пределами.
                      </div>
                      <div className="text-row">
                        Возможность приобретения алкоголя и кальянов.
                      </div>
                      <div
                        style={{ backgroundColor: "#f89224", color: "#fff" }}
                        className="text-row"
                      >
                        Цена : 800 руб
                      </div>
                    </div>
                    <button id="buy1">В корзину</button>
                  </div>
                  <div id="child" className="content">
                    <div className="text-container">
                      <div className="text-row">
                        - Возможность пользоваться всеми преимуществами
                        комплекса.
                      </div>
                      <div
                        style={{ backgroundColor: "#d3d3d3cc" }}
                        className="text-row"
                      >
                        - Тариф от открытия до закрытия комплекса.
                      </div>
                      <div className="text-row">
                        - Гарантия того, что вам достанется жезлонг.
                      </div>
                      <div
                        style={{ backgroundColor: "#d3d3d3cc" }}
                        className="text-row"
                      >
                        - Обеспечение безопасности в воде и за ее пределами.
                      </div>
                      <div
                        style={{ backgroundColor: "#f89224", color: "#fff" }}
                        className="text-row"
                      >
                        Цена : 500 руб
                      </div>
                    </div>
                    <button id="buy2">В корзину</button>
                  </div>
                  <div id="student" className="content">
                    <div className="text-container">
                      <div className="text-row">
                        - Возможность пользоваться всеми преимуществами
                        комплекса.
                      </div>
                      <div
                        style={{ backgroundColor: "#d3d3d3cc" }}
                        className="text-row"
                      >
                        - Тариф от открытия до закрытия комплекса.
                      </div>
                      <div className="text-row">
                        - Гарантия того, что вам достанется жезлонг.
                      </div>
                      <div
                        style={{ backgroundColor: "#d3d3d3cc" }}
                        className="text-row"
                      >
                        - Обеспечение безопасности в воде и за ее пределами.
                      </div>
                      <div className="text-row">
                        Возможность приобретения алкоголя и кальянов.
                      </div>
                      <div
                        style={{ backgroundColor: "#f89224", color: "#fff" }}
                        className="text-row"
                      >
                        Цена : 600 руб
                      </div>
                    </div>
                    <button id="buy3">В корзину</button>
                  </div>
                  <div id="VIP zone" className="content">
                    <div className="text-container">
                      <div className="text-row">
                        - Возможность пользоваться всеми преимуществами
                        комплекса.
                      </div>
                      <div
                        style={{ backgroundColor: "#d3d3d3cc" }}
                        className="text-row"
                      >
                        - Тариф от открытия до закрытия комплекса.
                      </div>
                      <div className="text-row">
                        - Гарантия того, что вам достанется жезлонг.
                      </div>
                      <div
                        style={{ backgroundColor: "#d3d3d3cc" }}
                        className="text-row"
                      >
                        - Обеспечение безопасности в воде и за ее пределами.
                      </div>
                      <div className="text-row">
                        Возможность приобретения алкоголя и кальянов.
                      </div>
                      <div
                        style={{ backgroundColor: "#d3d3d3cc" }}
                        className="text-row"
                      >
                        Возможно находится на отдельной территории, где вас не
                        потревожат
                      </div>
                      <div
                        style={{ backgroundColor: "#f89224", color: "#fff" }}
                        className="text-row"
                      >
                        Цена : 1000 руб
                      </div>
                    </div>
                    <button id="buy4">В корзину</button>
                  </div>
                </div>
              </div>
              <div style={{ marginInline: "2vw" }} className="card">
                <div className="count" style={{ justifyContent: "end" }}>
                  <div className="final-count">
                    <div className="count-container" id="count-container" />
                    <div className="final-count-text" id="final-count-text">
                      Цена: 0
                    </div>
                  </div>
                </div>
              </div>
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
      </>
    </div>
  );
});

export default Bron;
