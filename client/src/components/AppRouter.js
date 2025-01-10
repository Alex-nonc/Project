import React, { Component, useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {adminRoutes, publicRoutes} from '../routes'
import { MAIN_ROUTE } from '../utils/consts';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Routes>
            {user.isAuth && adminRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path="*" element={<Navigate to={MAIN_ROUTE} />}/>
        </Routes>
    );
}

export default AppRouter;