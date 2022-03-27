import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCP1EIvPFSQZUeMqVubTr_xamQyNLJp0dI",
  authDomain: "roomie-45e4d.firebaseapp.com",
  projectId: "roomie-45e4d",
  storageBucket: "roomie-45e4d.appspot.com",
  messagingSenderId: "289020460888",
  appId: "1:289020460888:web:40a29153d0c3d3120e6f2d",
  measurementId: "G-EK6DF3KSZG"
};

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const messaging = getMessaging(app);

export default firebase;