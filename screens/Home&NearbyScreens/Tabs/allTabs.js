import 'react-native-gesture-handler';
import React from 'react';
import Hairstyle from './Hairstyle';
import Facial from './Facial';
import Trimming from './Trimming';
import Saving from './Saving';
import Eye from './Eye';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomNavigator from '../../../components/BottomNavigator';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default AllTabs = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.topView}>
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
            <TouchableOpacity>
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
              style={{ marginLeft: 100 }} />
          </View>
        </View>
      </SafeAreaView>


      <View style={{ flex: 1 }}>
        <Tab.Navigator
          initialRouteName="Hairstyle"
          showPageIndicator={false}
          screenOptions={{
            tabBarActiveTintColor: '#FFFFFF',
            tabBarLabelStyle: { fontSize: 12 },
            tabBarIndicatorContainerStyle: { backgroundColor: '#212327' },
          }}
          style={{}}
        >
          <Tab.Screen
            name="Hairstyle"
            component={Hairstyle}
            options={{ tabBarLabel: 'Haistyle', tabBarLabelStyle: { textTransform: 'capitalize' } }}
          />
          <Tab.Screen
            name="Facial"
            component={Facial}
            options={{ tabBarLabel: 'Facial',tabBarLabelStyle: { textTransform: 'capitalize' } }}
          />
          <Tab.Screen
            name="Trimming"
            component={Trimming}
            options={{ tabBarLabel: 'Trimming' ,tabBarLabelStyle: { textTransform: 'capitalize' }}}
          />
          <Tab.Screen
            name="Saving"
            component={Saving}
            options={{ tabBarLabel: 'Saving' ,tabBarLabelStyle: { textTransform: 'capitalize' }}}
          />
          <Tab.Screen
            name="Eye"
            component={Eye}
            options={{ tabBarLabel: 'Eye',tabBarLabelStyle: { textTransform: 'capitalize' } }}
          />
        </Tab.Navigator>
      </View>
      <BottomNavigator />
    </View>

  );
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
    //left: Dimensions.get('window').width / 14
  },
})