import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// const config = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// };

var config = {
    apiKey: "AIzaSyCWAD9TXkTiGPlXqCLofr2V3t0iF4s8dNM",
    authDomain: "kalenpw-todos.firebaseapp.com",
    databaseURL: "https://kalenpw-todos.firebaseio.com",
    projectId: "kalenpw-todos",
    storageBucket: "kalenpw-todos.appspot.com",
    messagingSenderId: "492225279240"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();

        // const ref = this.db.ref("https://kalenpw-todos.firebaseio.com/");
        // ref.on("value", function (snapshot) {
        //     console.log(snapshot.val());
        // }, function (errorObject) {
        //     console.log("The read failed: " + errorObject.code);
        // });
        // console.log(foo);

    }
    doCreateUserWithEmailAndPassword = (email, password) => {
        return this.auth.createUserWithEmailAndPassword(email, password);
    }

    doSignInWithEmailAndPassword = (email, password) => {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    doSignOut = () => {
        return this.auth.signOut();
    }

    doPasswordReset = (email) => {
        return this.auth.sendPasswordResetEmail(email);
    }

    doPasswordUpdate = (password) => {
        return this.auth.currentUser.updatePassword(password);
    }

    task = (id) => {
        return this.db.ref(`tasks/${id}`);
    }
    tasks = () => {
        return this.db.ref('tasks');
    }
}

export default Firebase;
