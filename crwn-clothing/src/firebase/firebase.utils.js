import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD5ZC4VExKZ3lU0EfOJaVOyjgbrP0qcaEg",
  authDomain: "crwn-db-c4a71.firebaseapp.com",
  databaseURL: "https://crwn-db-c4a71-default-rtdb.firebaseio.com",
  projectId: "crwn-db-c4a71",
  storageBucket: "crwn-db-c4a71.appspot.com",
  messagingSenderId: "519346805173",
  appId: "1:519346805173:web:3bbbe6521ffc156a36e1fc",
  measurementId: "G-E8GL7Z85TN"
  };
  


export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return;

  // documentReference perform CRUD operations
  const userRef = firestore.doc(`users/${userAuth.uid}`); 
  //Snapshot only represents the data, e.x. if it exist or not
  const snapShop = await userRef.get(); 

  console.log(snapShop);
  console.log(userRef);
  
  if(!snapShop.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user ',error.message);
    }
    // console.log('created');
  }
  // console.log(userRef);
  //we return it in case that we want to use it later
  return userRef;
}

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