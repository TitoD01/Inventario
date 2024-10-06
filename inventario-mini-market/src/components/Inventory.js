import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import { db } from "./firebase";  
import { collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";

const Inventory = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState("Todos");

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
        <div>
            <h1>Inventario del Mini Market</h1>
            <ProductForm addProduct={addProduct} />
            <select onChange={(e) => setFilter(e.target.value)}>
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
