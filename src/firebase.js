import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA35nEsUAFdStVjv_mCeZEJAW8U_NN4xZs",
    authDomain: "clone-7ac50.firebaseapp.com",
    databaseURL: "https://clone-7ac50.firebaseio.com",
    projectId: "clone-7ac50",
    storageBucket: "clone-7ac50.appspot.com",
    messagingSenderId: "741872845918",
    appId: "1:741872845918:web:4f72824528785de3d6e0cf",
    measurementId: "G-NDNNSRJ18R"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
const auth = firebase.auth();

export { auth };