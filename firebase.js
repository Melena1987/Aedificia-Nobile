
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase utilizando las variables de entorno de Vite (import.meta.env)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Chequeo de seguridad: imprime un error detallado si falta la API Key
if (!firebaseConfig.apiKey) {
  console.error(
    "Error de configuración en Vite: No se ha encontrado VITE_FIREBASE_API_KEY. " +
    "Asegúrate de que el archivo .env existe y que las variables tienen el prefijo VITE_."
  );
}

// Inicialización de la aplicación de Firebase
const app = initializeApp(firebaseConfig);

// Inicialización de Firestore
const db = getFirestore(app);

// Exportaciones requeridas por la aplicación
export { db };
export default app;
