import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Menu from './components/Menu.jsx';
import MultiplayerPage from './components/MultiplayerPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/bot" element={<App />} />
        <Route path="/local" element={<App />} />
        <Route path="/multiplayer" element={<MultiplayerPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
