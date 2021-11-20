import React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import BasicInfoItems from './BasicInfoItems';


export default BasicInfo = () => {

 const renderItem = ({ item }) => {
  return (
   <TouchableOpacity style={{ alignItems: 'center', paddingHorizontal: 6 }}
   >
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
     <Image source={item.image}
      resizeMode='contain'
     />
    </View>
   </TouchableOpacity>
  )
 }

 return (
  <ScrollView style={{ backgroundColor: '#212327', flex: 1 }}>
   <View style={styles.topView}>
    <Text style={{ color: 'white', fontSize: 16 }}>Business name</Text>
    <Text style={{ color: 'white', fontSize: 16 }}>Start from</Text>
   </View>
   <View style={[styles.topView, { marginTop: 4 }]}>
    <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>Redbox Barber</Text>
    <Text style={{ color: '#00B2AE', fontSize: 15 }}>$98.99</Text>
   </View>
   <View style={styles.openingH} >
    <Text style={{ fontSize: 16, color: 'white' }} >Opening Hours</Text>
    <View style={[styles.topView, { marginTop: 8 }]}>
     <View style={{ flexDirection: 'row' }}>
      <Icon
       name="dot-single"
       type='entypo'
       color='#00B2AE'
      />
      <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>  Monday - Friday</Text>
     </View>
     <Text style={{ color: 'white', fontSize: 14 }}>8:30 AM - 9:00 PM</Text>
    </View>
    <View style={[styles.topView, { marginTop: -8 }]}>
     <View style={{ flexDirection: 'row' }}>
      <Icon
       name="dot-single"
       type='entypo'
       color='#00B2AE'
      />
      <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>  Saturday - Sunday</Text>
     </View>
     <Text style={{ color: 'white', fontSize: 14 }}>9:00 AM - 1:00 PM</Text>
    </View>
   </View>

   <Text style={styles.addressHeading}>Address</Text>
   <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 20 }}>
    <Text style={styles.address}>030 Zulauf Green, O’Konville, SD,{'\n'}United States of America</Text>

    <Image source={require('../../../assets/add.png')} style={{ marginTop: -20 }} />
   </View>

   <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: -30 }}>
    <Icon
     name="location-arrow"
     type='font-awesome'
     color="#CCA76A"
    />
    <Text style={styles.getDir}>  Get directions ~ 4.2 km</Text>
   </View>
   <View style={styles.topView}>
    <Text style={{ color: 'white', fontSize: 16 }}>Photos</Text>
    <TouchableOpacity>
     <Text style={{ color: "#CCA76A", fontSize: 14 }}>View all</Text>
    </TouchableOpacity>
   </View>
   <FlatList
    data={BasicInfoItems}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item) => item.id}
    renderItem={renderItem}
    style={{ marginTop: 10, marginLeft: 16, }}
   />

  </ScrollView>
 )
}



const styles = StyleSheet.create({
 topView: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginRight: 20,
  marginLeft: 20,
  marginTop: 26
 },
 
 openingH: {
  marginRight: 20,
  marginLeft: 20,
  marginTop: 27
 },

 addressHeading: {
  fontSize: 16,
  color: "white",
  marginLeft: 20,
  marginTop: 24,
 },

 address: {
  color: 'rgba(255,255,255,0.6)',
  fontSize: 14,
  marginLeft: 20,
  marginTop: 7
 },

 getDir: {
  color: "#CCA76A",
  fontSize: 13,
  marginTop: 7
 }
})