import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Block React Router logs in both development and production
const suppressAllReactRouterLogs = () => {
  const originalError = console.error;
  const originalWarn = console.warn;

  // Override console.error to suppress React Router related logs
  console.error = (...args) => {
    // Prevent any React Router logs from being shown
    if (args[0] && args[0].includes("React Router")) {
      return; 
    }
    originalError(...args);
  };

  // Override console.warn to suppress React Router related warnings
  console.warn = (...args) => {
    // Prevent React Router warnings from being shown
    if (args[0] && args[0].includes("React Router")) {
      return; 
    }
    originalWarn(...args);
  };
};

suppressAllReactRouterLogs();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
