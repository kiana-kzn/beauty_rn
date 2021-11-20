import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, Dimensions, TextInput, FlatList } from 'react-native';
import BottomNavigator from '../../components/BottomNavigator';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import TopCategories from './TopCategories';
import BestSalons from './BestSalons';
import { Icon } from 'react-native-elements';
import LocationPopup from './LocationPopup';


export default HomePage = ({ navigation }) => {

  //const [TopCategories, setTopCategories] = React.useState(TopCategoriesData)
  // const [selectedTopCategory, setSelectedTopCaregory] = React.useState(null)
  // const [barbershop, setBarbershop] = React.useState

  // function onSelectCategoty(TopCategories) {
  //   let barbershopList = barbershopData.filter(a => a.TopCategories.includes(TopCategories.id))
  //   setBarbershop(barbershopList)
  //   setSelectedTopCaregory(TopCategories)
  // }
  // let popupRef=React.createRef()

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
                <Icon1
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
          {/* <View style={{ flexDirection: 'row' }}>
            <Text style={styles.textSalon}>{item.title}</Text>

          </View> */}
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
        contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 1 }}
      />
    )
  };

  function categories() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', padding: 10 }}
        // onPress={() => onSelectCategoty(item)}
        >
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
        data={TopCategories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}

      />
    )
  };


  //return of the main function
  return (
    <SafeAreaView style={styles.NavContainer}>

      <LocationPopup />

      <View style={{ position: 'absolute', top: 0, alignItems:'center' }}>
        <Image source={require('../../assets/Union1.png')} style={styles.image} />
        <Text style={styles.heading}>Find and book best services</Text>
        <View style={styles.row}>
          <Icon1 name={'ios-search-outline'} size={21} color={'white'}
            style={{ paddingRight: 10 }} />
          <TextInput
            placeholder={'Search salon, spa and barber'}
            placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
            color='white'
          />
        </View>
        <ScrollView>
          <View style={{ marginTop: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={styles.text_1}>Top categories</Text>
            <TouchableOpacity>
              <Text style={styles.text_2}>View all</Text>
            </TouchableOpacity>
          </View>
          {categories()}

          <View style={{ marginTop: 25, justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={styles.text_1}>Best salons</Text>
            <TouchableOpacity>
              <Text style={styles.text_2}>View all</Text>
            </TouchableOpacity>
          </View>
          {salons()}

        </ScrollView>

      </View>
      <BottomNavigator navigation={navigation} />
    </SafeAreaView>

  )
}



const styles = StyleSheet.create({
  NavContainer: {
    flex: 1,
    width: '100%',
    height: "100%",
    justifyContent: 'flex-end',
    backgroundColor: '#212327'
  },

  image: {
    width: '110%',
    resizeMode: 'cover',
  },

  heading: {
    fontSize: 20,
    fontFamily: "Tofino",
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    top: 153,
    left: Dimensions.get('window').width / 6
  },

  row: {
    marginTop: '5%',
    flexDirection: 'row',
    //justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width / 1.2,
    borderRadius: 15,
    backgroundColor: 'rgba(50, 52, 70, 0.65)',
    height: 45,
    paddingLeft: 12,
    position: 'absolute',
    top: 173,
    left: Dimensions.get('window').width / 14
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


  }
})