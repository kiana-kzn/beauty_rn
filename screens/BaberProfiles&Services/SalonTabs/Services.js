import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Offers from './ServicesTabs/Offers';
import PriceTable from './ServicesTabs/PriceTable';
import Services1 from './ServicesTabs/Services1';

const Tab = createMaterialTopTabNavigator();

export default Services = ({ navigation }) => {

 function MyTabBar({ state, descriptors, navigation }) {
  return (
   <View style={{ flexDirection: 'row', backgroundColor: "#212327", height: 34, width: 343, borderRadius: 10, justifyContent: "space-around", alignSelf: "center", borderColor: '#CCA76A', alignItems: 'center', borderWidth: 2 }}>
    {state.routes.map((route, index) => {
     const { options } = descriptors[route.key];
     const label =
      options.tabBarLabel !== undefined
       ? options.tabBarLabel
       : options.title !== undefined
        ? options.title
        : route.name;

     const isFocused = state.index === index;

     const onPress = () => {
      const event = navigation.emit({
       type: 'tabPress',
       target: route.key,
      });

      if (!isFocused && !event.defaultPrevented) {
       navigation.navigate(route.name);
      }
     };

     const onLongPress = () => {
      navigation.emit({
       type: 'tabLongPress',
       target: route.key,
      });
     };

     return (
      <TouchableOpacity
       accessibilityRole="button"
       accessibilityStates={isFocused ? ['selected'] : []}
       accessibilityLabel={options.tabBarAccessibilityLabel}
       testID={options.tabBarTestID}
       onPress={onPress}
       onLongPress={onLongPress}
       style={{ flex: 1, alignItems: "center" }}
      >
       <Text style={{ color: isFocused ? '#CCA76A' : "#707070" }}>
        {label}
       </Text>
      </TouchableOpacity>
     );
    })}
   </View>
  );
 }

 return (
  <View style={{ backgroundColor: '#212327', flex: 1 , justifyContent:'center',}}>
   <View style={{ marginTop: 24, flex: 1 }}>
    <Tab.Navigator
     initialRouteName="Services"
     showPageIndicator={false}
     tabBarScrollEnabled={false}
     tabBar={props => <MyTabBar {...props} />}

     screenOptions={{
     }}>
     <Tab.Screen
      name="Services"
      component={Services1}
      options={{ tabBarLabel: 'Services', tabBarLabelStyle: { textTransform: 'capitalize' } }}
     />
     <Tab.Screen
      name="Package and Offers"
      component={Offers}
      options={{ tabBarLabel: 'Package & Offers', tabBarLabelStyle: { textTransform: 'capitalize' } }}
     />
     <Tab.Screen
      name="Price Table"
      component={PriceTable}
      options={{ tabBarLabel: 'Price Table', tabBarLabelStyle: { textTransform: 'capitalize' } }}
     />
    </Tab.Navigator>
   </View>
  </View>
 )
}