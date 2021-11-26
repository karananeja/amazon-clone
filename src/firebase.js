import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAXSRAlt24I6sCxtRr_-qNIT3xyKYTdbuM',
  authDomain: 'clone-a2e7b.firebaseapp.com',
  projectId: 'clone-a2e7b',
  storageBucket: 'clone-a2e7b.appspot.com',
  messagingSenderId: '582548404369',
  appId: '1:582548404369:web:d0c17bfcdd7f8ddd18e730',
  measurementId: 'G-9XELBQMMGT',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
