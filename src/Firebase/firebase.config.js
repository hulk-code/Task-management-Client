// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZRlZpMySqictaT9fOmB4DwAtgfQG_mC8",
  authDomain: "task-management-c865a.firebaseapp.com",
  projectId: "task-management-c865a",
  storageBucket: "task-management-c865a.appspot.com",
  messagingSenderId: "156132010533",
  appId: "1:156132010533:web:2e0050fc0aeb03e363adcc",
  measurementId: "G-VX5ZLCQ0MS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;