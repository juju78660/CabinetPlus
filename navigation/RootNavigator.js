import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

//REDUX
import { connect } from 'react-redux';
import { onUserLogOut, onUserLogIn, onFetchProduct } from '../redux/actions';

import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const RootNavigator = (props) => {
  const {userReducer, onUserLogIn, onUserLogOut, onFetchProduct} = props;

  const {currentUser, products, appError} = userReducer;

  return (
    <NavigationContainer style={styles.container}>
      {(currentUser !== null) ? <MainNavigator /> : <AuthNavigator />}
  </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  userReducer : state.userReducer,
});

const RootNavigatorScreen = connect(mapStateToProps, { onUserLogIn, onUserLogOut, onFetchProduct })(RootNavigator);

export default RootNavigatorScreen;

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