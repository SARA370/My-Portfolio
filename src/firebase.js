// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDU7SAyG1rdq7YBDMJDdiOtnvCkUTgJDcon",
  authDomain: "portfolio-contactform-652dd.firebaseapp.com",
  projectId: "portfolio-contactform-652dd",
  storageBucket: "portfolio-contactform-652dd.appspot.com",
  messagingSenderId: "239647114349",
  appId: "1:239647114349:web:f40b89f0d952c9b5232b64",
  measurementId: "G-T8CLJH2PGE"
};

// Initialisez Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialisez Firestore
const db = getFirestore(firebaseApp);

// Initialisez Analytics (optionnel)
const analytics = getAnalytics(firebaseApp);

// Exportez Firestore et Analytics pour une utilisation ailleurs dans l'application
export { db, analytics };