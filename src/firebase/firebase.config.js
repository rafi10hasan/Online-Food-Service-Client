// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,

//   apiKey: "AIzaSyCZsVdkZ-v2U3IYgrfoS7Tv1XLBwRGp7-k",
//   authDomain: "cloud-kitchen-9d12f.firebaseapp.com",
//   projectId: "cloud-kitchen-9d12f",
//   storageBucket: "cloud-kitchen-9d12f.appspot.com",
//   messagingSenderId: "5530345604",
//   appId: "1:5530345604:web:80264e6a51a30aaba9a2d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;


