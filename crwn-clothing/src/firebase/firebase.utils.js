import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD5ZC4VExKZ3lU0EfOJaVOyjgbrP0qcaEg",
    authDomain: "crwn-db-c4a71.firebaseapp.com",
    projectId: "crwn-db-c4a71",
    storageBucket: "crwn-db-c4a71.appspot.com",
    messagingSenderId: "519346805173",
    appId: "1:519346805173:web:3bbbe6521ffc156a36e1fc",
    measurementId: "G-E8GL7Z85TN"
  };
// Initialize Firebase
firebase.initializeApp(config);
//firebase.analytics();
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//set up google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    //always trigger google popup to select account 
    'prompt': 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;