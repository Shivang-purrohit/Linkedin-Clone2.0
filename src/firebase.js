import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBucG7D1wIRRCYVjZTlBUcFRw0I6I3BPKM",
    authDomain: "linkedin-clone-9b72f.firebaseapp.com",
    projectId: "linkedin-clone-9b72f",
    storageBucket: "linkedin-clone-9b72f.appspot.com",
    messagingSenderId: "945160034176",
    appId: "1:945160034176:web:ab2a560f44a2105c06d365"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };