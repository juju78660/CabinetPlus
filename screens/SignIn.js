import React from 'react';
import { View, Text, StyleSheet, TextInput, Alert, TouchableOpacity, Screen, Button} from "react-native";

//REDUX
import { connect } from 'react-redux';
import { onUserLogOut, onUserLogIn, onFetchProduct } from '../redux/actions';

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
  );
  
  const SignIn = (props) => {
    const [valueEmail, onChangeTextEmail] = React.useState();
    const [valuePassword, onChangeTextPassword] = React.useState();

    const [error, setError] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);

    
    function authentification() {
      if(emailVerification()){
        if(passwordVerification()){
          setError(" ");
          fetch('http://localhost:8888/?action=authenticate', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'multipart/form-data'
            },
            body: JSON.stringify({
              email: valueEmail,
              password: valuePassword
            })
          }).then((response) => response.json())
          .then((json) => {
            if(json.hasOwnProperty('token')){ // SI LE COMPTE EXISTE BIEN
              //setToken(json['token']);
              Alert.alert("CONNECTE");
            // navigation.navigate('Home');
            }
            else setError(json["message"]);
            console.log(json);
          }).catch((error) => {
              console.error(error);
          });
        }
        else{
          setError("Le mot de passe est trop court ! (4 caractères min.)");
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

    // RETURN TRUE IF PASSWORD VALUE IS NOT NULL AND 4 OR + CHARACTERS LONG ELSE RETURN FALSE
    function passwordVerification() {
      if(valuePassword != null && valuePassword.length >= 4) return true;
      else return false;
    }

    return (
      <ScreenContainer>
        <TextInput
          keyboardType = 'email-address'
          onBlur= {() => setEmailError(!emailVerification())}
          onChangeText= {text => onChangeTextEmail(text)}
          placeholder='email'
          placeholderTextColor = 'lightgrey'
          autoCapitalize="none"
          autoCorrect={false}
          style={[styles.input, {borderColor: emailError
                ? 'red'
                : 'black',
          }]}
        />

        <TextInput
          onBlur= {() => setPasswordError(!passwordVerification())}
          onChangeText= {text => onChangeTextPassword(text)}
          placeholder='mot de passe'
          placeholderTextColor = 'lightgrey'
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          style={[styles.input, {borderColor: passwordError
            ? 'red'
            : 'black',
          }]}
        />

        <Text style={{fontWeight:'bold', fontSize:12, color:'red'}}>{error}</Text>

        <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")} style={styles.forgetPasswordButton}>
          <Text style={styles.forgetPasswordButtonText}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => authentification()} style={styles.loginButton}>
          <Text style={{fontSize:18}}>Connexion</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")} style={styles.createAccountButton}>
          <Text style={styles.createAccountButtonText}>Créer un compte</Text>
        </TouchableOpacity>
      </ScreenContainer>
  );
};

const mapStateToProps = (state) => ({
  userReducer : state.userReducer,
});

const SignInScreen = connect(mapStateToProps, { onUserLogIn, onUserLogOut, onFetchProduct })(SignIn);

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width:"90%",
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    color:"#888"
  },
  forgetPasswordButton:{
    fontSize:12,
    color:"gray",
    marginBottom: 20,
  },
  forgetPasswordButtonText:{
    marginLeft: 180,
    textDecorationLine: 'underline',
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