// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTyVjvPMFH8OfNDkWqagncFoSAL_dPJyo",
  authDomain: "react-clone-e6e96.firebaseapp.com",
  projectId: "react-clone-e6e96",
  storageBucket: "react-clone-e6e96.appspot.com",
  messagingSenderId: "325687447421",
  appId: "1:325687447421:web:b751a658184c7dcbbf8614",
  measurementId: "G-WRTWSXM5HQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore()

export { db }

