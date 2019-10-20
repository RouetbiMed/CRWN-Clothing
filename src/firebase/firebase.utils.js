import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDul1VuLaO-R8ICqcHAMc0R6DJwqVlmxes",
    authDomain: "crwn-db-79139.firebaseapp.com",
    databaseURL: "https://crwn-db-79139.firebaseio.com",
    projectId: "crwn-db-79139",
    storageBucket: "crwn-db-79139.appspot.com",
    messagingSenderId: "795815629583",
    appId: "1:795815629583:web:dd65cf19628012a506647a"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log('error creating user ', e.message);
        }
    }

    return userRef;
};

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;