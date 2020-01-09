import Firebase from 'react-native-firebase';

let config = {
    apiKey: "AIzaSyBSyjahnKh1anPcMcQJZzvBUxfCSXYC3Bo",
    authDomain: "candysnap-f6904.firebaseapp.com",
    databaseURL: "https://candysnap-f6904.firebaseio.com",
    projectId: "candysnap-f6904",
    storageBucket: "candysnap-f6904.appspot.com",
    messagingSenderId: "372679553752",
    appId: "1:372679553752:web:d07f887bab66f3379b1dad",
    measurementId: "G-P08S09RLJE"
};
let app = Firebase.initializeApp(config);
export const db = app.database();