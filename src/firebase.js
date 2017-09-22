import * as firebase from "firebase";

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCtSfQcuV5YxTOAw0Yt86yWe6Rniio-9MQ",
    authDomain: "uek-companion.firebaseapp.com",
    databaseURL: "https://uek-companion.firebaseio.com",
    projectId: "uek-companion",
    storageBucket: "uek-companion.appspot.com",
    messagingSenderId: "63240437365"
};

const app = firebase.initializeApp(config);

export default class Firebase {
    static db = app.database();
    static auth = app.auth();
};