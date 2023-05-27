// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwMtc13VQiMU_22ftpl4fJ1P9YIUKQ4fI",
  authDomain: "miniblog-45ae4.firebaseapp.com",
  projectId: "miniblog-45ae4",
  storageBucket: "miniblog-45ae4.appspot.com",
  messagingSenderId: "748569532344",
  appId: "1:748569532344:web:f70fab926a7c6c14b4614d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };