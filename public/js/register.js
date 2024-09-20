import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
import { app, database } from './config.js'
const auth = getAuth(app);
console.log(auth);
let email = document.getElementById('email');
let password = document.getElementById('password');
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let registerBtn = document.getElementById('signupbutton');
registerBtn.addEventListener('click', e => {
    e.preventDefault();
    console.log(firstname.value);
    console.log(lastname.value);
    console.log(email.value);
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        //Đăng kí thành công.
        console.log('Registered');
        let userID = userCredential.user.uid;
        set(ref(database, 'users/' + userID), {
            firstName: firstname.value,
            lastName: lastname.value,
            password: password.value,
            email: email.value
        })
            .then(() => {
                // Data saved successfully! 
                window.location.assign('./login.html')
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;

                console.log(`Write data failed with code ${errorCode}, message ${errorMessage}`);

            });
       
    })
    .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;

        console.log(`Register failed with code ${errorCode}, message ${errorMessage}`);

    })
})