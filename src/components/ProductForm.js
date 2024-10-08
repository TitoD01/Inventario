import React, { useState } from "react";
import ImageUpload from './ImageUpload';
import { storage } from './firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ProductForm = ({ addProduct }) => {
  const [name, setName] = useState("");
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState(""); 
  const [cost, setCost] = useState(""); 
  const [image, setImage] = useState(null); // Almacena la imagen
  const [, setImageURL] = useState(''); // Almacena la URL de la imagen

  // Función para formatear el costo a pesos chilenos
  const formatCurrency = (value) => {
    if (!value) return "";
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);
  };

  const handleCostChange = (e) => {
    const inputCost = e.target.value;
    // Eliminar cualquier símbolo de peso y formatear el número de nuevo
    const numericCost = inputCost.replace(/\D/g, "");
    setCost(numericCost);
  };

  const handleImageChange = (file) => {
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar si hay una imagen para subir
    if (image) {
      const imageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imageRef, image);
      const url = await getDownloadURL(imageRef);
      setImageURL(url); // Establece la URL de la imagen

      // Agregar el producto con la URL de la imagen
      addProduct({ 
        name, 
        stock: parseInt(stock, 10), 
        category, 
        cost: parseFloat(cost), 
        imageURL: url // Usa la URL de la imagen cargada
      });
    } else {
      // Agregar el producto sin imagen (si es necesario)
      addProduct({ 
        name, 
        stock: parseInt(stock, 10), 
        category, 
        cost: parseFloat(cost), 
        imageURL: '' // O manejarlo de otra manera
      });
    }

    // Reiniciar el formulario
    setName("");
    setStock(0);
    setCategory("");
    setCost("");
    setImage(null);
    setImageURL('');
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input
        type="text"
        placeholder="Nombre del producto"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        required
      />
      <ImageUpload onUpload={handleImageChange} /> {/* Cambia a usar el nuevo manejador */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Seleccionar Categoría</option>
        <option value="Alimentos">Alimentos</option>
        <option value="Bebidas">Bebidas</option>
        <option value="Limpieza">Limpieza</option>
        <option value="Otros">Otros</option>
      </select>
      <label>
        Precio:
        <input
          type="text"
          placeholder="Costo del producto"
          value={formatCurrency(cost)} // Mostrar el valor formateado
          onChange={handleCostChange} // Capturar la entrada del usuario
          required
          style={{ '-moz-appearance': 'textfield', '-webkit-appearance': 'none', 'appearance': 'none' }}
        />
      </label>
      <button type="submit">Agregar Producto</button>
    </form>
  );
};

export default ProductForm;
