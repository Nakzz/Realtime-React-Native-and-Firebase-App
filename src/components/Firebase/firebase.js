
import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA7j25rVfI0ZwtMldQ_aawCj-fidwdr4Hw",
    authDomain: "reacttutorial-a46b3.firebaseapp.com",
    databaseURL: "https://reacttutorial-a46b3.firebaseio.com",
    projectId: "reacttutorial-a46b3",
    storageBucket: "reacttutorial-a46b3.appspot.com",
    messagingSenderId: "499708290"
};

class Firebase {
    constructor(){
        app.initializeApp(config);

        this.auth = app.auth();
    }

    // **** AUTH API ****

    //create user 
doCreateUserWithEmailAndPassword = (email, password) => {
    this.auth.createUserWithEmailAndPassword(email, password);
}

// sign in user
doSignInWithEmailAndPassword = (email, password) => {
    this.auth.signInWithEmailAndPassword(email, password);
}

//sign out
doSignOut = () => this.auth.signOut();

//reset password
doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

//update password
doPasswordUpdate = (password) => this.auth.createUser.updatePassword(password);



}



export default Firebase;