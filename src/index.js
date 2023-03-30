import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextLanguageProvider } from './context/ContextLanguage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextLanguageProvider>
      <App />
    </ContextLanguageProvider>
  </React.StrictMode>
);

