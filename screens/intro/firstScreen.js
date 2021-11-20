import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import IntroSlider from './IntroSlider';

export default FirstScreen = () => {

  const startAnimation = React.useRef(new Animated.Value(0)).current;
  const moveLogo = React.useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  // Animating Content...
  const contentTransition = React.useRef(new Animated.Value(Dimensions.get('window').height)).current;

  useEffect(() => {

    Animated.sequence([
      Animated.timing(
        startAnimation,
        {
          toValue: 0,
          useNativeDriver: true
        }
      ),
      Animated.timing(
        fadeAnim,
        {
          delay: 80000,
          toValue: 0,
          useNativeDriver: true
        }
      ),
    ])
      .start();

  }, [])


  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Slide3@1X.png')} style={{ position: 'absolute', top: -2.5, left: -20, opacity: 0.5 }} />
      <Image source={require('../../assets/Component1.png')} style={{ position: 'absolute', right: -10, top: 79 }} />
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 291 }}>
        <Image source={require('../../assets/logo.png')} resizeMode='cover' />
        <View>
          <Text style={styles.title}>BARBER <Text style={{ color: "#CCA76A" }}>SHOP</Text></Text>
          <Text style={{ fontSize: 12, color: 'white', marginTop: 1 }}>STYLES THAT FIT YOUR LIFESTYLE</Text>
        </View>
        <View style={{ flexDirection: 'row', position: 'absolute', left: 55, bottom: 20 }}>
          <Image source={require('../../assets/Line2.png')} style={{ position: 'absolute', right: 10 }} />
          <Image source={require('../../assets/Line1.png')} />
        </View>
        <View style={{ flexDirection: 'row', position: 'absolute', right: 55, bottom: -5 }}>
          <Image source={require('../../assets/Line3.png')} />
          <Image source={require('../../assets/Line4.png')} style={{ position: 'absolute', left: 12 }} />
        </View>
      </View>
      <Text style={styles.barbershop}>@ Barbershop 2021. All rights reserved.</Text>
      <View style={{ justifyContent: 'flex-end' }}>
        <Image source={require('../../assets/Ellipse15.png')} style={{ position: 'absolute', top: 8, left: -30 }} />
        <Image source={require('../../assets/slide3.png')} style={{ position: 'absolute', top: -30, right: -6, opacity: 0.3 }} />
      </View>
      <Animated.View style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0,
        transform: [
          { translateX: fadeAnim }
        ]
      }}>
        <IntroSlider />
      </Animated.View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212327',
    flex: 1
  },
  title: {
    fontSize: 31,
    fontWeight: 'bold',
    color: '#FE457C',
    textAlign: 'center',
    marginTop: 20.7
  },
  barbershop: {
    marginTop: 218.8,
    color: '#FFFFFF',
    fontSize: 11,
    textAlign: 'center'
  },
})