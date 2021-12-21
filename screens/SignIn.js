import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Image} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {signIn} from "../API/firebaseMethods";
import {Alert} from "react-native";
import axios from "axios";

//REDUX
/*
import { connect } from 'react-redux';
import { onUserLogIn, onUserLogOut, onFetchProduct } from '../redux/actions';
*/
const ScreenContainer = ({ children }) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
  );
  
const SignIn = (props) => {
  const { navigate } = props.navigation;
  const [valueEmail, onChangeTextEmail] = React.useState();
  const [valuePassword, onChangeTextPassword] = React.useState();

  const [error, setError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordHidden, setPasswordHidden] = React.useState(true);

  //const {userReducer, onUserLogIn, onUserLogOut, onFetchProduct} = props;

  //const {currentUser, products, appError} = userReducer;

  function signInVerification() {
    if(emailVerification()){
      if(passwordVerification()){
        setError(false);
        setEmailError(false);
        setPasswordError(false);
        var response = signIn(valueEmail, valuePassword);
        /*onUserLogIn({email: valueEmail, password: valuePassword});
        if(appError) {
          console.log("ERREUR:" + appError);
          setError(appError);
        }*/
      }
      else{
        setError("Le mot de passe est trop court ! (6 caractères min.)");
      }
    }
    else{
      setError("L'adresse e-mail n'est pas correctement renseignée !");
    }
  }
  
  // RETURN TRUE IF EMAIL VALUE IS CORRECTLY FORMED ELSE RETURN FALSE
  function emailVerification() {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(valueEmail);
  }

  // RETURN TRUE IF PASSWORD VALUE IS NOT NULL AND 6 OR + CHARACTERS LONG ELSE RETURN FALSE
  function passwordVerification() {
    if(valuePassword != null && valuePassword.length >= 6) return true;
    else return false;
  }

  // FUNCTION THAT USES CABINET PLUS API TO LOGIN -> NOT WORKING YET
  async function signInTest(email, password) {
    try {
      const response = await axios.get('https://localhost/login', {params:{'email':email, 'password': password}});
      Alert.alert("Error", response);
    } catch (err) {
      if (err.message == "The password is invalid or the user does not have a password.") Alert.alert("Email/mot de passe invalide !");
      else Alert.alert("Error", err.message);
    }
  }

  return (
    <ScreenContainer>
      <Image style={{ resizeMode: 'contain', height: 220 }} source={require("../src/Logo.001.png")}/>
      

      <Text style={{fontSize:40}}>Connexion</Text>

      {/* EMAIL */}
      <View style={[styles.inputContainer]}>
        <MaterialCommunityIcons name={"at"} size={30} style={styles.inputImage}/>
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
        <MaterialCommunityIcons name={"lock"} size={28} style={styles.inputImage}/>
        <TextInput
          onBlur= {() => setPasswordError(!passwordVerification())}
          onChangeText= {text => onChangeTextPassword(text)}
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

      <View style={{flexDirection: 'row', justifyContent: 'flex-end', width:"100%"}}>
        <TouchableOpacity onPress={() => navigate("ForgetPassword")} style={styles.forgetPasswordButton}>
          <Text style={[styles.forgetPasswordButtonText, {}]}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
      </View>

      {/* MOT DE PASSE */}
      {(error) ? (<Text style={styles.errorText}>{error}</Text>) : (<Text style={styles.errorText}></Text>)}

      <TouchableOpacity onPress={() => signInVerification()} style={styles.loginButton}>
        <Text style={{fontSize:18}}>Connexion</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigate("CreateAccount")} style={styles.createAccountButton}>
        <Text style={styles.createAccountButtonText}>Créer un compte</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

const mapStateToProps = (state) => ({
  userReducer : state.userReducer,
});

//const SignInScreen = connect(mapStateToProps, { onUserLogIn, onUserLogOut, onFetchProduct })(SignIn);

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  logo: {
    resizeMode : 'contain',
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
    fontSize:12, 
    padding:2, 
    color:"gray",
    marginRight:30
  },
  forgetPasswordButtonText:{
    textDecorationLine: 'underline',
  },
  errorText:{
    fontWeight:'bold',
    fontSize:15,
    color:'red',
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