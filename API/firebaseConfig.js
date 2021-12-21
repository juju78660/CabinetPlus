import firebase from "firebase/compat";

var firebaseConfig = {
    apiKey: "AIzaSyAcaFMwk7qqGKzDFj9Nvc36UY1st3fzMXg",
    authDomain: "cabinetplus-da986.firebaseapp.com",
    databaseURL: "https://cabinetplus-da986.firebaseio.com",
    projectId: "cabinetplus-da986",
    storageBucket: "cabinetplus-da986.appspot.com",
    messagingSenderId: "282769666645",
    appId: "1:282769666645:web:ed4c6e2d0e37b920ed9adc"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app(); // if already initialized, use that one
}