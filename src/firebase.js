import * as firebasedb from 'firebase';
import * as firebase from 'firebase/app';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyD9IB0ev-R8Tgt0bXMFNlQycv3zonE75WI",
    authDomain: "todolist-dj.firebaseapp.com",
    databaseURL: "https://todolist-dj.firebaseio.com",
    projectId: "todolist-dj",
    storageBucket: "todolist-dj.appspot.com",
    messagingSenderId: "374311243249",
    appId: "1:374311243249:web:c3b2e5bdce890bdb"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig);
export const firebaseAppAuth = firebaseApp.auth();
export const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};
export const todosRef = firebasedb.database();
//export const todosRef = databaseRef.child("todolist-dj")

