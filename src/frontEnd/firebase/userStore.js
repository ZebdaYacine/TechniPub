import { collection, addDoc } from "firebase/firestore";
import db from "./init";
const UserStore = {
  async createUser(user) {
    // 'users' collection reference
    const colRef = collection(db, "users");
    // data to send
    const dataObj = user;
    // create document and return reference to it
    await addDoc(colRef, dataObj);
    // access auto-generated ID with '.id'
    console.log("Document was created with ID:", docRef.id);
    return "your account was created";
  },
};

export default UserStore;
