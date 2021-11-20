import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { Text, Image, View, Dimensions, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import specialists from './specialists';

export default BookAppointment = ({ navigation }) => {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [chosenDate, setChosenDate] = useState(moment(new Date()).format('LL'));
  const [isSelected, setIsSelected] = useState('');
  // const setVisible = (value) => {
  //   setIsVisible(value)
  // };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setChosenDate(moment(date).format('LL'));
    hideDatePicker();
  };


  let arr = [
    '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM'
  ]

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={{ alignItems: 'center', paddingHorizontal: 6, marginLeft: 20 }}>
        <View style={{ backgroundColor: '#CCA76A', padding: 2, borderRadius: 50 }}>
          <Image source={item.image} resizeMode='cover'
            style={{ borderRadius: 50, borderColor: '#212327', borderWidth: 3 }} />
        </View>
        <Text
          style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', fontSize: 12, marginTop: 4 }}>
          {item.name}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center', flex: 1 }}>
      <Text style={styles.heading}>Book Appointment</Text>
      <View style={styles.view}>
        <Text style={styles.select}>Select your date</Text>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={showDatePicker} style={[styles.continue,
          { backgroundColor: '#323446', marginTop: -10, flexDirection: 'row', justifyContent: 'space-between' }]}>
            <Text style={styles.calendarText}>{chosenDate}</Text>
            <Image source={require('../../assets/calendar.png')} style={{ marginRight: 24 }} />
          </TouchableOpacity>
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          is24Hour={false}
        />
        <Text style={styles.specialist}>Select specialist</Text>

        <FlatList
          data={specialists}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 17 }}
        />
        <View style={{ position: "absolute", top: 300, right: 20, left: 20 }}>
          <Text style={styles.stlotHeading}>Available slot</Text>

          <View style={{ marginTop: 13 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity
                style={[styles.slot]}
              >
                <Text style={styles.slotText}>{arr[0]}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.slot}
              >
                <Text style={styles.slotText}>{arr[1]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.slot}
              >
                <Text style={styles.slotText}>{arr[2]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.slot}
              >
                <Text style={styles.slotText}>{arr[3]}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginTop: 13 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity
                style={styles.slot}
              >
                <Text style={styles.slotText}>{arr[4]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.slot}
              >
                <Text style={styles.slotText}>{arr[5]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.slot}
              >
                <Text style={styles.slotText}>{arr[6]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.slot}
              >
                <Text style={styles.slotText}>{arr[7]}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginTop: 13 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity onPress={setIsSelected('8')}
                style={styles.slot}
              >
                <Text style={styles.slotText}>{arr[8]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.slot}
              >
                <Text style={styles.slotText}>{arr[9]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.slot}
              >
                <Text style={styles.slotText}>{arr[10]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.slot}
              >
                <Text style={styles.slotText}>{arr[11]}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginTop: 13 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity
                style={styles.slot}
              >
                <Text style={styles.slotText}>{arr[12]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.slot}
              >
                <Text style={styles.slotText}>{arr[13]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.slot}
              >
                <Text style={styles.slotText}>{arr[14]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.slot}
              >
                <Text style={styles.slotText}>{arr[15]}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={styles.continue} onPress={() => { navigation.navigate('Booking Details', { data: JSON.stringify(chosenDate) }) }}>
              <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View >
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
  select: {
    color: '#CCA76A',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 24
  },
  continue: {
    width: Dimensions.get('window').width / 1.2,
    borderRadius: 45,
    backgroundColor: '#CCA76A',
    height: 45,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  continueText: {
    textAlign: 'center',
    fontSize: 16
  },
  specialist: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#CCA76A',
    marginTop: 33
  },
  slot: {
    backgroundColor: "#323446",
    height: 31,
    width: 78,
    borderRadius: 27,
    justifyContent: 'center',
  },

  slotSelected: {
    backgroundColor: "#00B2AE",
    height: 31,
    width: 78,
    borderRadius: 27,
    justifyContent: 'center',
  },
  slotText: {
    fontSize: 13,
    textAlign: 'center',
    color: "rgba(255,255,255,0.6)"
  },
  stlotHeading: {
    color: 'white',
    fontSize: 16,
  },
  calendarText: {
    color: "white",
    fontSize: 15,
    marginLeft: 24,
  },
})