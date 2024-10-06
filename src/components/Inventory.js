import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import { db } from "./firebase";  
import { collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { FaArrowLeft } from 'react-icons/fa'; // Importa el icono de flecha

const Inventory = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState("Todos");
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

    const addProduct = async (product) => {
        const docRef = await addDoc(collection(db, "products"), product);
        setProducts([...products, { id: docRef.id, ...product }]);
        console.log("Producto agregado: ", product);
    };

    const updateStock = async (id, newStock) => {
        const productRef = doc(db, "products", id);
        await updateDoc(productRef, { stock: newStock });
        setProducts(products.map(p => p.id === id ? { ...p, stock: newStock } : p));
    };

    const filteredProducts = filter === "Todos" 
        ? products 
        : products.filter(product => product.category === filter);

    return (
        <div className="container inventory">
            <button onClick={() => navigate('/')} className="back-button">
                <FaArrowLeft /> Volver al Inicio
            </button>
            <h1>Inventario del Mini Market</h1>
            <ProductForm addProduct={addProduct} />
            <select className="filter-select" onChange={(e) => setFilter(e.target.value)}>
                <option value="Todos">Todos</option>
                <option value="Alimentos">Alimentos</option>
                <option value="Bebidas">Bebidas</option>
                <option value="Limpieza">Limpieza</option>
                <option value="Otros">Otros</option>
            </select>
            <ProductList products={filteredProducts} updateStock={updateStock} />
        </div>
    );
};

export default Inventory;
