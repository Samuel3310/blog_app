// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env);
const firebaseConfig = {
  apiKey: "AIzaSyAVmJ50tl1cQxAW1ycR7uIzUTFnwKJbFDM",
  authDomain: "my-blogn.firebaseapp.com",
  projectId: "my-blogn",
  storageBucket: "my-blogn.appspot.com",
  messagingSenderId: "233888292649",
  appId: "1:233888292649:web:b1885657a52b8094926138",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
