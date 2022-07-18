import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp( {
    apiKey: "AIzaSyBTyVjvPMFH8OfNDkWqagncFoSAL_dPJyo",
    authDomain: "react-clone-e6e96.firebaseapp.com",
    projectId: "react-clone-e6e96",
    storageBucket: "react-clone-e6e96.appspot.com",
    messagingSenderId: "325687447421",
    appId: "1:325687447421:web:b751a658184c7dcbbf8614",
    measurementId: "G-WRTWSXM5HQ"
  });


//const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
  
export { db };