// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-analytics.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsLJ7NkghkL2pQZ0vRydcLFO-33lM2ruw",
  authDomain: "healthsync-88f87.firebaseapp.com",
  projectId: "healthsync-88f87",
  storageBucket: "healthsync-88f87.firebasestorage.app",
  messagingSenderId: "399149581148",
  appId: "1:399149581148:web:7b3fefff7a9ee9f0347799",
  measurementId: "G-CE9MYJCNQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
