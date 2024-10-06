// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inventory from './components/Inventory';  // El formulario para agregar productos
import InventoryPage from './components/InventoryPage';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Página de inicio */}
        <Route path="/visualizar-inventario" element={<InventoryPage />} />  {/* Visualizar inventario */}
        <Route path="/agregar-producto" element={<Inventory />} />  {/* Formulario para agregar productos */}
      </Routes>
    </Router>
  );
}

export default App;
