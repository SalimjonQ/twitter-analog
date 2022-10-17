import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App'
import AppHeader from './components/AppHeader';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);