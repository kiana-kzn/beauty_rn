import React from 'react';
import { ImageBackground } from 'react-native';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import 'react-native-gesture-handler';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const ShowImage = (props) => {
 return (
  <View>
   <ImageBackground source={props.route.params.image}
    style={{ height: deviceHeight, width: deviceWidth }} />
  </View>
 )
}

export default ShowImage