import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";  // Importar Storage

// Configuración de Firebase para tu app web
const firebaseConfig = {
  apiKey: "AIzaSyC22AIoja9elwnDP3YhxcN73sqELBVAtSw",
  authDomain: "inventariomarket-81418.firebaseapp.com",
  databaseURL: "https://inventariomarket-81418-default-rtdb.firebaseio.com",
  projectId: "inventariomarket-81418",
  storageBucket: "inventariomarket-81418.appspot.com",
  messagingSenderId: "617219300234",
  appId: "1:617219300234:web:0d0f4aa7811e4edde64673",
  measurementId: "G-R3DSHX18Z1"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore (Base de Datos)
const db = getFirestore(app);
const storage = getStorage(app); // Inicializa Storage

export { db, storage  };
