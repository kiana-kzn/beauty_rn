import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';

export default ForgotPass = ({ navigation }) => {

 const [isVisible, setIsVisible] = React.useState(false);
 // const setVisible = (value) => {
 //  setIsVisible(value)
 // };

 return (
  <ScrollView contentContainerStyle={styles.container}>
   <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    <Text style={styles.text_1}>Forgot password</Text>
    <Text style={styles.text_2}>Please enter your email address. You will receive a code to create a new password via email.</Text>
   </View>
   <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 88 }}>
    <TextInput
     style={styles.user}
     placeholder={'Your email address'}
     placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
     underlineColorAndroid='transparent'
    />
   </View>
   <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 30 }}>
    <TouchableOpacity style={styles.reset}
     onPress={() => setIsVisible(true)} >
     <Text style={styles.text_3}>Reset password</Text>
    </TouchableOpacity>
   </View>
  </ScrollView>
 )
}

styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: "#212327"
 },
 text_1: {
  textAlign: 'center',
  color: '#CCA76A',
  fontFamily: 'Tofino',
  fontWeight: 'bold',
  fontSize: 28,
  paddingTop: 100
 },
 text_2: {
  fontFamily: 'Tofino',
  fontSize: 15,
  textAlign: 'center',
  color: '#FFFFFF',
  padding: 18
 },
 user: {
  fontSize: 15,
  fontFamily: "Tofino",
  width: Dimensions.get('window').width / 1.2,
  borderRadius: 45,
  backgroundColor: 'rgba(50, 52, 70, 0.65)',
  height: 45,
  paddingLeft: 25,
  color: 'white',
 },
 reset: {
  width: Dimensions.get('window').width / 1.2,
  borderRadius: 45,
  backgroundColor: '#CCA76A',
  height: 45,
  marginTop: '14%',
 },
 text_3: {
  fontFamily: "Tofino",
  color: 'black',
  fontSize: 16,
  textAlign: 'center',
  marginTop: '3%',
 },
 inputIcon: {
  position: 'absolute',
  paddingLeft: 10,
  paddingTop: 22
 },
 ModalBackround: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0 , 0.5)',
  justifyContent: 'center',
  alignItems: 'center',
 },
 ModalContainer: {
  width: '90%',
  backgroundColor: '#323446',
  paddingHorizontal: 20,
  paddingVertical: 30,
  borderRadius: 24,
  elevation: 20,
 },
 ModalTitle: {
  fontFamily: 'Tofino',
  color: '#CCA76A',
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  paddingTop: 19,
 },
 ModalText: {
  textAlign: 'center',
  fontFamily: 'Tofino',
  fontSize: 14,
  color: 'white',
  marginTop: 23
 },
 done: {
  width: Dimensions.get('window').width / 1.3,
  borderRadius: 45,
  backgroundColor: '#CCA76A',
  height: 44,
  marginTop: '14%',
 },
 dn: {
  fontFamily: "Tofino",
  fontSize: 16,
  textAlign: 'center',
  marginTop: '3%',
  color: 'black'
 },
})