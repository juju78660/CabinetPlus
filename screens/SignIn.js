import React, { useState, Component} from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity} from "react-native";

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
  );
  
const useLoginFormState = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submit, setSubmit] = useState(false);

  return {
    email: {
      value: email,
      set: setEmail,
    },
    password: {
      value: password,
      set: setPassword,
    },
    submit: {
      value: submit,
      set: () => {
        setSubmit(true);
      },
    },
  };
};
  
export default SignIn  = ({ navigation }) => {
  const { email, password, submit } = useLoginFormState();
  state = {
    emailValue: "",
    passwordValue: ""
	};

    return (
      <ScreenContainer>
        <TextInput
          keyboardType = 'email-address'
          onChangeText={email.setEmail}
          placeholder='email'
          placeholderTextColor = 'grey'
          autoCapitalize="none"
          style={styles.input}
        />

        <TextInput
          onChangeText={password.setPassword}
          placeholder={'mot de passe'}
          secureTextEntry={true}
          placeholderTextColor = 'grey'
          autoCapitalize="none"
          style={styles.input}
        />
        <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")} style={styles.forgetPasswordButton}>
          <Text style={styles.forgetPasswordButtonText}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={submit.set} style={styles.loginButton}>
          <Text style={{fontSize:18}}>Connexion</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")} style={styles.createAccountButton}>
          <Text style={styles.createAccountButtonText}>Créer un compte</Text>
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