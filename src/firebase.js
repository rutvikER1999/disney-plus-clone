import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCEhBBSZSe6xsvQejhLTxec4oESBTkYtdw",
    authDomain: "disney-clone-dcb92.firebaseapp.com",
    databaseURL: "https://disney-clone-dcb92-default-rtdb.firebaseio.com",
    projectId: "disney-clone-dcb92",
    storageBucket: "disney-clone-dcb92.appspot.com",
    messagingSenderId: "101672925717",
    appId: "1:101672925717:web:3ec0787e85a9397f65ac1c",
    measurementId: "G-WXKZ4G44KF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
