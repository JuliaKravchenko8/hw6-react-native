import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCvVz3-E1fe1hHWq1VuXa7xS_rDb_Oxj9A',
  authDomain: 'hw6-react-native.firebaseapp.com',
  projectId: 'hw6-react-native',
  storageBucket: 'hw6-react-native.appspot.com',
  messagingSenderId: '588448057990',
  appId: '1:588448057990:android:7fd0274b416aeeb2521f07',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
