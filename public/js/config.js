// Import the functions you need from the SDKs you need
import {initializeApp} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {getAnalytics} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import {getDatabase} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXE-JEAjLGBb7_Ate1Aj-cPFlsxHIn4KE",
  authDomain: "arena-of-valor-8c7ba.firebaseapp.com",
  projectId: "arena-of-valor-8c7ba",
  storageBucket: "arena-of-valor-8c7ba.appspot.com",
  messagingSenderId: "592158854220",
  appId: "1:592158854220:web:52b8f550e8c5b1c04338e9",
  measurementId: "G-RVTRNFGBJR"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const database = getDatabase(app);
const fsdatabase = getFirestore(app);
export {app, analytics, storage, database, fsdatabase}