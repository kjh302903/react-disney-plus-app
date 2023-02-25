// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1W0sVR6GYu3mxKsr7bvOWUID5X1FIy8w",
  authDomain: "react-disney-plus-7d664.firebaseapp.com",
  projectId: "react-disney-plus-7d664",
  storageBucket: "react-disney-plus-7d664.appspot.com",
  messagingSenderId: "235905969325",
  appId: "1:235905969325:web:003d99d556825b9f2caa24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;