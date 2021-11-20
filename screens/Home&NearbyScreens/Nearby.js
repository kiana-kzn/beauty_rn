import 'react-native-gesture-handler';
import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, TouchableWithoutFeedback, TextInput, FlatList } from 'react-native';
import BottomNavigator from '../../components/BottomNavigator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TopServices from './TopServices';
import BestSalons from './BestSalons';
import Icon from 'react-native-vector-icons/Ionicons';

export default Nearby = ({ navigation }) => {

  function salons() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity style={{ justifyContent: 'center', paddingHorizontal: 7 }}>
          <View style={{ borderBottomWidth: 20, borderColor: 'white', borderRadius: 15, backgroundColor: 'white' }}>

            <Image source={item.image}
              resizeMode="cover"
            />

            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
              <Text style={styles.textSalon}>{item.title}</Text>
              <View style={{ flexDirection: 'row', marginRight: 10, marginTop: 4 }}>
                <Icon
                  name={'star'}
                  color={'#E4B343'}
                  size={17}
                />
                <Text style={{ fontSize: 14, color: '#999999', marginLeft: 6.8 }}>4.0</Text>
              </View>
            </View>
            <Text style={[styles.location], { marginLeft: 9, fontSize: 12.6, color: '#999999', marginTop: 3 }}>288 McClure Court, Arkansas</Text>
          </View>
        </TouchableOpacity >
      )
    }
    return (
      <FlatList
        data={BestSalons}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 11 }}
        style={{ marginTop: 15 }}
      />
    )
  };

  function categories() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', padding: 8 }} >
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={item.image}
              resizeMode='contain'
            />
          </View>
          <Text style={{ color: 'white', fontSize: 14, fontFamily: "Tofino", marginTop: 10 }}>{item.title}</Text>
        </TouchableOpacity>
      )
    }
    return (
      <FlatList
        data={TopServices}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={{ marginTop: 15 }}
      />
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topView}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.name}>Hello, John Doe</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <Fontisto
                  name={"bell"}
                  color={'white'}
                  size={21}
                  style={{ paddingRight: 35 }}
                />
                <View style={{
                  position: 'absolute', width: 10, height: 10,
                  borderRadius: 50, backgroundColor: '#E4B343', top: 1, right: 31
                }} />

              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Filters')}>
                <FontAwesome
                  name={'filter'}
                  color={'white'}
                  size={21}
                  style={{ paddingRight: 16 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.locationText}>Your location</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', paddingTop: 7, paddingLeft: 16 }}>
              <Ionicons
                name={'location-sharp'}
                color={'white'}
                size={20}
                style={{ paddingRight: 8 }}
              />
              <Text style={{ fontSize: 14, color: 'white' }}> San Francisco City</Text>
            </View>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row', paddingTop: 7, paddingRight: 16 }}>
                <FontAwesome
                  name={'location-arrow'}
                  size={14}
                  color={'#00B2AE'}
                  style={{ paddingRight: 7 }}
                />
                <Text style={{ fontSize: 14, color: '#00B2AE' }}>CHANGE</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center' }}>
            <View style={styles.row}>
              <Ionicons name={'ios-search-outline'} size={21} color={'#999999'}
                style={{ paddingRight: 10 }} />
              <TextInput
                placeholder={'Search for salon, spa and barber'}
                placeholderTextColor={'#999999'}
                color='white'
              />
              <FontAwesome name={'microphone'} size={21} color={'gray'}
                style={{ paddingLeft: 67 }} />
            </View>
          </View>
        </View>

        <View>
          <View style={{ marginTop: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={styles.text_1}>Top Services</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Nearby2')}>
              <Text style={styles.text_2}>View all</Text>
            </TouchableOpacity>
          </View>
          {categories()}
        </View>

        <View >
          <View style={{ marginTop: 25, justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={styles.text_1}>Popular salon nearby</Text>
            <TouchableOpacity>
              <Text style={styles.text_2}>View all</Text>
            </TouchableOpacity>
          </View>
          {salons()}
        </View>

        <View>
          <View style={{ marginTop: 25, justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={styles.text_1}>Special packages & offers</Text>
            <TouchableOpacity>
              <Text style={styles.text_2}>View all</Text>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
            <Image source={require('../../assets/special.png')} />
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Map')}>
              <View style={styles.mapView}>
                <Image source={require('../../assets/maploc.png')} style={styles.map} />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
      <BottomNavigator navigation={navigation} />
    </SafeAreaView >
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212327'
  },
  topView: {
    backgroundColor: '#323446',
    width: '100%',
    height: 200,
    justifyContent: 'center',
  },
  name: {
    fontSize: 17,
    fontFamily: 'Tofino',
    color: '#CCA76A',
    fontWeight: 'bold',
    paddingLeft: 16
  },
  locationText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
    paddingLeft: 16,
    marginTop: 13,
  },
  text_1: {
    fontSize: 18,
    fontFamily: 'Tofino',
    fontWeight: 'bold',
    color: 'white',
    alignItems: 'flex-start',
    paddingLeft: 16
  },
  text_2: {
    fontSize: 14,
    fontFamily: 'Tofino',
    color: '#CCA76A',
    alignItems: 'flex-start',
    paddingRight: 16
  },
  textSalon: {
    color: 'black',
    fontSize: 15,
    fontFamily: "Tofino",
    marginTop: 4,
    marginLeft: 10
  },
  location: {
    fontSize: 12.6,
  },
  row: {
    marginTop: 17,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderRadius: 15,
    backgroundColor: '#212327',
    height: 45,
    paddingLeft: 12,
  },
  mapView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
    backgroundColor: '#F04C71',
    borderRadius: 50,
    position: 'absolute',
    right: 15,
    bottom: 8
  },
  map: {
    alignSelf: 'center'
  }
})