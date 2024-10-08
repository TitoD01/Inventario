// InventoryPage.js
import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { FaArrowLeft } from 'react-icons/fa'; // Importa el icono de flecha

const InventoryPage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [, setFilter] = useState("Todos");
  const navigate = useNavigate(); // Inicializa useNavigate

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsArray);
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      product.name.toLowerCase().includes(lowerSearchTerm) ||
      product.category.toLowerCase().includes(lowerSearchTerm)
    );
  });

  return (
    <div className="container inventory-page">
      <button onClick={() => navigate('/')} className="back-button">
        <FaArrowLeft /> Volver al Inicio
      </button>
      <h1>Visualización del Inventario</h1>
      <input
        type="text"
        placeholder="Buscar por nombre o categoría"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default InventoryPage;
