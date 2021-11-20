import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default LocationPopup = ({ visible, onPress, navigation}) => {
  // console.log('visible', visible)
  const scaleValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      onPress(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <Modal transparent visible={visible}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, { transform: [{ scale: scaleValue }] }]}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.topImg}>
              <AntDesign
                name='check'
                size={35}
                color="white"
                style={{ alignSelf: 'center' }}
              />
            </View>
            <Text style={styles.title}>Your appointment booked
              successfully.</Text>
          </View>

          <Text style={{ paddingTop: 25, fontSize: 14, textAlign: 'center', color: "#707070", marginLeft: 27, marginRight: 27 }}>
            You can view the appointment booking info in the <Text style={{ color: '#FFF' }}>“Appointment”</Text> section.
          </Text>

          <TouchableOpacity onPress={() => onPress(false)} style={styles.done} >
            <Text style={{ fontSize: 16 }}>Continue Booking</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('BookAppointment')}} >
            <Text style={{ fontSize: 14, color: '#CCA76A', textAlign: 'center', marginTop: 24 }}>Go to appointment</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};


const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#323446',
    paddingVertical: 30,
    borderRadius: 24,
    elevation: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 408,
  },
  done: {
    width: 280,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 45,
    backgroundColor: '#CCA76A',
    marginTop: 32,
  },
  title: {
    color: '#CCA76A',
    fontSize: 20,
    fontFamily: "Tofino",
    paddingTop: 21,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 41,
    marginRight: 41
  },
  topImg: {
    backgroundColor: '#00B2AE',
    borderRadius: 50,
    borderWidth: 3,
    width: 66,
    height: 66,
    borderColor: '#00B2AE',
    justifyContent: 'center',
    alignSelf: 'center'
  },
});
