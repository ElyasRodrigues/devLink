import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCkpr1LZ46ilSte4IM6aSF_BiXaoZvROXM",
  authDomain: "devlinks-55847.firebaseapp.com",
  projectId: "devlinks-55847",
  storageBucket: "devlinks-55847.appspot.com",
  messagingSenderId: "1000435138258",
  appId: "1:1000435138258:web:53cb9c76ec872d5ac6770b",
  measurementId: "G-TS4X1YG50C"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth }