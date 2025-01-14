import React, { useContext, useState } from "react";
import { REGISTRATION_ROUTE } from "../utils/consts";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../http/userAPI";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const Login = observer(() => {
  const { user } = useContext(Context);
  const [sign_up_email, setEmail] = useState("");
  const [sign_up_passwd, setPasswd] = useState("");

  const sign_up = async () => { // Функция входа в аккаунт
    try {
      let data;
      data = await login(sign_up_email, sign_up_passwd);
      localStorage.setItem("sign_up_email", sign_up_email); // Запись email в локальное хранилище для отзывов
      user.setIsAuth(true); // Смена state на true
      user.setUser({ data }); // Запись данных
      alert("Вы вошли в свой аккаунт");
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div>
      <form id="login_form">
        <h1 id="login_name">Вход</h1>
        <label className="login_inputs">
          <p>Почта:</p>
          <input
            className="login_input_data"
            name="email"
            value={sign_up_email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="login_inputs">
          <p>Пароль:</p>
          <input
            className="login_input_data"
            type="password"
            name="password"
            value={sign_up_passwd}
            onChange={(e) => setPasswd(e.target.value)}
          />
        </label>
        <p>
          <button className="login_btn" type="button" onClick={() => sign_up()}>
            Войти
          </button>
        </p>
        <p>
          <NavLink to={REGISTRATION_ROUTE}>
            <button className="login_btn">Регистрация</button>
          </NavLink>
        </p>
      </form>
    </div>
  );
});

export default Login;
