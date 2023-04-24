import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCjANPhIQopXSr-ESlxpdk29QoPbxiow08",
  authDomain: "catalago-productos.firebaseapp.com",
  projectId: "catalago-productos",
  storageBucket: "catalago-productos.appspot.com",
  messagingSenderId: "72607487366",
  appId: "1:72607487366:web:885dfc8d215c3cff28c807"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);