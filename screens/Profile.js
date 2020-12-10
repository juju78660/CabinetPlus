import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";

//REDUX
import { connect } from 'react-redux';
import { onUserLogOut, onUserLogIn, onFetchProduct } from '../redux/actions';


const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const Profile = (props) => {
  const {userReducer, onUserLogIn, onUserLogOut, onFetchProduct} = props;

  const {currentUser, products, appError} = userReducer;


  return (
    <ScreenContainer>
      <Text>Profil</Text>
      <Text>{currentUser.username}</Text>
      <Button title="Drawer" onPress={() => alert('todo')} />
      <Button title="Sign Out" onPress={() => onUserLogOut({})} />
    </ScreenContainer>
  );
};

const mapStateToProps = (state) => ({
  userReducer : state.userReducer,
});

const ProfileScreen = connect(mapStateToProps, { onUserLogIn, onUserLogOut, onFetchProduct })(Profile);

export default ProfileScreen;

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