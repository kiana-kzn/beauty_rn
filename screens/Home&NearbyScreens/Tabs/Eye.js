import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default Eye = () => {
 return (
  <View style={styles.container}>
   <Text style={{ textAlign: 'center' }}>EYE</Text>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#212327',
 }
})