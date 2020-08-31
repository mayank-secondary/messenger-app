import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDdkMz8IIVwaDVXomuncjF5yWZ0ns0QFZU",
    authDomain: "messenger-app-by-mak.firebaseapp.com",
    databaseURL: "https://messenger-app-by-mak.firebaseio.com",
    projectId: "messenger-app-by-mak",
    storageBucket: "messenger-app-by-mak.appspot.com",
    messagingSenderId: "603615663215",
    appId: "1:603615663215:web:8a6fca0f16645ce8e1e99a",
    measurementId: "G-24HD0T6V3R"
});

export default firebaseApp.firestore();