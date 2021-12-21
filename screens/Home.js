import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";

//REDUX
/*
import { connect } from 'react-redux';
import { onUserLogOut, onUserLogIn, onFetchProduct } from '../redux/actions';
*/
const ScreenContainer = ({ children }) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);

const Home = (props) => {
  //const {userReducer, onUserLogIn, onUserLogOut, onFetchProduct} = props;

  //const {currentUser, products, appError} = userReducer;


  return (
    <ScreenContainer>
        <View style={{flex:1, backgroundColor: 'powderblue'}} />
        <View style={{flex:2, backgroundColor: 'skyblue'}} />
        <View style={{flex:4, backgroundColor: 'steelblue'}} />
    </ScreenContainer>
  );
};

const mapStateToProps = (state) => ({
  userReducer : state.userReducer,
});

//const HomeScreen = connect(mapStateToProps, { onUserLogIn, onUserLogOut, onFetchProduct })(Home);

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  }
});