import React, { useState } from 'react';

const ImageUpload = ({ onUpload }) => {
    const [,setImage] = useState(null);

    const handleChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        onUpload(file); // Llama a la función onUpload para pasar la imagen al formulario
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleChange} required />
        </div>
    );
};

export default ImageUpload;
