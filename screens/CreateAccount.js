import React, { useState, useRef, useEffect } from 'react';
import { View, Button, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Alert, Image} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';


//REDUX
import { connect } from 'react-redux';
import { onUserLogIn, onUserLogOut, onFetchProduct } from '../redux/actions';
import {registration, signIn} from "../API/firebaseMethods";

const ScreenContainer = ({ children }) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
  );
  
const CreateAccount = (props) => {
  const { navigate } = props.navigation;

  const [valueUsername, onChangeTextUsername] = React.useState();
  const [valueEmail, onChangeTextEmail] = React.useState();
  const [valuePassword1, onChangeTextPassword1] = React.useState();
  const [valuePassword2, onChangeTextPassword2] = React.useState();

  const [successMessage, setSuccessMessage] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [usernameError, setUsernameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState();
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordHidden, setPasswordHidden] = React.useState(true);

  //const {userReducer, onUserLogIn, onUserLogOut, onFetchProduct} = props;

  //const {currentUser, products, appError} = userReducer;

  async function accountCreation() {
    setError("");
    setSuccessMessage("");
    if(usernameVerification()){
      if(emailVerification()){
        if(passwordVerification()){
          setUsernameError(false);
          setEmailError(false);
          setPasswordError(false);
          const username = valueUsername;
          const email = valueEmail;
          const password = valuePassword1;
          var response = registration(username, email, password, 'DEFAULT_TO_BE_CHANGED', 'DEFAULT_TO_BE_CHANGED');
          /*axios.post('http://localhost:8888/?action=users', {username, email, password})
          .then(function(){
            console.log("CA MARCHE");
            setSuccessMessage("Le compte a bien été crée");
          })
          .catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              var data = error.response.data;
              if(data.includes("email")){
                setError("L'email " + email + " est déjà utilisé !");
              }
              else{
                setError("Erreur: " + error.response.data);
                //console.log(error.response.data);
              }
            }
            else if (error.request) { // The request was made but no response was received
              setError("Serveur inaccessible ! Etes vous connecté à internet ?");
              //console.log("PAS DE CONNEXION" + error.request);
            }
            else { // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
              setError('Error:' + error.message);
            }
          });*/
        }
        else{
          setError(passwordErrorMessage);
        }
      }
      else{
        setError("L'adresse e-mail n'est pas correctement renseignée !");
      }
    }
    else{
      setError("Le nom d'utilisateur est trop court ! (6 caractères min.)");
    }
  }
  
  // RETURN TRUE IF USERNAME VALUE IS NOT NULL AND 6 OR + CHARACTERS LONG ELSE RETURN FALSE
  function usernameVerification() {
    if(valueUsername != null && valueUsername.length >= 6) return true;
    else return false;
  }

  // RETURN TRUE IF EMAIL VALUE IS CORRECTLY FORMED ELSE RETURN FALSE
  function emailVerification() {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(valueEmail);
  }

  // RETURN TRUE IF PASSWORD VALUE IS NOT NULL AND 6 OR + CHARACTERS LONG ELSE RETURN FALSE
  function passwordVerification() {
    if(valuePassword1 == null || valuePassword2 == null){
      setPasswordErrorMessage("L'un des mots de passe n'est pas correctement renseigné");
      return false;
    }
    else if (valuePassword1 === valuePassword2 && valuePassword1.length >= 6){
      return true;
    }
    else{
      setPasswordErrorMessage("Les mots de passe entrés ne sont pas identiques !");
      return false;
    }
  }

  return (
    <ScreenContainer>
      <Image style={{ resizeMode: 'contain', height: 220 }} source={require("../src/Logo.001.png")}/>

      <Text style={{fontSize:40}}>Inscription</Text>

      {/* NOM UTILISATEUR */}
      <View style={[styles.inputContainer]}>
        <MaterialCommunityIcons name={"account"} size={30} style={styles.inputImage}/>
        <TextInput
          onBlur= {() => setUsernameError(!usernameVerification())}
          onChangeText= {text => onChangeTextUsername(text)}
          placeholder="nom d'utilisateur"
          placeholderTextColor = 'lightgrey'
          autoCapitalize="none"
          autoCorrect={false}
          style={[styles.input, {color: usernameError
            ? '#C0392B'
            : 'black',
          }]}
        />
      </View>

      {/* EMAIL */}
      <View style={[styles.inputContainer]}>
        <MaterialCommunityIcons name={"at"} size={28} style={[styles.inputImage, {paddingLeft:4}]}/>
        <TextInput
          keyboardType = 'email-address'
          onBlur= {() => setEmailError(!emailVerification())}
          onChangeText= {text => onChangeTextEmail(text)}
          placeholder='email'
          placeholderTextColor = 'lightgrey'
          autoCapitalize="none"
          autoCorrect={false}
          style={[styles.input, {color: emailError
            ? '#C0392B'
            : 'black',
          }]}
        />
      </View>
      
      {/* MOT DE PASSE */}
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name={"lock"} size={30} style={[styles.inputImage, {paddingLeft:3}]}/>
        <TextInput
          onBlur= {() => setPasswordError(!passwordVerification())}
          onChangeText= {text => onChangeTextPassword1(text)}
          placeholder='mot de passe'
          placeholderTextColor = 'lightgrey'
          secureTextEntry={passwordHidden}
          autoCapitalize="none"
          autoCorrect={false}
          style={[styles.input, {color: passwordError
            ? '#C0392B'
            : 'black',
          }]}
        />
        <TouchableOpacity onPress={() => setPasswordHidden(!passwordHidden)} style={styles.inputImage}>
          <MaterialCommunityIcons name={passwordHidden ? 'eye' : 'eye-off'} size={25} style={styles.inputImage}/>
        </TouchableOpacity>
      </View>

      {/* REPETER MOT DE PASSE */}
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name={"lock"} size={30} style={[styles.inputImage, {paddingLeft:3}]}/>
        <TextInput
          onBlur= {() => setPasswordError(!passwordVerification())}
          onChangeText= {text => onChangeTextPassword2(text)}
          placeholder='répéter mot de passe'
          placeholderTextColor = 'lightgrey'
          secureTextEntry={passwordHidden}
          autoCapitalize="none"
          autoCorrect={false}
          style={[styles.input, {color: passwordError
            ? '#C0392B'
            : 'black',
          }]}
        />
      </View>

      {(error!== "") ? (<Text style={styles.errorText}>{error}</Text>) : ( (successMessage !== "") ? (<Text style={styles.successText}>{successMessage}</Text>) : (<Text style={styles.successText}></Text>) )}

      <TouchableOpacity onPress={() => accountCreation()} style={styles.loginButton}>
        <Text style={{fontSize:18}}>Créer un compte</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigate("SignIn")} style={styles.createAccountButton}>
        <Text style={styles.createAccountButtonText}>Vous avez déjà un compte ? Se connecter</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

const mapStateToProps = (state) => ({
  userReducer : state.userReducer,
});

//const CreateAccountScreen = connect(mapStateToProps, { onUserLogIn, onUserLogOut, onFetchProduct })(CreateAccount);

//export default CreateAccountScreen;
export default CreateAccount;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  inputContainer:{
    height: 45,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 15,
    marginLeft:10,
    marginRight:10,
    marginTop:10
  },
  input:{
    flex: 1,
    paddingLeft: 10,
    fontSize: 20,
  },
  inputImage:{
    padding: 5,
    alignSelf: "center"
  },
  forgetPasswordButton:{
    flexDirection:'row', 
    fontSize:12, 
    padding:2, 
    color:"gray"
  },
  forgetPasswordButtonText:{
    marginLeft: 180,
    textDecorationLine: 'underline',
  },
  errorText:{
    marginTop:5,
    fontWeight:'bold',
    fontSize:15,
    color:'red',
    height:20
  },
  successText:{
    marginTop:5,
    fontWeight:'bold',
    fontSize:15,
    height:20
  },
  loginButton:{
    width:"90%",
    backgroundColor:"#cccccc",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10
  },
  loginButtonText:{
    fontSize:18
  },
  createAccountButton:{
    width:"90%",
    borderRadius:25,
    borderWidth: 1,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10
  },
  createAccountButtonText:{
    fontSize:18
  }
});