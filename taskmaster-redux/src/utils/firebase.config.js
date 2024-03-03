import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBej36_rlsRwTEfSOcEbROZGt4MQE6eycs",
  authDomain: "redux-task-management-5c25d.firebaseapp.com",
  projectId: "redux-task-management-5c25d",
  storageBucket: "redux-task-management-5c25d.appspot.com",
  messagingSenderId: "1066292323435",
  appId: "1:1066292323435:web:be1dc6ce5504748f2d7d2e",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
