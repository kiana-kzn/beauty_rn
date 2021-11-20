import React from 'react';
import 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import 'react-native-gesture-handler';
import { Text, Image, View, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import BookAppointmentMale from './BookAppointmentMale';


export default BookAppointment = ({ navigation }) => {

 const [checked, setChecked] = React.useState(false);
 const [selectedLanguage, setSelectedLanguage] = React.useState('Cool Messy ($15)');
 const [selectedLanguage2, setSelectedLanguage2] = React.useState('Select type');
 const [selectedLanguage3, setSelectedLanguage3] = React.useState('Select type');
 const [selectedLanguage4, setSelectedLanguage4] = React.useState('Select type');
 const [selectedLanguage5, setSelectedLanguage5] = React.useState('Select type');
 const [selectedLanguage6, setSelectedLanguage6] = React.useState('Select type');
 const [selectedLanguage7, setSelectedLanguage7] = React.useState('Short Hair ($30)');

 function Onpress() {
  return (
   setChecked({ checked: !checked }) && navigation.navigate(BookAppointmentMale)
  )
 }

 return (
  <ScrollView contentContainerStyle={{ alignItems: 'center', flex: 1 }}>
   <Image style={styles.image} source={require('../../assets/150.png')} />
   <Text style={styles.heading}>Book Appointment</Text>
   <View style={styles.view}>
    <Text style={styles.genderTitle}>Gender</Text>
    <View style={styles.gender}>
     <CheckBox
      center
      title='Male'
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      checkedColor='#CCA76A'
      uncheckedColor='#CCA76A'
      containerStyle={{ backgroundColor: '#212327', borderColor: '#212327' }}
      textStyle={{ color: 'white', fontWeight: 'normal', fontSize: 16 }}
      checked={checked}
      onPress={Onpress}
     />
     <CheckBox
      center
      title='Female'
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      checkedColor='#CCA76A'
      uncheckedColor='#CCA76A'
      containerStyle={{ backgroundColor: '#212327', borderColor: '#212327' }}
      textStyle={{ color: 'white', fontWeight: 'normal', fontSize: 16 }}
      checked={checked}
      onPress={() => setChecked({ checked: !checked })}
     />
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
     <Text style={styles.service}>Choose your service</Text>
     <Text style={styles.total}>Total: $45.00</Text>
    </View>

    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24, alignItems: 'center' }}>
     <Text style={styles.text1}>Haircut</Text>

     <View style={styles.picker}>
      <Picker
       selectedValue={selectedLanguage}
       dropdownIconColor={'gray'}
       style={{ color: 'rgba(255,255,255,0.6)' }}
       onValueChange={(itemValue, itemIndex) =>
        setSelectedLanguage(itemValue)
       }>
       <Picker.Item label="Cool Messy ($15)" value="1" />
       <Picker.Item label="JavaScript" value="js" />
      </Picker>
     </View>
    </View>

    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 11 }}>
     <Text style={styles.text2}>Spa</Text>
     <View style={styles.picker}>
      <Picker
       selectedValue={selectedLanguage2}
       dropdownIconColor={'gray'}
       style={{ color: 'rgba(255,255,255,0.6)' }}
       onValueChange={(itemValue, itemIndex) =>
        setSelectedLanguage2(itemValue)
       }>
       <Picker.Item label="Select type" value="none" />
       <Picker.Item label="Java" value="java" />
       <Picker.Item label="JavaScript" value="js" />
      </Picker>
     </View>
    </View>

    <View style={styles.pickerView}>
     <Text style={styles.text2}>Makeup</Text>
     <View style={styles.picker}>
      <Picker
       selectedValue={selectedLanguage3}
       dropdownIconColor={'gray'}
       style={{ color: 'rgba(255,255,255,0.6)' }}
       onValueChange={(itemValue, itemIndex) =>
        setSelectedLanguage3(itemValue)
       }>
       <Picker.Item label="Select type" value="none" />
       <Picker.Item label="Java" value="java" />
       <Picker.Item label="JavaScript" value="js" />
      </Picker>
     </View>
    </View>

    <View style={styles.pickerView}>
     <Text style={styles.text2}>Facial</Text>
     <View style={styles.picker}>
      <Picker
       selectedValue={selectedLanguage4}
       dropdownIconColor={'gray'}
       style={{ color: 'rgba(255,255,255,0.6)' }}
       onValueChange={(itemValue, itemIndex) =>
        setSelectedLanguage4(itemValue)
       }>
       <Picker.Item label="Select type" value="none" />
       <Picker.Item label="Java" value="java" />
       <Picker.Item label="JavaScript" value="js" />
      </Picker>
     </View>
    </View>

    <View style={styles.pickerView}>
     <Text style={styles.text2}>Hair Color</Text>
     <View style={styles.picker}>
      <Picker
       selectedValue={selectedLanguage5}
       dropdownIconColor={'gray'}
       style={{ color: 'rgba(255,255,255,0.6)' }}
       onValueChange={(itemValue, itemIndex) =>
        setSelectedLanguage5(itemValue)
       }>
       <Picker.Item label="Select type" value="none" />
       <Picker.Item label="Java" value="java" />
       <Picker.Item label="JavaScript" value="js" />
      </Picker>
     </View>
    </View>

    <View style={styles.pickerView}>
     <Text style={styles.text2}>Bridal</Text>
     <View style={styles.picker}>
      <Picker
       selectedValue={selectedLanguage6}
       dropdownIconColor={'gray'}
       style={{ color: 'rgba(255,255,255,0.6)' }}
       onValueChange={(itemValue, itemIndex) =>
        setSelectedLanguage6(itemValue)
       }>
       <Picker.Item label="Select type" value="none" />
       <Picker.Item label="Java" value="java" />
       <Picker.Item label="JavaScript" value="js" />
      </Picker>
     </View>
    </View>

    <View style={styles.pickerView}>
     <Text style={styles.text2}>Nail</Text>
     <View style={styles.picker}>
      <Picker
       selectedValue={selectedLanguage7}
       dropdownIconColor={'gray'}
       style={{ color: 'rgba(255,255,255,0.6)' }}
       onValueChange={(itemValue, itemIndex) =>
        setSelectedLanguage7(itemValue)
       }>
       <Picker.Item label="Short Hair ($30)" value="short" />
       <Picker.Item label="Long Hair" value="js" />
      </Picker>
     </View>
    </View>

    <TouchableOpacity style={styles.book}>
     <Text style={styles.bookText}>Book now</Text>
    </TouchableOpacity>

   </View>
  </ScrollView >
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
  color: 'white',
  fontSize: 20,
  textAlign: 'center',
  zIndex: 1,
  position: 'absolute',
  fontWeight: 'bold',
  top: 35
 },

 genderTitle: {
  color: '#CCA76A',
  fontSize: 16,
  fontWeight: 'bold',
  marginLeft: 20,
  marginTop: 24
 },

 gender: {
  flexDirection: 'row',
  justifyContent: "space-between",
  marginRight: 20,
  marginLeft: 20
 },

 service: {
  color: 'white',
  marginLeft: 20,
  fontSize: 16,
  marginTop: 24,
 },

 total: {
  color: '#00B2AE',
  marginRight: 20,
  fontSize: 16,
  marginTop: 24,
 },

 text1: {
  fontSize: 16,
  color: 'rgba(255,255,255,0.6)',
  marginLeft: 20,
 },

 text2: {
  fontSize: 16,
  color: 'rgba(255,255,255,0.6)',
  marginLeft: 20,
  // marginTop: 28,
 },

 picker: {
  justifyContent: 'center',
  width: Dimensions.get('window').width / 1.9,
  borderRadius: 10,
  backgroundColor: '#323446',
  height: 38,
  marginRight: 20,
 },

 pickerView: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 11
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

 bookText: {
  textAlign: 'center',
  fontSize: 16
 }

})