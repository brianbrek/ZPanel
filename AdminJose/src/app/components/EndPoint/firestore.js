import firebase from 'firebase'
require('firebase/firestore')
require('firebase/auth')


var config = {
    apiKey: "AIzaSyACHhbGvN_iGwHQ1TgseoOo_x2JRaUsJWM",
    authDomain: "autentication-4a335.firebaseapp.com",
    databaseURL: "https://autentication-4a335.firebaseio.com",
    projectId: "autentication-4a335",
    storageBucket: "autentication-4a335.appspot.com",
    messagingSenderId: "10662142134",
    appId: "1:10662142134:web:ae49600ac192d80a"
};

firebase.initializeApp(config);
export const connection = firebase.firestore();
export default firebase;