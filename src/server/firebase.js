import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyBfA4szKec1JQdSLM_aXKRp95rKocqH5W0",
  authDomain: "streamlinify-react.firebaseapp.com",
  projectId: "streamlinify-react",
  databaseURL: "https://streamlinify-react-default-rtdb.firebaseio.com/",
  storageBucket: "streamlinify-react.appspot.com",
  messagingSenderId: "1090261118666",
  appId: "1:1090261118666:web:e72d576b137ac51decce33",
  measurementId: "G-R0RNE74F97"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;