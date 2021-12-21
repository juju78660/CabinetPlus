import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, SafeAreaView, TouchableOpacity, Text, Alert } from "react-native";
//import * as Location from 'expo-location';
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
//import {usePermissions} from "expo-permissions";

const ScreenContainer = ({ children }) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);



const Tracking = (props) => {
  const [currentPos, setCurrentPos] = useState(false);
  //const {userReducer} = props;

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);



    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync()
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
        console.log("Erreur:" + text);
    } else if (location) {
        text = JSON.stringify(location);
        console.log("Location:" + text);
    }

  const {region, setRegion } = {
    latitude: 48.923945,
    longitude: 2.054325,
    latitudeDelta: 0.03,
    longitudeDelta: 0.03
  };
  const [marker, setMarker] = React.useState(false); 


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
            return;
        },
        error => console.log(error),
        {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000
        }
    );
  }

  function click(e){
    console.log("Marker:");
    console.log(e.nativeEvent.coordinate);
    setMarker(e.nativeEvent.coordinate);
  };

  return (
    <ScreenContainer>
        <MapView style={styles.map} region={region} showsUserLocation followsUserLocation showsMyLocationButton={true}
          onPress={(e) => click(e)}>
          {
                marker &&
                <MapView.Marker coordinate={marker} />
          }
        </MapView>
        <Text> {text}</Text>
        <TouchableOpacity onPress={() => getCurrentLocation()} style={styles.trackingButton}>
          <Text style={styles.trackingButtonText}>Tracking</Text>
        </TouchableOpacity>
    </ScreenContainer>
  );
};

const mapStateToProps = (state) => ({
  userReducer : state.userReducer,
});


//const TrackingScreen = connect(mapStateToProps, { onUserLogIn, onUserLogOut })(Tracking);

export default Tracking;

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