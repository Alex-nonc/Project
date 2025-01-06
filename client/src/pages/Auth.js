import React from 'react';
import { MAIN_ROUTE } from '../utils/consts';
import { NavLink } from 'react-router-dom';
const Auth = () => {
    return (
        <div>
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
            <form id="login_form">
                <h1 id="login_name">Авторизация</h1>
                <label className="login_inputs">
                    <p>Почта:</p>
                    <input className="login_input_data" type="text" name="phone" />
                </label>
                <label className="login_inputs">
                    <p>Пароль:</p>
                    <input className="login_input_data" type="text" name="password" />
                </label>
                <p>
                <input className="login_btn" type="submit" value="Войти" />
                </p>
                <p>
                <input className="login_btn" type="submit" value="Регистрация" />
                </p>
            </form>
        </div>
    );
}

export default Auth;