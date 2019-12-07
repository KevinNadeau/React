import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA_KmuqRCWJ0UiiC_UeFGV-dNIPJLO4nNM",
    authDomain: "lebondrone-5ee65.firebaseapp.com",
    databaseURL: "https://lebondrone-5ee65.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base