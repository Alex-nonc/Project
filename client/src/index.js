import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import UserSite from './site/UserSite.js';
import "../src/components/calendar"
import "../src/components/rules"

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider value={{
    user: new UserSite()
  }}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Context.Provider>
);