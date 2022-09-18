import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAE67Nv4l0QNsY7EvBqHgwLwrQzj5JfSJE",
  authDomain: "roomie-a28aa.firebaseapp.com",
  projectId: "roomie-a28aa",
  storageBucket: "roomie-a28aa.appspot.com",
  messagingSenderId: "351740427631",
  appId: "1:351740427631:web:21b8cb45ad3d08e5a97c9a",
  measurementId: "G-Q2C69H33H2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let storage = firebase.storage();

export { firebase, db, storage };
