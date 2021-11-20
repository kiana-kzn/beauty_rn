import 'react-native-gesture-handler';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, Image, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

export default Bridal = ({navigation}) => {
 return (
  <View style={{ alignItems: 'center', flex: 1 }}>
   <Image style={styles.image} source={require('../../assets/142.png')} />
   <View style={styles.view}>
    <View style={styles.textView}>
     <Text style={styles.heading}>Bridal Beauty Makeup</Text>
     <Text style={styles.text}>Completed Package Offer till Sep 18, 2021</Text>
     <Text style={styles.caption}>Women want to feel attractive. We offer timeless beauty package to accentuate their natural beauty so they can feel beautiful in every day.</Text>
     <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 32 }}>
      <Text style={styles.service}>Service</Text>
      <Text style={{ color: "white", fontSize: 16 }}>Total:<Text style={{ color: '#00B2AE' }}> $280.30</Text></Text>
     </View>
     <View style={{ flexDirection: 'row', marginRight: 45, justifyContent: 'space-between' }}>
      <View>
       <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <AntDesign
         name='check'
         size={20}
         color='#CCA76A'
         style={{}}
        />
        <Text style={styles.serviceText}>Hairstyling</Text>
       </View>
       <View style={{ flexDirection: 'row', marginTop: 22 }}>
        <AntDesign
         name='check'
         size={20}
         color='#CCA76A'
         style={{}}
        />
        <Text style={styles.serviceText}>Corner Lashes</Text>
       </View>
       <View style={{ flexDirection: 'row', marginTop: 22 }}>
        <AntDesign
         name='check'
         size={20}
         color='#CCA76A'
         style={{}}
        />
        <Text style={styles.serviceText}>Makeup</Text>
       </View>
       <View style={{ flexDirection: 'row', marginTop: 22 }}>
        <AntDesign
         name='check'
         size={20}
         color='#CCA76A'
         style={{}}
        />
        <Text style={styles.serviceText}>Body Glowing</Text>
       </View>
       <View style={{ flexDirection: 'row', marginTop: 22 }}>
        <AntDesign
         name='check'
         size={20}
         color='#CCA76A'
         style={{}}
        />
        <Text style={styles.serviceText}>Eyebrows</Text>
       </View>
      </View>

      <View >
       <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <AntDesign
         name='check'
         size={20}
         color='#CCA76A'
         style={{}}
        />
        <Text style={styles.serviceText}>Hair color</Text>
       </View>
       <View style={{ flexDirection: 'row', marginTop: 22 }}>
        <AntDesign
         name='check'
         size={20}
         color='#CCA76A'
         style={{}}
        />
        <Text style={styles.serviceText}>Nail</Text>
       </View>
       <View style={{ flexDirection: 'row', marginTop: 22 }}>
        <AntDesign
         name='check'
         size={20}
         color='#CCA76A'
         style={{}}
        />
        <Text style={styles.serviceText}>Retoch</Text>
       </View>
       <View style={{ flexDirection: 'row', marginTop: 22 }}>
        <AntDesign
         name='check'
         size={20}
         color='#CCA76A'
         style={{}}
        />
        <Text style={styles.serviceText}>Facial</Text>
       </View>
       <View style={{ flexDirection: 'row', marginTop: 22 }}>
        <AntDesign
         name='check'
         size={20}
         color='#CCA76A'
         style={{}}
        />
        <Text style={styles.serviceText}>Spa</Text>
       </View>
      </View>
     </View>
    </View>
    <TouchableOpacity style={styles.book} onPress={() => navigation.navigate('Payment')}>
     <Text style={styles.bookText}>Book now</Text>
    </TouchableOpacity>
   </View>
  </View>
 )
}


const styles = StyleSheet.create({

 image: {
  width: Dimensions.get('window').width,
 },
 view: {
  flex: 1,
  backgroundColor: '#212327',
  borderTopStartRadius: 25,
  borderTopEndRadius: 25,
  position: 'absolute',
  top: '25%',
  bottom: 0,
  right: 0,
  left: 0,
 },
 heading: {
  color: '#CCA76A',
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 22,
 },
 text: {
  color: "white",
  fontSize: 12,
  marginTop: 4
 },
 caption: {
  color: 'white',
  marginTop: 21,
  fontSize: 14,
 },
 textView: {
  marginLeft: 20,
  marginRight: 20
 },
 service: {
  color: '#CCA76A',
  fontWeight: 'bold',
  fontSize: 16
 },
 serviceText: {
  color: "white",
  fontSize: 15,
  marginLeft: 10.7
 },
 book: {
  width: Dimensions.get('window').width / 1.2,
  borderRadius: 45,
  backgroundColor: '#CCA76A',
  height: 45,
  marginTop: 54,
  alignSelf: 'center',
  justifyContent: 'center'
 },
 bookText: {
  textAlign: 'center',
  fontSize: 16
 }
})