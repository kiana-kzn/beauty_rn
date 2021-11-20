import React from 'react';
import {
  View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView,
  Modal, SafeAreaView, FlatList, TouchableWithoutFeedback
} from 'react-native';
import 'react-native-gesture-handler';

import { Countries } from './Countries'

export default Auth = ({ navigation }) => {
  let textInput = React.useRef(null)
  const defaultCodeCountry = "+91"
  const defaultMaskCountry = '858 602 3109'
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [placeholder, setPlaceholder] = React.useState(defaultMaskCountry)
  const [focusInput, setFocusInput] = React.useState(true);
  const [modalVisible, setModalVisible] = React.useState(false)
  const [dataCountries, setDataCountries] = React.useState(Countries)
  const [codeCountry, setCodeCountry] = React.useState(defaultCodeCountry)

  const onShowHiddenModal = () => {
    setModalVisible(!modalVisible)
  }

  // const onChangePhone = (number) => {
  //   setPhoneNumber(number)
  // }

  const onPressContinue = () => {
    if (phoneNumber) {
      navigation.navigate('InputOTP')
    }
  }

  const onChangeFocus = () => {
    setFocusInput(true)
  }
  const onChangeBlur = () => {
    setFocusInput(false)
  }

  // const handleRename = () => {
  //   setPlaceholder(defaultMaskCountry)
  // }

  React.useEffect(() => {
    textInput.focus()
  }, [])
  //********************* */
  // React.useEffect(() => {
  //   placeholder.addEventListener('rename', handleRename)
  // }, [])
  // ******************

  const filterCountries = (value) => {
    if (value) {
      const countryData = dataCountries.filter((obj) =>
        (obj.en.indexOf(value) > -1 || obj.dialCode.indexOf(value) > -1))
      setDataCountries(countryData)
    } else {
      setDataCountries(Countries)
    }
  }

  const onCountryChange = (item) => {
    setCodeCountry(item.dialCode)
    setPlaceholder(item.mask)
    onShowHiddenModal()
  }

  let renderModal = () => {
    return (
      <Modal animationType='none' transparent={false} visible={modalVisible}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.modalContainer}>
            <View style={styles.filterInputContainer}>

              <TextInput
                autoFocus={true}
                onChangeText={filterCountries}
                placeholder={'Chose your country (first letter capital)'}
                placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
                focusable={true}
                style={styles.filterInput}
              />
            </View>
            <FlatList
              style={{ flex: 1 }}
              data={dataCountries}
              extraData={dataCountries}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableWithoutFeedback onPress={() => onCountryChange(item)}>
                  <View style={styles.onCountryModal}>
                    <View style={styles.modalItemContainer}>
                      <Text style={styles.modalItemName}>{item.en}</Text>
                      <Text style={styles.modalItemCode}>{item.dialCode}</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              )} />
          </View>
          {/* <TouchableOpacity onPress={onShowHiddenModal} style={styles.closeButton}>
      <Text style={styles.closeText}>{'CLOSE'}</Text>
     </TouchableOpacity> */}
        </SafeAreaView>
      </Modal>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior={'padding'}
        style={styles.containerAvoidingView}
      >
        <Text style={styles.textTitle}>Verify Phone Number {'\n'}{'\n'}
          <Text style={styles.text}>We have sent you an SMS with a code to your number </Text></Text>
        <View style={[styles.containerInput, { borderBottomColor: focusInput ? 'blue' : 'white' }]}>

          <TouchableOpacity onPress={onShowHiddenModal}>
            <View style={styles.openDialogView}>
              <Text style={{ color: '#CCA76A', fontSize: 17 }}>{codeCountry + ' |'} </Text>
            </View>
          </TouchableOpacity>
          {renderModal()}
          <TextInput
            ref={(input) => textInput = input}
            style={styles.phoneInput}
            placeholder={placeholder}
            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
            keyboardType='numeric'
            value={phoneNumber}
            onChangeText={number => setPhoneNumber({number})}
            secureTextEntry={false}
            onFocus={onChangeFocus}
            onBlur={onChangeBlur}
            autoFocus={focusInput}
          />
        </View>

        <View style={styles.viewButtom}>
          <TouchableOpacity onPress={onPressContinue}>
            <View style={styles.btnContinue}>
              <Text style={{ color: '#212327', alignItems: 'center', fontSize: 16 }}>Continue</Text>
            </View>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    </ScrollView>
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

  textTitle: {
    marginBottom: 50,
    marginTop: 50,
    fontSize: 28,
    fontFamily: 'Tofino',
    fontWeight: 'bold',
    color: '#CCA76A',
    textAlign: 'center',
  },

  text: {
    fontFamily: 'Tofino',
    color: 'white',
    fontWeight: 'normal',
    textAlign: 'center',
    fontSize: 15,
  },

  containerInput: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    borderRadius: 22,
    backgroundColor: 'rgba(50, 52, 70, 0.65)',
    alignItems: 'center',
    borderBottomColor: 1.5
  },

  openDialogView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  phoneInput: {
    flex: 0.86,
    marginLeft: 5,
    fontSize: 16,
    fontFamily: 'Tofino',
    color: 'white',
    height: 45
  },

  viewButtom: {
    justifyContent: 'flex-end',
    marginBottom: 30,
    alignItems: 'center',
  },

  btnContinue: {
    width: Dimensions.get('window').width / 1.2,
    height: 45,
    marginTop: 170,
    justifyContent: 'flex-end',
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCA76A'
  },

  modalContainer: {
    paddingTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
    flex: 1,
    backgroundColor: "#212327"
  },

  filterInput: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    backgroundColor: 'rgba(50, 52, 70, 0.65)',
    color: 'white',
    fontSize: 16,
    borderRadius: 45
  },

  onCountryModal: {
    flex: 1,
    borderColor: 'rgba(50, 52, 70, 0.65)',
    borderTopWidth: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  modalItemContainer: {
    flex: 1,
    paddingLeft: 5,
    flexDirection: 'row',
  },

  modalItemName: {
    flex: 1,
    fontSize: 16,
    color: '#CCA76A'
  },

  modalItemCode: {
    fontSize: 16,
    color: '#CCA76A'
  },

  filterInputContainer: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'center',
  },

  closeButton: {
    padding: 12,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(50, 52, 70, 0.65)',
  },

  closeText: {
    padding: 5,
    fontSize: 20,
    color: 'black',
  }
})