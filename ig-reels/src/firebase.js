
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


// Import the functions you need from the SDKs you need
const firebaseConfig = {
    apiKey: "AIzaSyApHQL4IOL_5dyLKd4128njllnhIAo021A",
    authDomain: "ig-reels-c530c.firebaseapp.com",
    projectId: "ig-reels-c530c",
    storageBucket: "ig-reels-c530c.appspot.com",
    messagingSenderId: "862133074998",
    appId: "1:862133074998:web:f22c7bdf14aeb8427c6c97"
  };

  const app=initializeApp(firebaseConfig);
  const db=getFirestore(app);


  export default db;