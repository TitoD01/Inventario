import React, { useState } from 'react';

const ImageUpload = ({ onUpload }) => {
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        onUpload(file); // Llama a la función onUpload para pasar la imagen al formulario
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleChange} required />
            {/* Eliminamos el botón de subir imagen */}
        </div>
    );
};

export default ImageUpload;
