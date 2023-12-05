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
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        auth.signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                if (user.emailVerified) {
                    console.log('Login successful');
                    const userRef = firestore.collection('users').doc(user.uid);
                    userRef.get().then(doc => {
                        if (doc.exists) {
                            const loginCount = doc.data().loginCount || 0;
                            userRef.update({ loginCount: loginCount + 1 })
                                .then(() => {
                                    window.location.href = 'home.html?logincount=' + (loginCount + 1);
                                })
                                .catch(error => {
                                    console.error("Error updating user:", error);
                                });
                        }
                    });
                } else {
                    alert('Email not verified. Please check your email for the verification link.');
                }
            })
            .catch(error => {
                console.log(error);
                alert('Wrong Id Password or account does not exist');
            });
    });
});
