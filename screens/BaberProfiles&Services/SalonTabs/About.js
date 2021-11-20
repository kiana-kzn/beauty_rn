import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View, StyleSheet, ScrollView, Image, FlatList, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import BasicInfoItems from '../ProfileTabs/BasicInfoItems';


export default About = () => {

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
 };

 // const onMomentumScrollBegin = () => {
 //  return ScrollView.sc
 // }
 return (
  <ScrollView 
   contentContainerStyle={{ backgroundColor: '#212327', flex: 1, }}>
   <View style={styles.aboutView}>
    <Text style={styles.about}>About</Text>
    <Text style={styles.aboutText}>RedBox Barber Salon is one of the most powerful brands in the hair & beauty care sector in Northern India, that has given hairstyling a new horizon.
     <TouchableOpacity><Text style={{ color: '#CCA76A' }}>  Read more</Text></TouchableOpacity> </Text>
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
    <View style={[styles.topView, { marginTop: 5 }]}>
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
    <Text style={{ color: 'white', fontSize: 16, marginLeft: 20 }}>Photos</Text>
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
   <TouchableOpacity style={styles.book}>
    <Text style={styles.bookText}>Book now</Text>
   </TouchableOpacity>
  </ScrollView>
 )
}




const styles = StyleSheet.create({
 about: {
  color: 'white',
  fontSize: 16,
  marginTop: 24
 },

 aboutView: {
  marginLeft: 20,
 },

 aboutText: {
  fontSize: 14,
  color: 'rgba(255,255,255,0.6)',
  marginTop: 5
 },

 openingH: {
  marginRight: 20,
  marginLeft: 20,
  marginTop: 27
 },

 topView: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginRight: 20,
  marginTop: 26
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
 },

 bookText: {
  textAlign: 'center',
  fontSize: 16
 },

 book: {
  width: Dimensions.get('window').width / 1.2,
  borderRadius: 45,
  backgroundColor: '#CCA76A',
  height: 45,
  marginTop: 30,
  alignSelf: 'center',
  justifyContent: 'center'
 },
})