import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'normalize.css'
import './scss/main.scss'
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";

const container = document.getElementById('root');
const root = createRoot(container)
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App tab='home'/>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

