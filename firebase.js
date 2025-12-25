
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase utilizando process.env
// Fix: Use process.env instead of import.meta.env for environment variables
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

// Chequeo de seguridad: imprime un error detallado si falta la API Key
if (!firebaseConfig.apiKey) {
  console.error(
    "Error de configuración: No se ha encontrado VITE_FIREBASE_API_KEY en process.env. " +
    "Asegúrate de que las variables de entorno están correctamente configuradas."
  );
}

// Inicialización de la aplicación de Firebase
const app = initializeApp(firebaseConfig);

// Inicialización de Firestore
const db = getFirestore(app);

// Exportaciones requeridas por la aplicación
export { db };
export default app;
