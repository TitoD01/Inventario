import React from 'react';

const ProductList = ({ products, updateStock }) => {

    // Función para formatear el costo a pesos chilenos
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);
    };

    return (
        <ul className="product-list">
            {products.map((product) => (
                <li key={product.id} className="product-item">
                    {product.imageURL && (
                        <img 
                            src={product.imageURL} 
                            alt={product.name} 
                        />
                    )}
                    <div className="product-details">
                        <h3>{product.name}</h3>
                        <p>Categoría: {product.category}</p>
                        <p>Stock: {product.stock}</p>
                        {/* Usar la función formatCurrency para mostrar el costo en CLP */}
                        <p>Costo: {product.cost ? formatCurrency(product.cost) : 'N/A'}</p>
                        <input 
                            type="number" 
                            defaultValue={product.stock} 
                            onChange={(e) => updateStock(product.id, e.target.value)} 
                        />
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ProductList;
