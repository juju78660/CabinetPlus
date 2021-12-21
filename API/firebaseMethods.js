import * as firebase from "firebase/compat";
import "firebase/firestore";
import {Alert} from "react-native";

import "./firebaseConfig";

// MODIFY THIS FUNCTION TO TAKE AS PARAMETER FIRST AND LAST NAME
export async function registration(username, email, password, lastName, firstName) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("users")
      .doc(currentUser.uid)
      .set({
        email: currentUser.email,
        lastName: lastName,
        firstName: firstName,
      });
  } catch (err) {
    Alert.alert("There is something wrong!!!!", err.message);
  }
}

export async function signIn(email, password) {
  try {
   await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      /*.then((response) => {
          Alert.alert(response.user.email);
        })*/
      //const response = await axios.post('https://localhost/login', {email, password});
  }
  catch (err) {
      if(err.message == "The password is invalid or the user does not have a password.") Alert.alert("Email/mot de passe invalide !");
      else Alert.alert("Error", err.message);
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}