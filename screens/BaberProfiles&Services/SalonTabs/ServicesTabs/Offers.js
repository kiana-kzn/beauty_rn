import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';


export default Offers = ({navigation}) => {
 return (
  <ScrollView contentContainerStyle={styles.body}>
   <View style={styles.view}>
    <Image source={require('../../../../assets/170.png')} style={styles.image} />
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8.9 }}>
     <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Bridal Beauty Makeup</Text>
     <TouchableOpacity onPress={() => navigation.navigate('Bridal')}>
      <Text style={{ color: '#E4B343', fontSize: 15 }}>Book Now</Text>
     </TouchableOpacity>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 2 }}>
     <Text style={{ color: "#707070", fontSize: 12 }}>Completed Package Offer till Sep 18, 2019</Text>
     <Text style={{ color: "#FFF", fontSize: 12 }}>$280.30</Text>
    </View>
   </View>
   <View style={[styles.view, { marginTop: 31 }]}>
    <Image source={require('../../../../assets/171.png')} style={styles.image} />
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8.9 }}>
     <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Haircut & Hairstyle</Text>
     <TouchableOpacity>
      <Text style={{ color: '#E4B343', fontSize: 15 }}>Book Now</Text>
     </TouchableOpacity>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 2 }}>
     <Text style={{ color: "#707070", fontSize: 12 }}>Luxury Package offer till Nov 24, 2019</Text>
     <Text style={{ color: "#FFF", fontSize: 12 }}>$160.45</Text>
    </View>
   </View>
  </ScrollView >
 )
}


const styles = StyleSheet.create({
 body: {
  backgroundColor: '#212327',
  flex: 1,
  justifyContent: 'center'
 },

 view: {
  marginTop: 16.5,
  marginLeft: 16,
  marginRight: 16,

 },

 image: {
  alignSelf: 'center',
  width: Dimensions.get('window').width / 1.1,
  borderRadius: 15,
  height: Dimensions.get('window').height / 4
 },

})