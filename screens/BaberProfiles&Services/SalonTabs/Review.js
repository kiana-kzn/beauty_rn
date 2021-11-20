import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

export default Review = () => {
 return (
  <View style={{ backgroundColor: '#212327', flex: 1 }}>
   <View style={styles.cmView}>
    <Text style={{ fontSize: 14, color: '#999999', textAlign: 'center' }}>Write your review</Text>
   </View>
   <View style={styles.MycmView}>
    <View style={{ backgroundColor: '#CCA76A', padding: 1.4, borderRadius: 50 }}>
     <Image source={require('../../../assets/cm1.png')} style={styles.MyImg} resizeMode='cover' />
    </View>
    <View style={styles.expView}>
     <TextInput
      placeholder='Leave your experience…'
      placeholderTextColor='#707070'
      underlineColorAndroid='transparent'
      style={{ marginLeft: 20 }}
     />
     <Icon name={'microphone'} type='font-awesome' color={'#707070'} size={21}
      style={{ marginRight: 20 }} />
    </View>
   </View>
  </View>
 )
}

const styles = StyleSheet.create({
 cmView: {
  marginLeft: 16,
  marginRight: 16,
  marginTop: 26,
  flexDirection: 'row',
  justifyContent: 'space-between'
 },
 MycmView: {
  marginLeft: 16,
  marginRight: 16,
  marginTop: 24,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
 },
 MyImg: {
  borderRadius: 50,
  borderColor: '#323446',
  borderWidth: 2
 },
 expView: {
  backgroundColor: '#323446',
  height: 40,
  width: Dimensions.get('window').width / 1.4,
  borderRadius: 45,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginRight: 20,
  marginLeft: 20,
  alignItems:'center'
 }

})