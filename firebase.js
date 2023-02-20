import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

 
const firebaseConfig = {
    apiKey: "AIzaSyCMI1EnsCCRYwA_-LNRknSwRB1Q8GCX2lI",
    authDomain: "watsup-1a818.firebaseapp.com",
    projectId: "watsup-1a818",
    databaseURL :"https://watsup-1a818-default-rtdb.firebaseio.com/",
    storageBucket: "watsup-1a818.appspot.com",
    messagingSenderId: "555201504266",
    appId: "1:555201504266:web:e2910f16f3708311a12bf3",
    measurementId: "G-DJWVCTWY0F"
  };
   export const app =initializeApp(firebaseConfig);
   const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};
   