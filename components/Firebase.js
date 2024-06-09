// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';
// // import firebase from '@react-native-firebase/app';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDhWIFgLVjjOtkXnGkZROnN5aozAGGxbMc",
//     authDomain: "ayps-43101.firebaseapp.com",
//     projectId: "ayps-43101",
//     storageBucket: "ayps-43101.appspot.com",
//     messagingSenderId: "902874833305",
//     appId: "1:902874833305:web:9fe0f88d63fb59c8f33308",
//     measurementId: "G-CWQ6Y05XQR"
// };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)
// const db = getFirestore(app);
// const storage = getStorage(app);

// export {  auth, db, storage };




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhWIFgLVjjOtkXnGkZROnN5aozAGGxbMc",
    authDomain: "ayps-43101.firebaseapp.com",
    projectId: "ayps-43101",
    storageBucket: "ayps-43101.appspot.com",
    messagingSenderId: "902874833305",
    appId: "1:902874833305:web:9fe0f88d63fb59c8f33308",
    measurementId: "G-CWQ6Y05XQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
