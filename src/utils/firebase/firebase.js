import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDjVWFkWbHLYgVaHLPY-S7DTAraTW6rb_k',
  authDomain: 'crown-clo-13e25.firebaseapp.com',
  projectId: 'crown-clo-13e25',
  storageBucket: 'crown-clo-13e25.appspot.com',
  messagingSenderId: '714403202754',
  appId: '1:714403202754:web:bf1e2b2cd876c4debddd5b',
};

const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const singInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// database

const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  addicionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...addicionalInformation,
      });
    } catch (error) {
      console.log('error created the user');
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
