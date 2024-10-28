import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
const firebaseConfig = {
  apiKey: "AIzaSyBrKuFqj3UZojSznEVoTl2zupO5R1lclII",
  authDomain: "p1h1-598e2.firebaseapp.com",
  databaseURL: "https://p1h1-598e2-default-rtdb.firebaseio.com",
  projectId: "p1h1-598e2",
  storageBucket: "p1h1-598e2.appspot.com",
  messagingSenderId: "351626368111",
  appId: "1:351626368111:web:699d1b6462d859a11b699a",
  measurementId: "G-R5QGZGRNH2"
};
// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);