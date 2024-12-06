import React from 'react';

const Auth = () => {
    return (
        <div>
            <h1>Авторизация</h1>
            <form>
                <label>
                    Почта:
                    <input type="text" name="phone" />
                </label>
                <label>
                    Пароль:
                    <input type="password" name="password" />
                </label>
                <input type="submit" value="Войти" />
            </form>
        </div>
    );
}

export default Auth;