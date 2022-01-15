import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBCzrMS17amNAPr0MvLGAA8B_a4sGbGB_A",
  authDomain: "spacezee-2277d.firebaseapp.com",
  databaseURL: "https://spacezee-2277d-default-rtdb.firebaseio.com",
  projectId: "spacezee-2277d",
  storageBucket: "spacezee-2277d.appspot.com",
  messagingSenderId: "770145968617",
  appId: "1:770145968617:web:f4aa25f118500912382b78",
};



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
