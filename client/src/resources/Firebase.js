import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyD_zZn17R1Pra11Bhmkvbza6ChlmjiUPag",
  authDomain: "video-2f4d9.firebaseapp.com",
  projectId: "video-2f4d9",
  storageBucket: "video-2f4d9.appspot.com",
  messagingSenderId: "1002209587970",
  appId: "1:1002209587970:web:cfec27c11d9727ba7c881b",
  measurementId: "G-CLXMGCDVF0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(); // autorização
export const provider = new GoogleAuthProvider(); // acesso ao provedor google

export default app;