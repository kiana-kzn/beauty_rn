import 'react-native-gesture-handler';
import * as React from 'react';

import {
 Text, View, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView,
 Image, Dimensions, TextInput, FlatList
} from 'react-native';
import { Icon } from 'react-native-elements';
import StarRating from '../StarRating';
import BasicInfo from './BasicInfo';
import Portofilo from './Portofilo';
import Review from './Review';
import BarberProfiles from '../BarberProfiles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default ProfileTabs = () => {
 return (
  <View style={{ flex: 1 }}>
   <SafeAreaView style={{ alignItems: 'center', backgroundColor: '#323446' }}>
    <Image source={require('../../../assets/Union2.png')} style={styles.image} />
    <Text style={styles.profileText}>Profile</Text>
    <View style={styles.profile}>
     <Image source={require('../../../assets/Daniel.png')} style={{ marginTop: -60 }} />
     <Text style={styles.name}>Daniel William</Text>
     <Text style={styles.info}>Barberman at RedBox Barber</Text>
     <StarRating />
     <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
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
        name="table-plus"
        type='material-community'
        color='white'
       />
       <Text style={styles.text}>Book</Text>
      </View>
     </View>
    </View>
   </SafeAreaView >

   <View style={{ flex: 1 }}>
    <Tab.Navigator
     initialRouteName="Basic Info"
     showPageIndicator={false}
     tabBarScrollEnabled={false}

     screenOptions={{
      tabBarActiveTintColor: '#E4B343',
      tabBarInactiveTintColor: 'rgba(255,255,255,0.7)',
      tabBarLabelStyle: { fontSize: 16 },
      tabBarIndicatorContainerStyle: { backgroundColor: '#323446' },
      tabBarIndicatorStyle: { backgroundColor: '#CCA76A' },
      swipeEnabled: false
     }}
    >
     <Tab.Screen
      name="Basic Info"
      component={BasicInfo}
      options={{ tabBarLabel: 'basic info', tabBarLabelStyle: { textTransform: 'capitalize' } }}
     />
     <Tab.Screen
      name="Portofilo"
      component={Portofilo}
      options={{ tabBarLabel: 'portofilo', tabBarLabelStyle: { textTransform: 'capitalize' } }}
     />
     <Tab.Screen
      name="Review"
      component={Review}
      options={{ tabBarLabel: 'review', tabBarLabelStyle: { textTransform: 'capitalize' } }}
     />
    </Tab.Navigator>
   </View>




  </View >
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
 },


 container: {
  flex: 1,
  backgroundColor: '#212327'
 },

 topView: {
  backgroundColor: '#323446',
  width: '100%',
  height: 200,
  justifyContent: 'center',

 },

 name: {
  fontSize: 17,
  fontFamily: 'Tofino',
  color: '#CCA76A',
  fontWeight: 'bold',
  paddingLeft: 16
 },

 locationText: {
  fontSize: 12,
  color: 'rgba(255, 255, 255, 0.6)',
  paddingLeft: 16,
  marginTop: 13,
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