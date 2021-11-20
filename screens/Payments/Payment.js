import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, View, Text, TouchableOpacity, Image, TouchableWithoutFeedback, BackHandler } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { RadioButton, Checkbox } from 'react-native-paper';
import PaymentPopup from './PaymentPopup';
import TouchID from 'react-native-touch-id';
import { ScrollView } from 'react-native';

export default Payment = ({ ...props }) => {
 console.log(props.visibleDate)
 const [checked, setChecked] = React.useState('first');
 const [isVisible, setIsVisible] = React.useState(false);
 const [isAuth, setIsAuth] = React.useState(false);
 const setVisible = (value) => {
  setIsVisible(value)
 };
 const optionalConfigObject = {
  title: 'Authentication Required', // Android
  imageColor: '#e00606', // Android
  imageErrorColor: '#ff0000', // Android
  sensorDescription: 'Touch sensor', // Android
  sensorErrorDescription: 'Failed', // Android
  cancelText: 'Cancel', // Android
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
 };

 React.useEffect(() => {
  handleBiometric();
 });

 const handleBiometric = () => {
  TouchID.isSupported(optionalConfigObject).then((biometryType) => {
   if (biometryType === 'FaceID') {
    console.log('FaceID is supported.');
   } else {
    console.log('TouchID is supported.');
    if (isAuth) {
     return null
    }
    TouchID.authenticate('', optionalConfigObject).then((success) => {
     console.log(success);
     setIsAuth(success);
    }).catch((error) => { BackHandler.exitApp(); });
   }
  });
 };

 return (
  <>
   <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: '#212327' }}>
    <View style={styles.container}>
     <View style={styles.topView}>
      <View style={{ alignItems: 'center' }}>
       <Image source={require('../../assets/162.png')} style={styles.salonImg} />
       <Text style={{ color: 'white', fontSize: 14, marginTop: 8 }}>Total: <Text style={{ color: "#00B2AE", fontWeight: 'bold' }}>$45.00</Text></Text>
      </View>
      <View>
       <Text style={styles.salonName}>RedBox Barber</Text>
       <Text style={[styles.salonName, { fontSize: 12, color: '#707070' }]}>288 McClure Court, Arkansas</Text>
       <View style={{ flexDirection: 'row', marginLeft: 16, marginTop: 7.9 }}>
        <Entypo
         name='location-pin'
         size={15}
         color='#B4B4B4'
        />
        <Text style={styles.location}>1.2 km</Text>
       </View>
       <Text style={styles.services}>Services:   <Text style={{ color: '#CCA76A' }}>Heircut, Facial and Makeup</Text></Text>
      </View>
     </View>

     <View style={styles.bookView}>
      <Image source={require('../../assets/noun_Calendar.png')} />
      <Text style={{ color: 'white', fontSize: 14, marginLeft: 14 }}>date: {props.visibleDate}</Text>
     </View>
    </View>
    <View style={styles.title}>
     <Text style={{ color: "#CCA76A", fontSize: 16 }}>Payment Method</Text>
     <TouchableOpacity>
      <Text style={{ color: '#E4B343', fontSize: 14 }}>+ Add a new card</Text>
     </TouchableOpacity>
    </View>
    <TouchableWithoutFeedback onPress={() => setChecked('first')}>
     <View style={checked === 'first' ? [styles.payment, { marginTop: 16, borderColor: '#CCA76A', borderWidth: 1 }] : [styles.payment, { marginTop: 16 }]}>
      <Image source={require('../../assets/Filled_Icon.png')} style={{ alignSelf: 'center', marginLeft: 24 }} />
      <Text style={styles.payText}>Credit/Debit Card</Text>
      <View style={{ marginLeft: 70, marginTop: 20 }}>
       <RadioButton
        uncheckedColor='#999999'
        color='#E4B343'
        value="first"
        status={checked === 'first' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('first')}
       />
      </View>
     </View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={() => setChecked('second')}>
     <View style={checked === 'second' ? [styles.payment, { marginTop: 16, borderColor: '#CCA76A', borderWidth: 1 }] : [styles.payment, { marginTop: 16 }]}>
      <Image source={require('../../assets/Filled_Icons.png')} style={{ alignSelf: 'center', marginLeft: 24, height: 46, width: 46 }} />
      <Text style={styles.payText}>Bank Account</Text>
      <View style={{ marginLeft: 98, marginTop: 20 }}>
       <RadioButton
        uncheckedColor='#999999'
        color='#E4B343'
        value="second"
        status={checked === 'second' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('second')}
       />
      </View>
     </View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={() => setChecked('third')}>
     <View style={checked === 'third' ? [styles.payment, { marginTop: 16, borderColor: '#CCA76A', borderWidth: 1 }] : [styles.payment, { marginTop: 16 }]}>
      <Image source={require('../../assets/527.png')} style={{ alignSelf: 'center', marginLeft: 24 }} />
      <Text style={styles.payText}>PayPal</Text>
      <View style={{ marginLeft: 160, marginTop: 20 }}>
       <RadioButton
        uncheckedColor='#999999'
        color='#E4B343'
        value="third"
        status={checked === 'third' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('third')}
       />
      </View>
     </View>
    </TouchableWithoutFeedback>
    <TouchableOpacity style={styles.book} onPress={() => setIsVisible(true)}>
     <Text style={styles.bookText}>Continue with Credit Card</Text>
    </TouchableOpacity>
    <TouchableWithoutFeedback onPress={handleBiometric}>
    <View style={{ marginTop: 47, alignItems: 'center', justifyContent: 'center' }}>
     <Image source={require('../../assets/noun_touch.png')} />
     <Text style={{ fontSize: 14, color: "#707070", marginTop: 10 }}>Pay with Touch ID</Text>
    </View>
    </TouchableWithoutFeedback>
   </ScrollView>
   <PaymentPopup visible={isVisible} onPress={setVisible} />
  </>
 )
}


const styles = StyleSheet.create({
 container: {
  height: 229,
  width: '100%',
  backgroundColor: '#323446',
  borderBottomLeftRadius: 25,
  borderBottomRightRadius: 25,
 },
 topView: {
  flexDirection: 'row',
  marginLeft: 16,
  marginRight: 16,
  marginTop: 25
 },
 salonImg: {
  width: 100,
  height: 90,
  borderRadius: 10
 },
 salonName: {
  fontSize: 18,
  marginLeft: 17,
  color: "white"
 },
 location: {
  color: '#999999',
  fontSize: 12,
  marginLeft: 4.6
 },
 services: {
  fontSize: 12,
  color: '#E4B343',
  marginLeft: 16,
  marginTop: 12
 },
 bookView: {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#212327',
  height: 44,
  width: 335,
  borderRadius: 22,
  alignSelf: 'center',
  marginTop: 18,
  flexDirection: 'row',
 },
 title: {
  marginLeft: 16,
  marginRight: 16,
  marginTop: 32,
  flexDirection: 'row',
  justifyContent: 'space-between'
 },
 payment: {
  backgroundColor: '#323446',
  height: 80,
  width: 343,
  marginTop: 13,
  alignSelf: 'center',
  borderRadius: 10,
  flexDirection: 'row',
  // justifyContent: 'space-between'
 },
 payText: {
  color: 'white',
  fontSize: 18,
  marginTop: 18,
  marginLeft: 20
 },
 book: {
  width: 311,
  borderRadius: 45,
  backgroundColor: '#CCA76A',
  height: 44,
  marginTop: 40,
  alignSelf: 'center',
  justifyContent: 'center'
 },
 bookText: {
  textAlign: 'center',
  fontSize: 16
 }
})