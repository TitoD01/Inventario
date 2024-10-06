// HomePage.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import '../App.css'; // Asegúrate de importar tu CSS

const HomePage = () => {
  const navigate = useNavigate(); // Inicializa useNavigate

  return (
    <div className="home-page">
      <h1>Bienvenido al Mini Market</h1>
      <div className="options">
        <button className="home-button" onClick={() => navigate('/visualizar-inventario')}>
          Ver Inventario
        </button>
        <button className="home-button" onClick={() => navigate('/agregar-producto')}>
          Agregar Producto
        </button>
      </div>
    </div>
  );
};

export default HomePage;
