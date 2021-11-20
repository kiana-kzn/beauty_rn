import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View, FlatList, ScrollView, StyleSheet, Image, Dimensions, Animated, SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Services from '../Services';


export default Services1 = ({ navigation }) => {


 const data = [
  {
   id: '1',
   title: 'Hairstyle',
   text: '10 types',
   image: require('../../../../assets/image0.png')
  },

  {
   id: '2',
   title: 'Shaving',
   text: '6 types',
   image: require('../../../../assets/image1.png')
  },


  {
   id: '3',
   title: 'Hairdryer',
   text: '4 types',
   image: require('../../../../assets/image2.png')
  },

  {
   id: '4',
   title: 'Haircut',
   text: '8 types',
   image: require('../../../../assets/image3.png')
  },

  {
   id: '5',
   title: 'Hair Coloring',
   text: '4 types',
   image: require('../../../../assets/image4.png')
  },

  {
   id: '6',
   title: 'Facial Makeup',
   text: '12 types',
   image: require('../../../../assets/image5.png')
  },

  {
   id: '7',
   title: 'Eye Makeup',
   text: '6 types',
   image: require('../../../../assets/image6.png')
  },
 ];

 const renderItem = ({ item }) => {
  return (
   <SafeAreaView style={{ marginRight: 16, flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 }}>
    <View style={{ marginLeft: 16, flexDirection: 'row' }}>
     <Image source={item.image} />
     <Text style={styles.text}>{item.title}{'\n'}<Text style={styles.innerText}>{item.text}</Text></Text>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('View')}
     style={{ justifyContent: 'space-between' }}>
     <Text style={{ color: '#CCA76A', fontSize: 13 }}>View</Text>
    </TouchableOpacity>
   </SafeAreaView>
  )
 }
 return (
  <View style={{ backgroundColor: '#212327', flex: 1, justifyContent: 'center' }}>

   <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={renderItem}
   // ListHeaderComponent={Services}
   />
  </View>
 )
}

const styles = StyleSheet.create({
 text: {
  color: 'white',
  fontSize: 16,
  marginLeft: 15,
  flexDirection: 'row',
  justifyContent: 'space-between'
 },

 innerText: {
  color: 'rgba(255,255,255,0.6)',
  fontSize: 12,
  flexDirection: 'row',
  justifyContent: 'space-between'
 }
})