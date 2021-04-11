import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAN5P2rM0ejqigPaEQUaq-2Tv7bYmd-ts0",
    authDomain: "facebook-clone-6e52e.firebaseapp.com",
    projectId: "facebook-clone-6e52e",
    storageBucket: "facebook-clone-6e52e.appspot.com",
    messagingSenderId: "866799637301",
    appId: "1:866799637301:web:3301e2526436930e25327c",
    measurementId: "G-LMRNVQMLGP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
