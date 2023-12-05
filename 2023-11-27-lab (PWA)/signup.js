const firebaseConfig = {
    apiKey: "AIzaSyCOUZt3NZtN6H416T-2ucWKlQMWci9B05E",
    authDomain: "iws-lab-2.firebaseapp.com",
    projectId: "iws-lab-2",
    storageBucket: "iws-lab-2.appspot.com",
    messagingSenderId: "3414927075",
    appId: "1:3414927075:web:bd4b5861ecb5e0915007d6"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const signupEmail = document.getElementById('signupEmail').value;
        const signupPassword = document.getElementById('signupPassword').value;

        if (!emailRegex.test(signupEmail)) {
            alert('Invalid email address');
            return;
        }

        auth.createUserWithEmailAndPassword(signupEmail, signupPassword)
            .then(userCredential => {                
                const user = userCredential.user;

                user.sendEmailVerification()
                    .then(() => {
                        alert('Signup successful. Please check your email for verification.');
                    })
                    .catch(error => {
                        console.error('Error sending verification email:', error);
                    });

                firestore.collection('users').doc(user.uid).set({
                    email: user.email,
                    loginCount: 0,
                });
            })
            .catch(error => {
                console.error(error.message);
                alert(error.message);
            });
    });
});
