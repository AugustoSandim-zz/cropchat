import firebase from ‘firebase’;

var config = {
    apiKey: "AIzaSyDBFi4NzAfVMTmqGaImWNVzD9GguLH3PQ0",
    authDomain: "cropchat-58201.firebaseapp.com",
    databaseURL: "https://cropchat-58201.firebaseio.com",
    projectId: "cropchat-58201",
    storageBucket: "cropchat-58201.appspot.com",
    messagingSenderId: "417970353525"
  };
  firebase.initializeApp(config);

export default {
 database: firebase.database()
}
