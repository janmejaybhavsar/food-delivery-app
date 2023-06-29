import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyBvabTedNZ7Gw-3OxynyKDtSmDRSqZ8BJM",
    authDomain: "uber-eats-clone-6659b.firebaseapp.com",
    projectId: "uber-eats-clone-6659b",
    storageBucket: "uber-eats-clone-6659b.appspot.com",
    messagingSenderId: "773262313328",
    appId: "1:773262313328:web:acaac7fc3b1a8859edb1b5",
    measurementId: "G-ZE68N0M9ZC"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
