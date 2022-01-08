import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCVqmwwLaIITYBStmlPw9Poa7xdwVIkVE8",
    authDomain: "my-store-8aef6.firebaseapp.com",
    projectId: "my-store-8aef6",
    storageBucket: "my-store-8aef6.appspot.com",
    messagingSenderId: "541165509511",
    appId: "1:541165509511:web:221283449ccea763c41122",
    measurementId: "G-QJ80Y7WTJ7"
};

export const createUserProfileDocument = async ( userAuth , additionalData) => {
      if(!userAuth) return;
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();
      if(!snapShot.exists){
          const { displayName , email } = userAuth;
          const createdAt = new Date ();
          try{
           await userRef.set({
               displayName,
               email,createdAt,
               ...additionalData
           })
          }
          catch(error){
            console.log('error creating user', error.message);
          }
      }
      return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

