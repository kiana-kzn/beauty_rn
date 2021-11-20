import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  StyleSheet, View, SafeAreaView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback,
  Image, Platform, PermissionsAndroid
} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Geolocation from '@react-native-community/geolocation';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BestSalons from './Home&NearbyScreens/BestSalons';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNavigator from '../components/BottomNavigator';
//import BottomSheet from 'reanimated-bottom-sheet';




MapboxGL.setAccessToken('pk.eyJ1IjoiZGFydGhrYWkiLCJhIjoiY2t0ZWJidnpoMm80dDJ3cGxwNnhkaWl4MCJ9.EkwUTtkB1ucZK6oFuCTvlg');
Geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true });
function successLocation(position) {
  console.log('position: ', position);
  const center = [position.coords.longitude, position.coords.latitude];
  console.log('center', center);
  setupMap([position.coords.longitude, position.coords.latitude])
  return center
};

function errorLocation() {
  console.warn('Location Error');
  setupMap([-2.24, 53.48])
}

function setupMap() {

};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Press Me",
      isLoading: true,
      dataSource: null,
      coordinates: [51.407, 35.7117], 
      region: 'Tehran'
    };
  }
  formatUserName = (textValue) => {
    this.setState({ region: textValue.toUpperCase() });
  }

  UNSAFE_componentWillUpdate() {
    const place = this.state.region;
    console.log('place: ', place)
    const requestMicrophone = async () => {
      if (Platform.OS !== "android") {
        return false;
      }
      try {
        const granted = PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: "Microphone Access",
            message:
              "The app needs access to the microphone to hear voice commands."
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
      }
    }

    return (
      fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/tehran.json?limit=2&access_token=pk.eyJ1IjoiZGFydGhrYWkiLCJhIjoiY2t0ZWJidnpoMm80dDJ3cGxwNnhkaWl4MCJ9.EkwUTtkB1ucZK6oFuCTvlg")
        .then(response => response.json())
        .then(response => {
          this.setState({ isLoading: false, dataSource: response.tehran });
          console.log("Res:" + JSON.stringify(response.features[1].geometry.coordinates));
        })
        .catch(err => console.log(err))

        
    );
  }


  render() {
    const { coordinates } = this.state;

    return (
      <>
        <View style={styles.page}>
          <SafeAreaView style={styles.topView}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={styles.locationText}>Your location</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity>
                  <Fontisto
                    name={"bell"}
                    color={'white'}
                    size={21}
                    style={{ paddingRight: 35 }}
                  />
                  <View style={{
                    position: 'absolute', width: 10, height: 10,
                    borderRadius: 50, backgroundColor: '#E4B343', top: 1, right: 31
                  }} />

                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Filters') }}>
                  <FontAwesome
                    name={'filter'}
                    color={'white'}
                    size={21}
                    style={{ marginRight: 16 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', paddingTop: 7, paddingLeft: 16, alignItems: 'center' }}>
                <Ionicons
                  name={'location-sharp'}
                  color={'white'}
                  size={20}
                  style={{ paddingRight: 8 }}
                />
                <Text style={{ fontSize: 14, color: 'white' }}> {this.state.region}</Text>
                <Image source={require('../assets/ic_direction.png')}
                  style={{ marginLeft: 23 }}
                />
              </View>
            </View>
            <View style={{ alignItems: 'center' }}>
              <View style={styles.row}>
                <Ionicons name={'ios-search-outline'} size={21} color={'#999999'}
                  style={{ paddingRight: 10 }} />
                <TextInput
                  autoCapitalize={'words'}
                  placeholder={'Search for salon, spa and barber'}
                  placeholderTextColor={'#999999'}
                  color='white'
                  onChangeText={region => this.setState({region})}
                  defaultValue={this.state.region}
                />
                {console.log('region: ', this.state.region)}

                <TouchableWithoutFeedback onPress={this.requestMicrophone}>
                  <FontAwesome name={'microphone'} size={21} color={'gray'}
                    style={{ marginLeft: 100 }} />
                </TouchableWithoutFeedback>
              </View>
            </View>
          </SafeAreaView>
          <View style={styles.container}>
            <MapboxGL.MapView style={styles.map} />
          </View>
          <View style={styles.container}>
            <MapboxGL.MapView style={styles.map}>
              <MapboxGL.Camera
                zoomLevel={10}
                centerCoordinate={coordinates}                           ////[78.9629, 20.5937]
                showUserLocation={true}
                followUserLocation={true}
              />
              <MapboxGL.UserLocation showsUserHeadingIndicator={true} />
              <MapboxGL.PointAnnotation coordinate={coordinates} />
              {/* <View>{renderAnnotations()}</View> */}
              <MapboxGL.MarkerView coordinate={coordinates}>
                <View style={styles.markerContainer}>
                  <Image
                    source={require("../assets/Pin.png")}
                    style={{

                      resizeMode: "cover",
                    }}
                  />
                  <Text style={styles.text}>Looks Unisex Salon</Text>
                </View>
              </MapboxGL.MarkerView>
            </MapboxGL.MapView>
            <View style={{ position: 'absolute', bottom: 160 }}>
              {/* {salons()} */}
            </View>
            <TouchableWithoutFeedback>
              <View style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 15, bottom: 180 }}>
                <View style={styles.detail}>
                  <Image source={require('../assets/detail.png')} style={{ alignSelf: 'center' }} />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <BottomNavigator />

      </>
    );
  }
}


const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    height: '100%',
    width: '100%',
  },
  map: {
    flex: 1
  },
  markerContainer: {
    alignItems: "center",
    width: 70,
    backgroundColor: "transparent",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 11,
  },
  topView: {
    backgroundColor: '#323446',
    width: '100%',
    height: 157,
    justifyContent: 'center',
  },
  locationText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
    paddingLeft: 16,
  },
  location: {
    fontSize: 12.6,
  },
  row: {
    marginTop: 17,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderRadius: 15,
    backgroundColor: '#212327',
    height: 45,
    paddingLeft: 12,
  },
  textSalon: {
    color: 'black',
    fontSize: 15,
    fontFamily: "Tofino",
    marginTop: 4,
    marginLeft: 10
  },
  location: {
    fontSize: 12.6,
  },
  detail: {
    backgroundColor: '#F04C71',
    borderRadius: 50,
    borderWidth: 3,
    width: 56,
    height: 56,
    borderColor: '#F04C71',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    marginTop: 27,
  }
});