import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import StarRating from './StarRating';

export default BarberProfiles = () => {
 return (
  <ScrollView style={{ flex: 1 }}>
   <View style={{ alignItems: 'center', backgroundColor: '#323446' }}>
    <Image source={require('../../assets/Union2.png')} style={styles.image} />
    <Text style={styles.profileText}>Profile</Text>
    <View style={styles.profile}>
     <Image source={require('../../assets/Daniel.png')} style={{ marginTop: -60 }} />
     <Text style={styles.name}>Daniel William</Text>
     <Text style={styles.info}>Barberman at RedBox Barber</Text>
     <StarRating />
     <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
      <View style={{ flexDirection: 'column' }}>
       <Icon
        name="chatbubble"
        type='ionicon'
        color='white'
       />
       <Text style={styles.text}>Chat</Text>
      </View>

      <View style={{ flexDirection: 'column' }}>
       <Icon
        name="phone-call"
        type='feather'
        color='white'
       />
       <Text style={styles.text}>Call</Text>
      </View>
      <View style={{ flexDirection: 'column' }}>
       <Icon
        name="videocam"
        type='material'
        color='white'
       />
       <Text style={styles.text}>Video</Text>
      </View>
      <View style={{ flexDirection: 'column' }}>
       <Icon
        name="book-online"
        type='material'
        color='white'
       />
       <Text style={styles.text}>Book</Text>
      </View>
     </View>
    </View>
   </View >

  </ScrollView >
 )
}

const styles = StyleSheet.create({
 imageView: {
  position: 'absolute',
  top: 0,
  left: 0
 },

 image: {
  resizeMode: 'cover',
  alignItems: 'center',
  width: Dimensions.get('window').width,
 },


 profileText: {
  position: 'absolute',
  top: 66,
  color: 'white',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 20
 },

 profile: {
  alignItems: 'center',
  justifyContent: 'center',
 },

 name: {
  color: "white",
  textAlign: 'center',
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 11,
 },

 info: {
  fontSize: 14,
  color: "#CCA76A",
  textAlign: 'center',
  marginTop: 4
 },

 text: {
  color: 'rgba(255,255,255,0.7)',
  textAlign: 'center',
  fontSize: 13
 }
})