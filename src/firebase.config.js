import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD9_lmmuCfEVg_orKEZSZo6JNC2hxaLP7Q",
    authDomain: "restaurantapp-5cb37.firebaseapp.com",
    databaseURL: "https://restaurantapp-5cb37-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-5cb37",
    storageBucket: "restaurantapp-5cb37.appspot.com",
    messagingSenderId: "1076635299297",
    appId: "1:1076635299297:web:ff5a8e55d87bf6e03836a0"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };