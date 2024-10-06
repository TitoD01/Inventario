import React from 'react';

const ProductList = ({ products, updateStock }) => {
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
                        <p>Costo: ${product.cost ? product.cost.toFixed(2) : 'N/A'}</p>
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
