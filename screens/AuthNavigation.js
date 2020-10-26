import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";


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
    }
  });
  

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
  );
  
const AuthNavigator = ({ navigation }) => (
    <ScreenContainer>
        <Button title="Connexion" onPress={() =>  
            navigation.push("SignIn")
        }/>
        <Button title="Inscription" onPress={() =>  
            navigation.push("CreateAccount")
        }/>
    </ScreenContainer>
);

export default AuthNavigator;