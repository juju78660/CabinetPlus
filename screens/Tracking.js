import React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text, Alert } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

/* LOCATION:
ABLIS:  48.516594, 1.834314
RAMBOUILLET: 48.622921, 1.830330
POISSY: 48.923945, 2.054325
MAURECOURT: 48.994475, 2.068787
*/

// MAP
import MapView, { AnimatedRegion, Marker } from 'react-native-maps';

//REDUX
import { connect } from 'react-redux';
import { onUserLogOut, onUserLogIn } from '../redux/actions';

const ScreenContainer = ({ children }) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);



const Tracking = (props) => {
  const [currentPos, setCurrentPos] = React.useState(false);
  const {userReducer} = props;

  const {currentUser, products, appError} = userReducer;

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
        position => {
        let region = {
                latitude: parseFloat(position.coords.latitude),
                longitude: parseFloat(position.coords.longitude),
                latitudeDelta: 1,
                longitudeDelta: 1
            };
            Alert.alert("Position: " + position);
        },
        error => console.log(error),
        {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000
        }
    );
  }

  return (
    <ScreenContainer>
        <MapView style={styles.map} showsUserLocation={true}/>
        <Marker coordinate = {{latitude: 48.622921,longitude: 1.830330}}/>
        <TouchableOpacity onPress={() => Alert.alert("salut")} style={styles.trackingButton}>
          <Text style={styles.trackingButtonText}>Tracking</Text>
        </TouchableOpacity>
    </ScreenContainer>
  );
};

const mapStateToProps = (state) => ({
  userReducer : state.userReducer,
});

const TrackingScreen = connect(mapStateToProps, { onUserLogIn, onUserLogOut })(Tracking);

export default TrackingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  },
  trackingButton: {
    width:"90%",
    borderRadius:25,
    borderWidth: 1,
    height:50,
    alignSelf: "center",
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10

  },
  trackingButtonText:{
    fontSize:18
  }
});