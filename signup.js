// signup.js
import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

const signupBtn = document.getElementById("signupBtn");

signupBtn.onclick = function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Account created successfully!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};
