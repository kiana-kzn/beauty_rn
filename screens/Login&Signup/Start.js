import React, { Component } from 'react';
import {
  View, Text, ScrollView, StyleSheet, ImageBackground, Dimensions,
  Image, TouchableOpacity
} from 'react-native';
import 'react-native-gesture-handler';


import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';


export default Start = ({ navigation }) => {

  const [loggedIn, setIsloggedIn] = React.useState();
  const [userInfo, setUserInfo] = React.useState();

  React.useEffect = () => {
    GoogleSignin.configure({
      webClientId: '828955715426-5lfvhea6q5ivibo3cai9l82t3fe5i669.apps.googleusercontent.com',
    });
  };

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('sign in canceled')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('sign in in progress')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Service not available')
      } else {
        console.log('unknown error')
      }
    }
  };

  getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      setUserInfo({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
        setIsloggedIn(false);
      } else {
        // some other error
        setIsloggedIn(false);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} >
      <ImageBackground style={styles.backImg} source={require("../../assets/Mask1.png")} style={{ height: '100%', width: '100%', }} />
      <View style={styles.logo}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.text}>Book an Appointment for {'\n'}Salon, Spa & Barber.</Text>
      </View>
      <View style={{ position: 'absolute', top: 621, left: 0, right: 0, alignItems: 'center' }}>
        <TouchableOpacity
          style={styles.auth}
          onPress={signIn}
        >
          <View style={{ marginLeft: 59, marginRight: 80, flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Image source={require('../../assets/google.png')} style={{ position: 'absolute', right: 180 }} />
            <Text style={{ color: 'white', fontSize: 16 }}>Connect with <Text style={{ fontWeight: 'bold' }}>Google</Text></Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.authFacebook}
          onPress={signIn}
        >
          <View style={{ marginLeft: 59, marginRight: 80, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../assets/facebook.png')} style={{ position: 'absolute', right: 195 }} />
            <Text style={{ color: 'white', fontSize: 16 }}>Connect with <Text style={{ fontWeight: 'bold' }}>Facebook</Text></Text>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.sign}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.sign, { color: "#E4B343" }]}>{' '} Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImg: {
    height: Dimensions.get('window').height,
  },
  logo: {
    position: 'absolute',
    top: 381,
    left: 32,
  },
  text: {
    fontFamily: 'Tofino',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 10,
  },
  sign: {
    fontFamily: 'Tofino',
    color: 'white',
    fontSize: 14,
    marginTop: 38
  },
  auth: {
    height: 44,
    width: 311,
    backgroundColor: '#FD6C57',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
  },
  authFacebook: {
    backgroundColor: '##3885FF',
    marginTop: 24,
    height: 44,
    width: 311,
    backgroundColor: '#3885FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
  }
})