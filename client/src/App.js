import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoter from './components/AppRouter';
import NavBar from './components/NavBar';

// Функция для видимости роутеров страницы и навигации

export default function App(){
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRoter/>
    </BrowserRouter>);
}