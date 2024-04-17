import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, getDocs
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDaA5TTD1xy44cm7UpwmQQmWvNnZXKU_iE",
    authDomain: "pushnotis-70991.firebaseapp.com",
    projectId: "pushnotis-70991",
    storageBucket: "pushnotis-70991.appspot.com",
    messagingSenderId: "664596757683",
    appId: "1:664596757683:web:f74173d4dd37fc868304c6"
  };

  // initialzing DB
initializeApp(firebaseConfig)  

  // init services
const db = getFirestore()

  // collection ref
const colRef = collection(db, "accepted")

  // get collection data
getDocs(colRef)
  .then((snapshot) => {
    let accepted = []
    snapshot.docs.forEach((doc) => {
      accepted.push({ ...doc.data(), id: doc.id })
    })
    console.log(accepted)
  })
  .catch(err => {
    console.log(err.message)
  })