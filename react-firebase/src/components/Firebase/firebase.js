import App from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const prodConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_MESSAGING_APP_ID
}

const devConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_MESSAGING_APP_ID
}

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;


class Firebase {
    constructor() {
        App.initializeApp(config);

        this.auth = App.auth();
        this.storage = App.storage();
        this.database = App.database();

        return this;
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

    doPasswordReset = email => {
        return this.auth.sendPasswordResetEmail(email);
    }

    doPasswordUpdate = password => {
        return this.auth.currentUser.updatePassword(password);
    }

    upLoadTask = (file) => {
        const onTaskFile = this.storage.ref(`file/${file.name}`).put(file);

        return onTaskFile;
    }

    setUploadInfo = (...upLoadInfo) => {
        const [
            inpTitle,
            contentsTxt,
            fileUrl,
            userMail
        ] = upLoadInfo;

        console.log(userMail, inpTitle, contentsTxt, fileUrl);


        this.database.ref('uploadInfo/').set({
            title: inpTitle,
            contents: contentsTxt,
            fileUrl: fileUrl,
            userMail: userMail
        }).then(() => {
            //이동할 location지정하기.
        })
    }

}

export default Firebase;
