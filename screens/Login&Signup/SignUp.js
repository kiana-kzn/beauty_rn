import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity, TextInput, Image, Touchable } from 'react-native';
import 'react-native-gesture-handler';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker } from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export default SignUp = ({ navigation, props }) => {

  const [gender, setGender] = React.useState('Select gender...');
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  const [colorCheck, setColorCheck] = React.useState(false);
  const [username, setUsername] = React.useState('Username');
  const [email, setEmail] = React.useState('Enail addrwss');

  const DatePicker = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
      console.warn("A date has been picked: ", date);
      hideDatePicker();
    };

    formatUserName = (textValue) => {
      setUsername({ username: textValue.toUpperCase() });
    };

    return (
      <View>
        <DateTimePickerModal
          onPress={showDatePicker}
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    );
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack(null)}>
          <Image source={require('../../assets/ic_back.png')} style={{ marginTop: 22, marginLeft: 15 }} />
        </TouchableWithoutFeedback>
        <Text style={styles.heading}>Create an Account</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 31 }}>
          <View style={styles.rows}>
            <TextInput
              style={styles.user}
              placeholder={username}
              placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
              onChangeText={username => setUsername(username)}
            />
            <Image source={require('../../assets/person.png')} style={{ marginRight: 22, opacity: 0.5 }} />
          </View>

          <View style={{ marginTop: 15 }}>
            <View style={styles.rows}>
              <TextInput
                style={styles.user}
                placeholder={'Email address'}
                placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
                underlineColorAndroid='transparent'
                onChangeText={email => setEmail(email)}
              />
              <Image source={require('../../assets/4407.png')} style={{ marginRight: 22, opacity: 0.5 }} />

            </View>
          </View>

          <View style={{ marginTop: 15 }}>
            <View style={styles.rows}>
              <TextInput
                style={styles.user}
                placeholder={'Mobile number'}
                placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
                underlineColorAndroid='transparent'
              />
              <Image source={require('../../assets/849.png')} style={{ marginRight: 22, opacity: 1 }} />

            </View>
          </View>

          <View style={{ marginTop: 15 }}>
            <View style={styles.rows}>
              <TextInput
                style={styles.user}
                placeholder={'Date of Birth'}
                placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
                underlineColorAndroid='transparent'
                onPress={() => { DatePicker() }}
              />
              <Image source={require('../../assets/calendar.png')} style={{ marginRight: 22, opacity: 0.93 }} />

            </View>
          </View>

          <View style={{ marginTop: 15 }}>
            <View style={styles.picker}>

              <Picker
                style={{ position: 'absolute', right: 12, left: 12, justifyContent: 'space-between', color: 'rgba(255, 255, 255, 0.6)' }}
                selectedValue={gender}
                onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                dropdownIconColor={'gray'}
              >
                <Picker.Item label='Select gender...' value='none' />
                <Picker.Item label='Male' value='Male' />
                <Picker.Item label='Female' value='Female' />
                <Picker.Item label='Other' value='Other' />
              </Picker>

            </View>
          </View>

          <View style={{ marginTop: 15 }}>
            <View style={styles.rows}>
              <TextInput
                style={styles.user}
                placeholder={'Location'}
                placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
                underlineColorAndroid='transparent'
              />
              <TouchableOpacity>
                {/* <Image source={require('../../assets/person.png')} style={{ marginRight:22, opacity:0.5}} /> */}

              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginTop: 15 }}>
            <View style={styles.rows}>
              <TextInput
                style={styles.user}
                placeholder={'Password'}
                placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
                underlineColorAndroid='transparent'
                secureTextEntry={true}
              />
              <Image source={require('../../assets/passeye.png')} style={{ marginRight: 22, opacity: 0.5 }} />

            </View>
          </View>

          <View style={styles.checkbox}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
              onFillColor='#CCA76A'
              color='#CCA76A'
              tintColor='#CCA76A'
            // tintColors={ true: ColorValue, false: ColorValue }
            />
            {console.log(setToggleCheckBox)}
            <Text style={styles.checkText}>By continuing Sign up you agree to the following{'\n'} our
              <Text style={{ color: '#CCA76A' }}> Terms</Text> & <Text style={{ color: '#CCA76A' }}> Conditions</Text>.</Text>
          </View>

          <TouchableOpacity style={styles.signup} onPress={() => {  navigation.navigate('Auth')  }}>
            <Text style={styles.text_1}>Sign Up</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text_2}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={[styles.text_2, { color: '#CCA76A' }]}>{' '} Sign in</Text></TouchableOpacity>
          </View>
        </View>
      </ScrollView >
    </>
  )
}



styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#212327"
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Tofino',
    color: '#CCA76A',
    textAlign: 'center',
    marginTop: 22
  },

  user: {
    fontSize: 15,
    fontFamily: "Tofino",
    color: 'white',
    flex: 1,
  },

  rows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width / 1.2,
    borderRadius: 45,
    backgroundColor: 'rgba(50, 52, 70, 0.65)',
    height: 45,
    paddingLeft: 25,
  },

  picker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width / 1.2,
    borderRadius: 45,
    backgroundColor: 'rgba(50, 52, 70, 0.65)',
    height: 45,
    paddingLeft: 25,
  },

  checkbox: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: -30
  },

  checkText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Tofino',
  },

  signup: {
    width: Dimensions.get('window').width / 1.2,
    borderRadius: 45,
    backgroundColor: '#CCA76A',
    height: 45,
    marginTop: '14%',
  },

  text_1: {
    fontFamily: "Tofino",
    fontSize: 16,
    textAlign: 'center',
    marginTop: '3%',
  },

  text_2: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    marginTop: 30
  },
})