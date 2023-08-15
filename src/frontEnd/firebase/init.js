import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCC-5LBY2O-Cda1s39y617iT0Z9QQ39HFw",
  authDomain: "technipub-vue.firebaseapp.com",
  databaseURL: "https://technipub-vue-default-rtdb.firebaseio.com",
  projectId: "technipub-vue",
  storageBucket: "technipub-vue.appspot.com",
  messagingSenderId: "113397468190",
  appId: "1:113397468190:web:5cb5f3064b1418bdc0320f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
export default db;
