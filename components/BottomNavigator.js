import React from 'react';
//import 'react-native-gesture-handler';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';

export default ButtomNavigator = ({ navigation }) => {
  const toggleOpen = () => {

  };

 return (
  <View style={{ alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>

   <TouchableOpacity style={styles.floatingBtn}>
    <Image source={require('../assets/chat.png')}
     style={{ alignSelf: "center", }} />
   </TouchableOpacity>

   <View style={styles.bottomBar}>
    <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('HomePage')} >
     <Image source={require('../assets/homepage.png')} />
     <Text style={styles.bottomText}>Home</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{ alignItems: 'center', marginRight: 25 }} onPress={() => navigation.navigate('Nearby')}>
     <Image source={require('../assets/pinn.png')} />
     <Text style={styles.bottomText}>Near By</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{ alignItems: 'center', marginLeft: 25 }} onPress={() => navigation.navigate('SalonsProfile')}>
     <Image source={require('../assets/book.png')} />
     <Text style={styles.bottomText}>Booking</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{ alignItems: 'center' }}>
     <Image source={require('../assets/ic_profile.png')} style={{}} />
     <Text style={styles.bottomText}>Profile</Text>
    </TouchableOpacity>

   </View>
  </View >
 )
}



const styles = StyleSheet.create({

 bottomBar: {
  backgroundColor: '#323446',
  width: '100%',
  height:81,
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 23,
  paddingVertical: 11,
  padding: 10,

 },
 bottomText: {
  fontSize: 11,
  color: 'white',
  textAlign: 'center',
  marginTop: 3.5
 },
 floatingBtn: {
  position: 'absolute',
  alignSelf: 'center',
  width: 70,
  height: 64,
  bottom: 35,
  zIndex: 10,
  backgroundColor: '#212327',
  borderRadius: 35,
 

 }
})



