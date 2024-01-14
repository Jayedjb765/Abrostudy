
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDyAEJ9gHZ7jWcwRO6vEAXAZyH0Sji4ugo",
    authDomain: "abrostudy-b0a9d.firebaseapp.com",
    databaseURL: "https://abrostudy-b0a9d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "abrostudy-b0a9d",
    storageBucket: "abrostudy-b0a9d.appspot.com",
    messagingSenderId: "94537434487",
    appId: "1:94537434487:web:813c35a7092f542036cd72",
    measurementId: "G-BCF6VYN4CG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  import {getDatabase, ref, set, child, get} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
  const db = getDatabase();
  const analytics = getAnalytics(app);
