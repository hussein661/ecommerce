import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAEQKSMqRcALfJWUdDFBDV--rmMUrgd_fc",
    authDomain: "e-commerce-416f6.firebaseapp.com",
    databaseURL: "https://e-commerce-416f6.firebaseio.com",
    projectId: "e-commerce-416f6",
    storageBucket: "e-commerce-416f6.appspot.com",
    messagingSenderId: "771457741973",
    appId: "1:771457741973:web:09289618c946716d48579c",
    measurementId: "G-QG657QCR3J"
  };

export const createUserProfileDocument = async (userAuth,additionalData)=> {
  if(!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if(!snapShot.exists){
    const {displayName,email} = userAuth
    const createdAt = new Date()
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log('error creating user',error.message)
    }
  }
  return userRef

}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase;