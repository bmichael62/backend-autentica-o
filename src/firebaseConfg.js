import firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyBWfc8ESKgr35Otaq9Wa7rJ8J1mU386Kmk",
    authDomain: "projeto-seguguranca.firebaseapp.com",
    databaseURL: "https://projeto-seguguranca.firebaseio.com",
    projectId: "projeto-seguguranca",
    storageBucket: "",
    messagingSenderId: "847455984237",
    appId: "1:847455984237:web:f790601b62632fd9"
  };
  
 let app =  firebase.initializeApp(firebaseConfig);

 export default app