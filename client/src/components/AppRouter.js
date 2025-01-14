import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {adminRoutes, publicRoutes} from '../routes'
import { MAIN_ROUTE } from '../utils/consts';
import { Context } from '../index';

// Роутер на котором идет прогрузка всех роутов 

const AppRouter = () => {
    const {user} = useContext(Context) // Контекст state-состояния (нужен для определения, авторизован ли пользователь)

    console.log(user)
    return (
        <Routes>
            {user.isAuth && adminRoutes.map(({path, Component}) => // Вывод роута для Admin панели (ее нет)
            <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) => // Вывод роута для пользователей
            <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path="*" element={<Navigate to={MAIN_ROUTE} />}/>
        </Routes>
    );
}

export default AppRouter;