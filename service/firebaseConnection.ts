import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAAzNh0v76-XuRdaIFuBR6RK4h7LCVdxY8",
    authDomain: "tartaruga-notes.firebaseapp.com",
    databaseURL: 'https://tartaruga-notes-default-rtdb.firebaseio.com/', //us-central1
    projectId: "tartaruga-notes",
    storageBucket: "tartaruga-notes.appspot.com",
    messagingSenderId: "905709639518",
    appId: "1:905709639518:web:c900727f9614c25072e1cf",
    // measurementId: 'G-measurement-id',

  };
  
export const firebaseConnection = initializeApp(firebaseConfig);
export const DB = getDatabase(firebaseConnection);
