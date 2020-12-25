import React from 'react';
import { StyleSheet } from "react-native";
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
  }
});