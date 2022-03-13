import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCR9iampZPpPjNeQ7Xvy2KrGpphmNRnGws",
  authDomain: "chatbase-5b8c8.firebaseapp.com",
  databaseURL: "https://chatbase-5b8c8-default-rtdb.firebaseio.com",
  projectId: "chatbase-5b8c8",
  storageBucket: "chatbase-5b8c8.appspot.com",
  messagingSenderId: "181783479151",
  appId: "1:181783479151:web:cc73dd3d32fc1180ca5e9a",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const messagesRef = database.ref("messages");

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};
