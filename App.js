import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, Button, Alert } from "react-native";


// REDUX
import { Provider } from 'react-redux';
import { store, appPersist } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { connect } from 'react-redux';
import { onUserLogOut, onUserLogIn, onFetchProduct } from './redux/actions';

import AuthNavigator from './navigation/AuthNavigator';
import MainNavigator from './navigation/MainNavigator';

import RootNavigatorScreen from './navigation/RootNavigator';

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={appPersist}>
          < RootNavigatorScreen style={styles.container}/>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});