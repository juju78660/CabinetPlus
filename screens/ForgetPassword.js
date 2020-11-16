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
  
  export default function ForgetPassword({ navigation}) {
    return (
      <ScreenContainer>
        <Text>Forget Password Screen</Text>
        <Button title="Sign Up" onPress={() => alert('todo')} />
      </ScreenContainer>
    );
  };