import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoter from './components/AppRouter';
import "../src/components/calendar"
import "../src/components/rules"
export default function App(){
  return (
    <BrowserRouter>
      <AppRoter/>
    </BrowserRouter>);
}