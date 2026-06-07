// auth.js
import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } 
from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

/* Redirect if not logged in */
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});

/* Logout button */
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.onclick = function() {
    signOut(auth).then(() => {
      window.location.href = "login.html";
    });
  };
}
