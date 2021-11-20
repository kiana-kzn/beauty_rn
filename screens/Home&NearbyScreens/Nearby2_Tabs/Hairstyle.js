import React from 'react';
//import 'react-native-gesture-handler';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView, Image, Dimensions, TextInput, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BarberSpecialists from '../Tabs/BarberSpecialists';
import BarberSalon from '../Tabs/BarberSalon';
import Icon from 'react-native-vector-icons/Ionicons';


export default Hairstyle = () => {

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

          {/* //barbershop info */}

        </TouchableOpacity >
      )

    }
    return (
      <FlatList
        data={BarberSalon}
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
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 8 }}
        >
          <View style={{ marginTop: 16, backgroundColor: '#CCA76A', padding: 2, borderRadius: 50 }}>
            <Image source={item.image}
              style={styles.image}

            />
          </View>
          <Text style={{ color: 'white', fontSize: 14, fontFamily: "Tofino", marginTop: 10 }}>{item.title}</Text>
        </TouchableOpacity>
      )
    }
    return (
      <FlatList
        data={BarberSpecialists}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={{}}
      />
    )
  };


  return (
    <ScrollView style={styles.body}>
      <View style={{ marginTop: 16 }}>
        {categories()}
      </View>
      <View >
        <View style={{ marginTop: 30, justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={styles.text_1}>Popular salons nearby</Text>
          <TouchableOpacity onPress={() => navigation.navigate('NearbySalons')}>
            <Text style={styles.text_2}>View all</Text>
          </TouchableOpacity>
        </View>
        {salons()}
      </View>
      <View>
        <View style={{ marginTop: 30, justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={styles.text_1}>Special packages & offers</Text>
          <TouchableOpacity>
            <Text style={styles.text_2}>View all</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
          <Image source={require('../../../assets/bann.png')}
            resizeMode="cover"

          />
        </View>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#212327"
  },

  barberImg: {
    borderColor: 'yellow',
    borderRadius: 10,
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

  image: {
    borderRadius: 50,
    borderColor:"#212327" ,
    borderWidth: 3,
  
  }
})