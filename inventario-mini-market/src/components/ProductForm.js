import React, { useState } from "react";
import ImageUpload from './ImageUpload';

const ProductForm = ({ addProduct }) => {
  const [name, setName] = useState("");
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState(""); // Nueva categoría
  const [cost, setCost] = useState(""); // Campo de costo
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name, stock: parseInt(stock, 10), category, cost: parseFloat(cost), imageURL }); // Asegúrate de convertir a float
    setName("");
    setStock(0);
    setCategory("");
    setCost(""); // Reinicia el campo de costo
    setImageURL('');
  };

  return (
    <form onSubmit={handleSubmit}>
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

      {/* Campo para el costo */}
      <label>
        Precio:
        <input
          type="number" // Mantener como tipo number
          placeholder="Costo del producto"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          required
          style={{ '-moz-appearance': 'textfield', '-webkit-appearance': 'none', 'appearance': 'none' }} // Eliminar flechas
        />
      </label>
      <br />
      <button type="submit">Agregar Producto</button>
    </form>
  );
};

export default ProductForm;
