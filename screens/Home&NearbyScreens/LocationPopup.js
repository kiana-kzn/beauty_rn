import React from 'react';
import 'react-native-gesture-handler';
import {
 View,
 StyleSheet,
 Button,
 Modal,
 Image,
 Text,
 TouchableOpacity,
 Animated,
 Dimensions
} from 'react-native';


export default LocationPopup = () => {

 const ModalPoup = ({ visible, children }) => {
  const [showModal, setShowModal] = React.useState(visible);

  const scaleValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
   toggleModal();
  }, [visible]);

  const toggleModal = () => {
   if (visible) {
    setShowModal(true);
    Animated.spring(scaleValue, {
     toValue: 1,
     duration: 300,
     useNativeDriver: true,
    }).start();
   } else {
    setTimeout(() => setShowModal(false), 200);
    Animated.timing(scaleValue, {
     toValue: 0,
     duration: 300,
     useNativeDriver: true,
    }).start();
   }
  };
  return (
   <Modal transparent visible={showModal}>
    <View style={styles.modalBackGround}>
     <Animated.View
      style={[styles.modalContainer, { transform: [{ scale: scaleValue }] }]}>
      {children}
     </Animated.View>
    </View>
   </Modal>
  );
 };


 const [visible, setVisible] = React.useState(true);
 return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   <ModalPoup visible={visible}>

    <View style={{ alignItems: 'center' }}>
     <Image
      source={require('../../assets/70.png')}
      style={{ height: 70, width: 70 }}
     />
     <Text style={{ color: '#CCA76A', fontSize: 20, fontFamily: "Tofino", paddingTop: 21 }}>Enable your Location</Text>
    </View>

    <Text style={{ paddingTop: 25, fontSize: 14, textAlign: 'center', color: "white" }}>
     Please allow to use your location to show nearby services on the map.
    </Text>
    
     <TouchableOpacity onPress={() => setVisible(false)} style={styles.done}>
      <Text style={{ fontSize: 16 }}>Done</Text>
     </TouchableOpacity>

   </ModalPoup>
  </View>
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
  paddingHorizontal: 20,
  paddingVertical: 30,
  borderRadius: 20,
  elevation: 20,
 },
 done: {
  width: '100%',
  height: 40,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 45,
  backgroundColor: '#CCA76A',
  height: 45,
  marginTop: '14%',
 },
});
