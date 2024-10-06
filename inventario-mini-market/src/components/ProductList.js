import React from 'react';

const ProductList = ({ products, updateStock }) => {
    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    <div>
                        <h3>{product.name}</h3>
                        <p>Categoría: {product.category}</p>
                        <p>Stock: {product.stock}</p>
                        <p>Costo: ${product.cost ? product.cost.toFixed(2) : 'N/A'}</p> {/* Verifica si cost está definido */}
                        {product.imageURL && (
                            <img 
                                src={product.imageURL} 
                                alt={product.name} 
                                style={{ width: '100px', height: 'auto' }} 
                            />
                        )}
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
