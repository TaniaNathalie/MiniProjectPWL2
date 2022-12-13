// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtVabgeCo6H2D91XqqtZuFyFUQ46LcNh0",
  authDomain: "miniproject-02-71200566.firebaseapp.com",
  projectId: "miniproject-02-71200566",
  storageBucket: "miniproject-02-71200566.appspot.com",
  messagingSenderId: "403523756439",
  appId: "1:403523756439:web:d21ea9a0de48b6da99a4d2",
  measurementId: "G-W3C4XYG75V"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default initializeApp(firebaseConfig);