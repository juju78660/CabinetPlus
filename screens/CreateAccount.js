import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity} from "react-native";
  

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
  );


export default function CreateAccount({ navigation}) {
  const [valueUsername, onChangeTextUsername] = React.useState();
  const [valueEmail, onChangeTextEmail] = React.useState();
  const [valuePassword1, onChangeTextPassword1] = React.useState();
  const [valuePassword2, onChangeTextPassword2] = React.useState();

  const [error, setError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  // RETURN TRUE IF EMAIL VALUE IS CORRECTLY FORMED ELSE RETURN FALSE
  function emailVerification() {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(valueEmail);
  }

  // RETURN TRUE IF PASSWORD VALUE IS NOT NULL AND 4 OR + CHARACTERS LONG ELSE RETURN FALSE
  function passwordVerification() {
    if(valuePassword1 == null || valuePassword2 == null) return true;
    else if (valuePassword1 === valuePassword2 && valuePassword1.length >= 4){
      return true;
    }
    else return false;
  }

    return (
      <ScreenContainer>
        <Button title="Sign Up" onPress={() => alert('todo')} />
        <TextInput
          onChangeText={text => onChangeTextUsername(text)}
          placeholder="nom d'utilisateur"
          placeholderTextColor = 'grey'
          autoCapitalize="none"
          style={styles.input}
        />

        <TextInput
          onBlur= {() => setEmailError(!emailVerification())}
          onChangeText={text => onChangeTextEmail(text)}
          placeholder='email'
          placeholderTextColor = 'grey'
          autoCapitalize="none"
          style={[styles.input, {borderColor: emailError
            ? 'red'
            : 'black',
          }]}
        />
        <TextInput
          onBlur= {() => setPasswordError(!passwordVerification())}
          onChangeText={text => onChangeTextPassword1(text)}
          placeholder='mot de passe'
          placeholderTextColor = 'grey'
          autoCapitalize="none"
          style={[styles.input, {borderColor: passwordError
            ? 'red'
            : 'black',
          }]}
        />

        <TextInput
          onBlur= {() => setPasswordError(!passwordVerification())}
          onChangeText={text => onChangeTextPassword2(text)}
          placeholder='répéter le mot de passe'
          placeholderTextColor = 'grey'
          autoCapitalize="none"
          style={[styles.input, {borderColor: passwordError
            ? 'red'
            : 'black',
          }]}
        />

      <TouchableOpacity onPress={() => Alert.alert("inscription")} style={styles.loginButton}>
        <Text style={{fontSize:18}}>Inscription</Text>
      </TouchableOpacity>
      </ScreenContainer>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    input: {
      width:"80%",
      fontSize: 20,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'grey',
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
      width:"80%",
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
      width:"80%",
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