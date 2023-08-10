import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAWeHHMnBAJ15tbsua6eTUDiMEXKOddkeA",
    authDomain: "durex-ddd76.firebaseapp.com",
    projectId: "durex-ddd76",
    storageBucket: "durex-ddd76.appspot.com",
    messagingSenderId: "778461495228",
    appId: "1:778461495228:web:762df3a44b1132b0a435b9"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: 'select_account',
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

  export const db = getFirestore();
  
  export const createUserDocFromAuth = async (userAuth, additionalInfo) => {
    const userRefDoc = doc(db, 'users', userAuth.uid);

    console.log(userRefDoc);

    const userSnapshot = await getDoc(userRefDoc)
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userRefDoc, {
          displayName,
          email,
          createdAt,
          ...additionalInfo
        });
      }
      catch(error) {
        console.log('error creating the user', error.message)
      }
    }

    return userRefDoc;
  }

  export const createAuthWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
  }

