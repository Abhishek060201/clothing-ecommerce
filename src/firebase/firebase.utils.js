import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB7OJz7DsKJFoqidD9M9jGls9Zi23fC5b8",
  authDomain: "crwn-db-eb0cb.firebaseapp.com",
  projectId: "crwn-db-eb0cb",
  storageBucket: "crwn-db-eb0cb.appspot.com",
  messagingSenderId: "401202165170",
  appId: "1:401202165170:web:9d32c8faaa3e6767f920ab",
  measurementId: "G-WX4TCG3MYF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;