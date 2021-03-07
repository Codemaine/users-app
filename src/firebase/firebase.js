import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCKSI_FSg7UnAiPYjJ52FHLGk9TG9QNJB0",
  authDomain: "codetrain-users.firebaseapp.com",
  projectId: "codetrain-users",
  storageBucket: "codetrain-users.appspot.com",
  messagingSenderId: "244002892948",
  appId: "1:244002892948:web:c9b8eec92eb95bebf61881"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  firebase.firestore();

export default firebase;