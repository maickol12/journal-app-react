import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcMHUeS1iDg18u9X0LJzUOK8TIVIu8QbY",
  authDomain: "react-app-cursos-b4a72.firebaseapp.com",
  projectId: "react-app-cursos-b4a72",
  storageBucket: "react-app-cursos-b4a72.appspot.com",
  messagingSenderId: "259002626088",
  appId: "1:259002626088:web:47ba5db66f70e8312f451d"
};
    
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    app
}