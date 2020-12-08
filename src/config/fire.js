import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyBSl1FuijIrq7JtPHnbNWkepHFSfk82N2E",
  authDomain: "scouter-app-df231.firebaseapp.com",
  projectId: "scouter-app-df231",
  storageBucket: "scouter-app-df231.appspot.com",
  messagingSenderId: "920590678048",
  appId: "1:920590678048:web:6a2737bdde75c22ff86445",
  measurementId: "G-D27BG2Y7R0",
};

firebase.initializeApp(firebaseConfig);
export const fire = firebase.auth();
export const firestore = firebase.database().ref();
