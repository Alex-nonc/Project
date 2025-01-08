import React, { useContext, useState } from 'react';
import { MAIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { NavLink, useNavigate } from 'react-router-dom';
import { login } from '../http/userAPI';
import { Context } from '../index';
import {observer} from 'mobx-react-lite'

const Login = observer(() => {

    const {user} = useContext(Context)
    const [sign_up_email, setEmail] = useState('')
    const [sign_up_passwd, setPasswd] = useState('')

    const sign_up = async () => { 
        try {
            let data
            data = await login(sign_up_email, sign_up_passwd)
            user.setIsAuth(true)
            user.setUser(user)
        } catch (e) {
            alert(e.response.data.message)
        }
    } 

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
                <h1 id="login_name">Вход</h1>
                <label className="login_inputs">
                    <p>Почта:</p>
                    <input className="login_input_data" name="email" value={sign_up_email} onChange={e => setEmail(e.target.value)}/>
                </label>
                <label className="login_inputs">
                    <p>Пароль:</p>
                    <input className="login_input_data" name="password" value={sign_up_passwd} onChange={e => setPasswd(e.target.value)}/>
                </label>
                <p>
                <button className="login_btn" onClick={sign_up}>Войти</button>
                </p>
                <p>
                <NavLink to={REGISTRATION_ROUTE}>
                    <button className="login_btn">
                    Регистрация
                    </button>
                </NavLink>
                </p>
            </form>
        </div>
    );
})

export default Login;