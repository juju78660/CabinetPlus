import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, Button, Alert } from "react-native";

import Firebase from './Firebase';

// REDUX
/*import { Provider } from 'react-redux';
import { store, appPersist } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { connect } from 'react-redux';
import { onUserLogOut, onUserLogIn, onFetchProduct } from './redux/actions';
*/
import RootNavigatorScreen from './navigation/RootNavigator';

export default () => {

  return (
      <RootNavigatorScreen style={styles.container}/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});