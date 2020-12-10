import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';


//REDUX
import { connect } from 'react-redux';
import { onUserLogIn, onUserLogOut, onFetchProduct } from '../redux/actions';

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

  const {userReducer, onUserLogIn, onUserLogOut, onFetchProduct} = props;

  const {currentUser, products, appError} = userReducer;
  if(appError != "" && appError != error){
    setError(appError);
  }
  
  function authentification() {
    if(emailVerification()){
      if(passwordVerification()){
        setEmailError(false);
        setPasswordError(false);
        onUserLogIn({email: valueEmail, password: valuePassword});
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
      <Text style={{fontSize:40}}>Connexion</Text>

      {/* EMAIL */}
      <View style={[styles.inputContainer]}>
        <MaterialCommunityIcons name={"account"} size={40} style={styles.inputImage}/>
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
        <MaterialCommunityIcons name={"lock"} size={37} style={[styles.inputImage, {paddingLeft:3}]}/>
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
          <MaterialCommunityIcons name={passwordHidden ? 'eye' : 'eye-off'} size={25} style={[styles.inputImage]}/>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigate("ForgetPassword")} style={{flexDirection:'row', fontSize:12, padding:2, color:"gray"}}>
        <Text style={styles.forgetPasswordButtonText}>Mot de passe oublié ?</Text>
      </TouchableOpacity>
      
      {(error!== "") ? (<Text style={{fontWeight:'bold', fontSize:15, color:'red', height:20}}>{error}</Text>) : (<Text></Text>)}

      <TouchableOpacity onPress={() => authentification()} style={styles.loginButton}>
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

const SignInScreen = connect(mapStateToProps, { onUserLogIn, onUserLogOut, onFetchProduct })(SignIn);

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
    padding: 2,
    alignSelf: "center"
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