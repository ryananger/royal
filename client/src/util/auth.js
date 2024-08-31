import {initializeApp} from 'firebase/app';
import {getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut} from 'firebase/auth';

import ax from './ax.js';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'techtree-fb000.firebaseapp.com',
  projectId: 'techtree-fb000',
  storageBucket: 'techtree-fb000.appspot.com',
  messagingSenderId: '1032640805393',
  appId: '1:1032640805393:web:c7ed6e4649a391b2b68fb0',
  measurementId: 'G-Q1VHJR1TQC'
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);

var signUp = function(user) {
  createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      user.uid = userCredential.user.uid;

      ax.createUser(user);
      console.log('Created firebase user.');
    })
    .catch((error) => {
      console.log(error);
    });
};

var signIn = function(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      var user = userCredential.user;

      console.log('Firebase signIn successful.');

      ax.getUser(user.uid);
    })
    .catch((error) => {
      console.log(error);
    });
};

var logOut = function() {
  signOut(auth).then(() => {
    console.log('Firebase signOut successful.');
  }).catch((error) => {
    console.log(error);
  });
};

var methods = {
  signUp: signUp,
  signIn: signIn,
  logOut: logOut
};

export default methods;