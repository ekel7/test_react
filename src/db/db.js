
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBXXn4iXxQZVqWFbvIo9XHnxwyQZdrr3RI",
  authDomain: "ecommerce-beautyshop-5da92.firebaseapp.com",
  projectId: "ecommerce-beautyshop-5da92",
  storageBucket: "ecommerce-beautyshop-5da92.appspot.com",
  messagingSenderId: "251306632891",
  appId: "1:251306632891:web:2e8164ce429d9bff81ab9e"
};

 initializeApp(firebaseConfig);

 const db = getFirestore()

export default db

