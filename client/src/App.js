import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoter from './components/AppRouter';
import NavBar from './components/NavBar';

export default function App(){
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRoter/>
    </BrowserRouter>);
}