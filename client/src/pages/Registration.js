import React, { useState } from "react";
import { LOGIN_ROUTE } from "../utils/consts";
import { NavLink } from "react-router-dom";
import { registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";

const Registration = observer(() => {

  const [sign_up_email, setEmail] = useState('')
  const [sign_up_passwd, setPasswd] = useState('')
  const [sign_up_phone, setPhone] = useState('')
  const [sign_up_name, setName] = useState('')

  const sign_in = async () => { // Функция регистрации в аккаунт
    try{
      let data
      data = await registration(sign_up_email, sign_up_passwd, sign_up_phone, sign_up_name)
      alert('Вы зарегистрированы')
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <div>
      <form id="login_form">
        <h1 id="login_name">Регистрация</h1>
        <label className="login_inputs">
          <p className="reg_email">Почта:</p>
          <input className="login_input_data" value={sign_up_email} onChange={e => setEmail(e.target.value)}/>
        </label>
        <label className="login_inputs">
          <p className="reg_email">Пароль:</p>
          <input className="login_input_data" value={sign_up_passwd} onChange={e => setPasswd(e.target.value)}/>
        </label>
        <label className="login_inputs">
          <p className="reg_email">Телефон:</p>
          <input className="login_input_data" value={sign_up_phone} onChange={e => setPhone(e.target.value)}/>
        </label>
        <label className="login_inputs">
          <p className="reg_email">Имя:</p>
          <input className="login_input_data" value={sign_up_name} onChange={e => setName(e.target.value)}/>
        </label>
        <p>
          <NavLink to={LOGIN_ROUTE}>
            <button className="login_btn">Вернуться на страницу входа</button>
          </NavLink>
        </p>
        <p>
            <button className="login_btn" type="button" onClick={sign_in}>Регистрация</button>
        </p>
      </form>
    </div>
  );
});

export default Registration;
