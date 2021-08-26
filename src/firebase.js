import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDUdCc3a7YKtBpOmZOxLVTV6asnYR-hcPo",
  authDomain: "stackoverflow-3d0c3.firebaseapp.com",
  projectId: "stackoverflow-3d0c3",
  storageBucket: "stackoverflow-3d0c3.appspot.com",
  messagingSenderId: "117990697456",
  appId: "1:117990697456:web:40580b8b6c5e65cf2c5535",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
