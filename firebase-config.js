// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, push, onValue, remove, update, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC3Zt0Tu0fbYhViA6fRBj1dPbyw4ggfSUA",
  authDomain: "sciencenews-f466f.firebaseapp.com",
  databaseURL: "https://sciencenews-f466f-default-rtdb.firebaseio.com",
  projectId: "sciencenews-f466f",
  storageBucket: "sciencenews-f466f.firebasestorage.app",
  messagingSenderId: "607573406364",
  appId: "1:607573406364:web:86cef76ff68df831c93359",
  measurementId: "G-VL33F7V6Y3"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const isAdmin = sessionStorage.getItem('isAdmin') === 'true';

export { db, ref, set, push, onValue, remove, update, get, isAdmin };
