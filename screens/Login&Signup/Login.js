import React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, Dimensions, 
  TextInput, TouchableOpacity, Image } from 'react-native';

export default Login = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <ImageBackground style={styles.backImg} source={require("../../assets/Mask1.png")}>
      </ImageBackground>
      <View style={styles.bottomView}>
        <View style={{ padding: 11 }}>
        </View>
        <Text style={styles.welcome}>Welcome back</Text>
        <Text style={styles.slogan}>STYLES THAT FIT YOUR LIFESTYLE</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center', padding: 45 }}>
          <View style={styles.rows}>
            <TextInput
              style={styles.user}
              placeholder={'Email'}
              placeholderTextColor={'rgba(255, 255, 255, 0.4)'}
              underlineColorAndroid='transparent'
            />
            <Image source={require('../../assets/person.png')} style={styles.inputIcon} />
          </View>
          <View style={styles.rows2}>
            <TextInput
              style={styles.pass}
              placeholder={'Password'}
              secureTextEntry={true}
              placeholderTextColor={'rgba(255, 255, 255, 0.4)'}
              underlineColorAndroid='transparent'
            />
            <Image source={require('../../assets/passeye.png')} style={[styles.inputIcon, { marginEnd: 17 }]} />
          </View>


          <TouchableOpacity style={styles.login}>
            <Text style={styles.text_1}>Login</Text>

          </TouchableOpacity>

        </View>

        <View style={styles.text_2}>

          <TouchableOpacity onPress={() => { navigation.navigate('ForgotPass') }}>
            <Text style={{ color: 'white', fontFamily: "Tofino", fontSize: 14, paddingBottom: 17, opacity: 0.9 }}>Forgot your password?</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.dont}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }}>
              <Text style={[styles.dont,{ color: "#E4B343" }]}>{' '} Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>

  )
};

const styles = StyleSheet.create({

  container: {
    flex: 1,

  },

  backImg: {
    height: Dimensions.get('window').height
  },

  bottomView: {
    flex: 1.5,
    backgroundColor: '#212327',
    bottom: 50,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    position: 'absolute',
    top: "42%",
    bottom: 0,
    right: 0,
    left: 0,
  },

  welcome: {
    textAlign: 'center',
    fontFamily: 'Tofino',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#CCA76A',
  },

  slogan: {
    fontFamily: 'Tofino',
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 3,

  },

  user: {
    fontSize: 15,
    fontFamily: "Tofino",
    color: 'white',
    flex: 1,
  },

  pass: {
    fontSize: 15,
    fontFamily: "Tofino",
    color: 'white',
    flex: 1,
  },

  rows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 327,
    borderRadius: 22,
    backgroundColor: 'rgba(50, 52, 70, 0.65)',
    height: 44,
    paddingLeft: 25,
  },

  rows2: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 327,
    borderRadius: 22,
    backgroundColor: 'rgba(50, 52, 70, 0.65)',
    height: 44,
    paddingLeft: 25,
  },

  inputIcon: {
    marginEnd: 20,
    opacity: 0.3
  },

  login: {
    width: 327,
    borderRadius: 22,
    backgroundColor: '#CCA76A',
    height: 44,
    marginTop: 50,
  },

  text_1: {
    fontFamily: "Tofino",
    fontSize: 16,
    textAlign: 'center',
    marginTop: '3%',
  },

  text_2: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  dont: {
    color: 'white',
    fontFamily: 'Tofino',
    fontSize: 14,
    marginTop: 7,
  },
})
