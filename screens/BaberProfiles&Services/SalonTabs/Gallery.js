import React from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions, ScrollView, StyleSheet } from 'react-native';
import Images from './images';
import 'react-native-gesture-handler';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default Gallery = (props) => {
 return (
  <ScrollView style={{ backgroundColor: '#212327', flex: 1 }}>
   <View style={styles.imageView}>
    {Images.map((image, index) => (
     <TouchableOpacity key={index} onPress={() => props.navigation.navigate('ShowImage', { image: image.image })}>
      <Image source={image.image}
       style={{ height: deviceHeight / 3, width: deviceWidth / 3 - 8, borderRadius: 10, marginTop: 16, paddingVertical: 4 }} />
     </TouchableOpacity>
    ))}
   </View>
  </ScrollView >
 )
}


const styles = StyleSheet.create({
 imageView: {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  alignItems:'center'
 }

})