import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './screens/intro/firstScreen';
import Start from './screens/Login&Signup/Start';
import Login from './screens/Login&Signup/Login';
import ForgotPass from './screens/Login&Signup/ForgotPass';
import SignUp from './screens/Login&Signup/SignUp';
import Auth from './screens/Login&Signup/Auth';
import InputOTP from './screens/Login&Signup/InputOTP';
import HomePage from './screens/Home&NearbyScreens/HomePage';
import Nearby from './screens/Home&NearbyScreens/Nearby';
import Nearby2 from './screens/Home&NearbyScreens/Nearby2_Tabs/Nearby_2';
import allTabs from './screens/Home&NearbyScreens/Tabs/allTabs';
import Map from './screens/Map';
import SalonsProfile from './screens/BaberProfiles&Services/SalonsProfile';
import Bridal from './screens/BaberProfiles&Services/Bridal';
import Payment from './screens/Payments/Payment';
import Filters from './screens/FilterDetails/Filters';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        <Stack.Screen name="InputOTP" component={InputOTP} options={{ headerShown: false }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Nearby" component={Nearby} options={{ headerShown: false }} />
        <Stack.Screen name="Nearby2" component={Nearby2} options={{ headerShown: false }} />
        <Stack.Screen name="Map" component={Map} options={{ headerShown: false }} />
        <Stack.Screen name="SalonsProfile" component={SalonsProfile} options={{ headerShown: false }} />
        <Stack.Screen name="Filters" component={Filters}
          options={{
            headerRight: () => {
              return (
                <TouchableOpacity onPress={() => { navigation.reset('Filters') }}>
                  <Text style={{ color: '#E4B343', fontSize: 15 }}>Reset</Text>
                </TouchableOpacity>)
            },
            headerStyle: { backgroundColor: '#323446' },
            headerTitleStyle: { color: 'white', fontSize: 17 },
            headerBackVisible: true,
          }}
        />
        <Stack.Screen name="Bridal" component={Bridal} options={{ headerShown: false }} />
        <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

export default App