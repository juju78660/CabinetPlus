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

    return (
      <ScreenContainer>
        <Button title="Sign Up" onPress={() => alert('todo')} />
        <TextInput
          onChangeText={text => onChangeTextUsername(text)}
          placeholder='username'
          placeholderTextColor = 'grey'
          autoCapitalize="none"
          style={styles.input}
        />

        <TextInput
          onChangeText={text => onChangeTextEmail(text)}
          placeholder='email'
          placeholderTextColor = 'grey'
          autoCapitalize="none"
          style={styles.input}
        />
        <TextInput
          onChangeText={text => onChangeTextPassword1(text)}
          placeholder='mot de passe'
          placeholderTextColor = 'grey'
          autoCapitalize="none"
          style={styles.input}
        />

        <TextInput
          onChangeText={text => onChangeTextPassword2(text)}
          placeholder='répéter le mot de passe'
          placeholderTextColor = 'grey'
          autoCapitalize="none"
          style={styles.input}
        />

      <TouchableOpacity onPress={() => Alert.alert("inscription")} style={styles.loginButton}>
        <Text style={{fontSize:18}}>Inscription</Text>
      </TouchableOpacity>

        <Button style={styles.forgetPasswordTitle} title="Forget Password" onPress={() => navigation.navigate("ForgetPassword")} />
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