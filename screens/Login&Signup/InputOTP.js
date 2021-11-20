import React from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';

const defaultCountdown = 5;

export default InputOTP = ({ navigation }) => {

 let textInput = React.useRef(null)
 let clockCall = null
 const lengthInput = 4
 const [internalVal, setInternalVal] = React.useState("")
 const [countdown, setCountdown] = React.useState(defaultCountdown)
 const [enableResend, setEnableResend] = React.useState(false)

 React.useEffect(() => {
  clockCall = setInterval(() => {
   decrementClock();
  }, 1000)
  return () => {
   clearInterval(clockCall)
  }
 }, [countdown])

 const decrementClock = () => {
  if (countdown === 0) {
   setEnableResend(true)
   setCountdown(0)
   //clearInterval(clockCall)
  } else {
   setCountdown(countdown - 1)
  }
 }

 const onChangeText = (val) => {
  setInternalVal(val)
  if (val.length === lengthInput) {
   navigation.navigate('HomePage')
  }
 }

 const onResendOTP = React.useCallback(() => {
  if (enableResend) {
   setCountdown(defaultCountdown)
   setEnableResend(false)
   clearInterval(clockCall)
   clockCall = setInterval(() => {
    decrementClock(0)
   }, 1000)
  }
   setEnableResend(false)
  }, [setCountdown, setEnableResend ]);

 const onChangeNumber = () => {
  setInternalVal("")
 }

 React.useEffect(() => {
  textInput.focus()
 }, [])

 return (
  <View style={styles.container}>
   <KeyboardAvoidingView
    keyboardVerticalOffset={50}
    behavior={'padding'}
    style={styles.containerAvoidingView}>
    <Text style={styles.heading}>Phone Verification {'\n'}{'\n'}<Text style={styles.title}>Enter your OTP code here</Text></Text>
    <View>
     <TextInput
      ref={(input) => textInput = input}
      onChangeText={onChangeText}
      style={{ width: 0, height: 0 }}
      value={internalVal}
      maxLength={lengthInput}
      returnKeyType='done'
      keyboardType='numeric'
     />
     <View style={styles.containerInput}>
      {Array(lengthInput).fill().map((data, index) => (
       <View key={index} style={[styles.cellView, { backgroundColor: index === internalVal.length ? '#CCA76A' : 'rgba(50, 52, 70, 0.65)' },
       { borderColor: index === internalVal.length ? '#CCA76A' : 'rgba(50, 52, 70, 0.65)' }]} >
        <Text style={styles.cellText} onPress={() => textInput.focus()}>
         {internalVal && internalVal.length > 0 ? internalVal[index] : ""}
        </Text>
       </View>
      ))}
     </View>
    </View>

    <TouchableOpacity onPress={onChangeNumber}>
     <View styke={styles.btnChangeNumber}>
      <Text style={styles.textChange}>Change Number</Text>
     </View>
    </TouchableOpacity>
    <Text style={{ color: 'white', marginTop: 50 }}>Didn’t you received any code?</Text>
    <TouchableOpacity onPress={onResendOTP}>
     <Text style={[styles.textResend, { color: enableResend ? '#E4B343' : 'gray' }]}>Resend a new code <Text style={{color:"#CCA76A"}}>00 : {countdown}</Text></Text>
    </TouchableOpacity>
   </KeyboardAvoidingView>
  </View>
 )
}


const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#212327'
 },
 containerAvoidingView: {
  flex: 1,
  alignItems: "center",
  padding: 10,
 },
 heading: {
  marginTop: 50,
  marginBottom: 50,
  textAlign: 'center',
  fontSize: 28,
  color: '#CCA76A',
  fontWeight: 'bold',
  fontFamily: 'Tofino'
 },
 title: {
  textAlign: 'center',
  fontSize: 15,
  fontWeight: 'normal',
  color: 'white'
 },
 containerInput: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
 },
 cellView: {
  paddingVertical: 11,
  margin: 5,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 45,
  height: 44,
  width: 44,
  borderWidth: 1,
 },
 cellText: {
  fontSize: 17,
  color: 'white'
 },
 bottomView: {
  alignItems: 'center',
  paddingTop: 30,
 },
 textChange: {
  color: '#CCA76A',
  alignItems: 'center',
  fontSize: 16,
  marginTop: 50,
 },
 textResend: {
  marginTop: 10,
  alignItems: 'center',
  textAlign: 'center',
  fontSize: 14
 }
})