import firebase from 'firebase/app'
import 'firebase/storage'



var firebaseConfig={
    apiKey: "AIzaSyCKE_4Dbz7bOlKdKBd46naDc2-zKtSp2T8",
  authDomain: "mr-store-da0b5.firebaseapp.com",
  projectId: "mr-store-da0b5",
  storageBucket: "mr-store-da0b5.appspot.com",
  messagingSenderId: "1040550248552",
  appId: "1:1040550248552:web:52a077443e54eec3fb7bdd",
  measurementId: "G-JJVQNWW81Z"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = app.storage()