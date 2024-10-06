import React, { useState } from 'react';
import { storage } from './firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ImageUpload = ({ onUpload }) => {
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleUpload = () => {
        if (!image) return;

        const imageRef = ref(storage, `images/${image.name}`);
        uploadBytes(imageRef, image).then(() => {
            getDownloadURL(imageRef).then((url) => {
                onUpload(url); // Pasar la URL a la función que la maneja
            });
        });
    };

    return (
        <div>
            <input type="file" onChange={handleChange} />
            <button type="button" onClick={handleUpload}>Subir Imagen</button>
        </div>
    );
};

export default ImageUpload;
