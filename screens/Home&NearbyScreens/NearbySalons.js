import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default NeabySalons = ({navigation}) => {
 return (
  <View style={{ flex: 1 }}>
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
      <TouchableOpacity onPress={() => { navigation.navigate('Filters') }}>
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
      <Text style={{ fontSize: 14, color: 'white' }}> San Francisco City</Text>
      <Image source={require('../../assets/ic_direction.png')}
       style={{ marginLeft: 23 }}
      />
     </View>

    </View>

    <View style={{ alignItems: 'center' }}>
     <View style={styles.row}>
      <Ionicons name={'ios-search-outline'} size={21} color={'#999999'}
       style={{ paddingRight: 10 }} />
      <TextInput
       placeholder={'Search for salon, spa and barber'}
       placeholderTextColor={'#999999'}
       color='white'
      />
      <FontAwesome name={'microphone'} size={21} color={'gray'}
       style={{ marginLeft: 100 }} />
     </View>
    </View>
   </SafeAreaView>
  </View>
 )
};


const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#212327'
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
  //left: Dimensions.get('window').width / 14
 },
})