import React from 'react';
import 'react-native-gesture-handler';
import { View, Text, FlatList, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import StarRating from './StarRating';
import SpecialistsItems from './specialistsItems';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import About from './SalonTabs/About';
import Services from './SalonTabs/Services';
import Gallery from './SalonTabs/Gallery';
import Review from './SalonTabs/Review';
import Share from 'react-native-share';
import file from './Base64';

const Tab = createMaterialTopTabNavigator();

export default SalonsProfile = ({navigation}) => {

  const myCustomShare = async () => {
    const shareOptions = {
      message: 'Book your favorite salons here.',
      logo: file.appLogo,
    }

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log("Error =>", error)
    }
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', padding: 8 }}
      >
        <View style={{ backgroundColor: '#CCA76A', padding: 2, borderRadius: 50 }}>
          <Image source={item.image}
            resizeMode='cover'
            style={{ borderRadius: 50, borderColor: '#323446', borderWidth: 3 }}
          />
        </View>
        <Text style={{ color: 'white', fontSize: 12, fontFamily: "Tofino", marginTop: 10 }}>{item.name}</Text>
        <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 11, fontFamily: "Tofino", marginTop: 3 }}>{item.occupation}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <ScrollView nestedScrollEnabled={true}
      contentContainerStyle={{ alignItems: 'center', flex: 1, justifyContent: 'center', backgroundColor: "#323446" }} >
      <Image source={require('../../assets/151.png')} style={{ width: '100%' }} />
      <View style={styles.topView}>
        <Text style={styles.heading}>RedBox Barber Salon</Text>
        <Text style={styles.location}>445 Morgan Camp, New Deltaton, NY, Iran</Text>
        <StarRating />
      </View>
      <View style={styles.barView}>
        <View style={styles.top}>
          <TouchableOpacity>
            <View style={styles.bar}>
              <Image source={require('../../assets/ic_website.png')} />
              <Text style={styles.barText}>Website</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.bar}>
              <Image source={require('../../assets/ic_end_call.png')} />

              <Text style={[styles.barText, { marginTop: -3.2 }]}>Call</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Map')}>
            <View style={styles.bar}>
              <Image source={require('../../assets/ic_map.png')} />

              <Text style={styles.barText}>Direction</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={myCustomShare}>
            <View style={styles.bar}>
              <Image source={require('../../assets/ic_share.png')} />

              <Text style={styles.barText}>share</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 16 }}>
          <Text style={styles.salonText}>Salon specialists</Text>
          <FlatList
            data={SpecialistsItems}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ marginTop: 15, borderRadius: 50, borderColor: 'white' }}
          // style={{ marginTop: 15 }}
          />
        </View>
      </View>

      <View style={{ flex: 1, width: '100%', marginTop: 20, }}>
        <Tab.Navigator
          initialRouteName="About"
          showPageIndicator={false}
          tabBarScrollEnabled={false}

          screenOptions={{
            tabBarActiveTintColor: '#E4B343',
            tabBarInactiveTintColor: 'rgba(255,255,255,0.7)',
            tabBarLabelStyle: { fontSize: 16 },
            tabBarIndicatorContainerStyle: { backgroundColor: '#323446' },
            tabBarIndicatorStyle: { backgroundColor: '#CCA76A' },
            swipeEnabled: false
          }}
        >
          <Tab.Screen
            name="About"
            component={About}
            options={{ tabBarLabel: 'about', tabBarLabelStyle: { textTransform: 'capitalize' } }}
          />
          <Tab.Screen
            name="Services"
            component={Services}
            options={{ tabBarLabel: 'services', tabBarLabelStyle: { textTransform: 'capitalize' } }}
          />
          <Tab.Screen
            name="Gallery"
            component={Gallery}
            options={{ tabBarLabel: 'gallery', tabBarLabelStyle: { textTransform: 'capitalize' } }}
          />
          <Tab.Screen
            name="Review"
            component={Review}
            options={{ tabBarLabel: 'review', tabBarLabelStyle: { textTransform: 'capitalize' } }}
          />
        </Tab.Navigator>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "white"
  },
  topView: {
    position: 'absolute',
    left: 16,
    top: 190
  },
  location: {
    color: "white",
    fontSize: 13,
  },
  barView: {
    backgroundColor: '#323446',
    width: '100%',
    justifyContent: 'center',
  },
  barText: {
    fontSize: 13,
    color: "#E4B343",
    textAlign: 'center',
    marginTop: 4
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingLeft: 27,
    paddingRight: 27
  },
  salonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 26,
  },
  bar: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: "center"
  }
})