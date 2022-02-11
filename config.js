import firebase from"firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDLw8R9q8v_qwZI9aIiTc-y_4wm_50_Fx0",
  authDomain: "poem-telling-app.firebaseapp.com",
  databaseURL: "https://poem-telling-app-default-rtdb.firebaseio.com",
  projectId: "poem-telling-app",
  storageBucket: "poem-telling-app.appspot.com",
  messagingSenderId: "43849142248",
  appId: "1:43849142248:web:d76b5dac5e12f670ad9e5d"
};

 firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()