import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import UserSite from './site/UserSite';

export const Context = createContext(null) // Начальный контекст для state 

// Рендер страниц и инициализация state

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider value={{
    user: new UserSite()
  }}>
    <App />
  </Context.Provider>
);
