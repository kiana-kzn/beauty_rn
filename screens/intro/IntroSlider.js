import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button, Image, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Start from '../Login&Signup/Start'


export default IntroSlider = () => {

  const [showRealApp, setshowRealApp] = useState(false)
  const onDone = () => {
    setshowRealApp(true)
  }
  const onSkip = () => {
    setshowRealApp(true)
  }
  const renderItem = ({ item }) => {
    return (
      <View style={{
        flex: 1, backgroundColor: item.backgroundColor, alignItems: 'center',
        justifyContent: 'space-around', paddingBottom: 100,
      }}>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTitleSlide}>{item.title}</Text>
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    )
  }

  const renderNextButton = () => {
    return (
      <View style={{
        backgroundColor: '#CCA76A', borderRadius: 50, width: 140, height: 44,
        justifyContent: 'center', alignItems: 'center'
      }}>
        <Text style={{ color: "black", fontSize: 16, textAlign: 'center' }}>Next</Text>
      </View>
    )
  }
  const renderDonetButton = () => {
    return (
      <View style={{
        backgroundColor: '#CCA76A', borderRadius: 50, width: 140, height: 44,
        justifyContent: 'center', alignItems: 'center'
      }}>
        <Text style={{ color: "black", fontSize: 16, textAlign: 'center' }}>Get Started</Text>
      </View>
    )
  }

  return (
    <>
      {
        showRealApp ? (
          <Start />
        ) : (
          <AppIntroSlider
            data={slides}
            renderItem={renderItem}
            onDone={onDone}
            renderNextButton={renderNextButton}
            renderDoneButton={renderDonetButton}
            onSkip={onSkip}
            showSkipButton={false}
            activeDotStyle={{ backgroundColor: '#CCA76A' }}
          />
        )
      }
    </>

  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212327',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  introTitleSlide: {
    fontSize: 22,
    color: "#CCA76A",
    textAlign: 'center',
    marginTop: 400,
    fontWeight: 'bold',
  },
  introImageStyle: {
    position: 'absolute',
    top: 0,
    width: Dimensions.get('window').width,
  },
  introTextStyle: {
    margin: 32,
    color: 'white',
    textAlign: 'center',
    fontSize: 15
  }
});

const slides = [
  {
    key: 's1',
    text: 'Find and book Barber, Beauty, Salon & Spa services anywhere, anytime.',
    title: 'Find and Book Services',
    image: require('../../assets/Group413.png'),
    backgroundColor: '#212327',
  },
  {
    key: 's2',
    title: 'Style that fit your Lifestyle.',
    text: 'Choose our Makeup special offer price Package that fit your Lifestyle.',
    image: require('../../assets/Group414.png'),
    backgroundColor: '#212327',
  },


];