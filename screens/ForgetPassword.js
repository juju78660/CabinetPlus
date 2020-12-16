import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, Alert } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginVertical: 10,
      borderRadius: 5
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
  });

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
  );
  
  export default function ForgetPassword({ navigation}) {
    const [valueEmail, onChangeTextEmail] = React.useState();

    const [emailError, setEmailError] = React.useState(false);

    // RETURN TRUE IF EMAIL VALUE IS CORRECTLY FORMED ELSE RETURN FALSE
  function emailVerification() {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(valueEmail);
  }

  function password_reset_verification(){
    if(emailVerification()){
      setEmailError(false);
      Alert.alert("ENVOI MAIL MODIF MDP");
    } 
    else setEmailError(true);
  }
    return (
      <ScreenContainer>
        <Text style={{fontSize:40}}>Réinitialiser le mot de passe</Text>
        <TextInput
          keyboardType = 'email-address'
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
      <TouchableOpacity onPress={() => password_reset_verification()} style={styles.createAccountButton}>
        <Text style={styles.createAccountButtonText}>Modifier le mot de passe</Text>
      </TouchableOpacity>
      </ScreenContainer>
    );
  };