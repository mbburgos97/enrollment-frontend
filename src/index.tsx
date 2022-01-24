import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './pages/App';
import { CustomProvider } from "./CustomProvider"

ReactDOM.render(
  <React.StrictMode>
    <CustomProvider >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CustomProvider>
  </React.StrictMode>,
  document.getElementById('root')
);