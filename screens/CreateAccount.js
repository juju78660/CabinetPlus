import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity} from "react-native";
  

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
  );
  
const useLoginFormState = () => {
  const [email1, setEmail1] = useState('');
  const [email2, setEmail2] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [submit, setSubmit] = useState(false);

  return {
    email1: {
      value: email1,
      set: setEmail1,
    },
    email2: {
      value: email2,
      set: setEmail2,
    },
    password1: {
      value: password1,
      set: setPassword1,
    },
    password2: {
      value: password2,
      set: setPassword2,
    },
    submit: {
      value: submit,
      set: () => {
        alert('ici');
        setSubmit(true);
      },
    },
  };
};

export default CreateAccount = () => {  
  const { email1, email2, password1, password2, submit } = useLoginFormState();
    return (
      <ScreenContainer>
        <Button title="Sign Up" onPress={() => alert('todo')} />
        <TextInput
          keyboardType = 'email-address'
          onChangeText={email1.setEmail1}
          placeholder='email'
          placeholderTextColor = 'grey'
          autoCapitalize="none"
          style={styles.input}
        />

        <TextInput
          onChangeText={password1.setPassword}
          placeholder={'mot de passe'}
          secureTextEntry={true}
          placeholderTextColor = 'grey'
          autoCapitalize="none"
          style={styles.input}
        />

        <TextInput
          onChangeText={password2.setPassword}
          placeholder={'répéter mot de passe'}
          secureTextEntry={true}
          placeholderTextColor = 'grey'
          autoCapitalize="none"
          style={styles.input}
        />

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