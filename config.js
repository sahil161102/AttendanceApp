 import firebase from "firebase";

 const firebaseConfig = {
  apiKey: "AIzaSyBrc0UmtipejOfZSPLBFXhFJARAASF90cE",
  authDomain: "e-library-a2675.firebaseapp.com",
  databaseURL: "https://e-library-a2675-default-rtdb.firebaseio.com",
  projectId: "e-library-a2675",
  storageBucket: "e-library-a2675.appspot.com",
  messagingSenderId: "282681108886",
  appId: "1:282681108886:web:b87545ff962b2f4b5055b7"
};
  let db =firebase.initializeApp(firebaseConfig);
  export default db.database()
 
  