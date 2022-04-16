// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCds8YhpT9x00Amw7nXMTMV2YLdz9QTszs",
  authDomain: "heaven-show.firebaseapp.com",
  projectId: "heaven-show",
  storageBucket: "heaven-show.appspot.com",
  messagingSenderId: "800857016022",
  appId: "1:800857016022:web:e08a5a653d0c895ecc6b77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
