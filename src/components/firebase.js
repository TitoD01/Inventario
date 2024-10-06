import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";  // Importar Storage

// Configuración de Firebase para tu app web
const firebaseConfig = {
  apiKey: "AIzaSyC2M6WNiuRB-iEFSEEELn7zM7R-FA2jQK0",
  authDomain: "market-1c81f.firebaseapp.com",
  projectId: "market-1c81f",
  storageBucket: "market-1c81f.appspot.com",
  messagingSenderId: "642867946294",
  appId: "1:642867946294:web:54f6783379b12502fc0997",
  measurementId: "G-W8HK2RCE6M",
  databaseURL: "https://inventariomarket-81418-default-rtdb.firebaseio.com",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore (Base de Datos)
const db = getFirestore(app);
const storage = getStorage(app); // Inicializa Storage

export { db, storage  };
