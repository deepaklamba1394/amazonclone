import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDvX7N_myLESGEdoLTCVFl9jPCFdO1AK74",
    authDomain: "clone-4cd56.firebaseapp.com",
    projectId: "clone-4cd56",
    storageBucket: "clone-4cd56.appspot.com",
    messagingSenderId: "1029638839699",
    appId: "1:1029638839699:web:054c91d27457dab8f49c66",
    measurementId: "G-ZZ09R1NKG5"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db= getFirestore(firebaseApp);
  const auth= getAuth(firebaseApp);

  export {db, auth};