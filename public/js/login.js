import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { app } from './config.js';
const auth = getAuth(app);
let email = document.getElementById('exampleInputEmail');
let password = document.getElementById('exampleInputPassword');
let loginBtn = document.getElementById('loginBtn');
console.log(loginBtn);
loginBtn.addEventListener('click', e => {
    e.preventDefault();
    console.log(email);
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Đăng nhập thành công.
            console.log('Logged in');
            window.location.assign('./index.html');
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(`Login failed with code ${errorCode}, message ${errorMessage}`);
        });
});