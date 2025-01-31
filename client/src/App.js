import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoter from './components/AppRouter';
import "../src/components/Calendar1"
import "../src/components/rules"
export default function App(){
  return (
    <BrowserRouter>
      <AppRoter/>
    </BrowserRouter>);
}