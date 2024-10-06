import React, { useState } from "react";
import ImageUpload from './ImageUpload';
const ProductForm = ({ addProduct }) => {
  const [name, setName] = useState("");
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState(""); 
  const [cost, setCost] = useState(""); 
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name, stock: parseInt(stock, 10), category, cost: parseFloat(cost), imageURL }); 
    setName("");
    setStock(0);
    setCategory("");
    setCost("");
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
      <ImageUpload onUpload={setImageURL} />
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
          type="number"
          placeholder="Costo del producto"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          required
          style={{ '-moz-appearance': 'textfield', '-webkit-appearance': 'none', 'appearance': 'none' }}
        />
      </label>
      <button type="submit">Agregar Producto</button>
    </form>
  );
};
export default ProductForm;
