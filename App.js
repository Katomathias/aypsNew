import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Disease from './components/Disease';
import CropClass from './components/CropClass';
import SplashScreen from './components/SplashScreen';
import RegisterScreen from './components/RegisterScreen';
import SignIn from './components/SignInScreen';
import MainTabScreen from './components/MainTabScreen';
import HomeScreen from './components/HomeScreen';
import Weatherr from './components/Weatherr';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import LogOut from './components/LogOut';
import Forecast from './components/Forecast';
import Linkss from './components/Linkss';
import Guide from './components/Guide';
import Explore from './components/Explore';



const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
              headerShown: false,
            }} >
          {/* <Stack.Navigator initialRouteName="CropClass"></Stack.Navigator>     */}



          {/* <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> */}
          
              <Stack.Screen name="HomeDrawer" component={MainTabScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen name="Signin" component={SignIn} />
              <Stack.Screen name="SplashScreen" component={SplashScreen} />  
              <Stack.Screen name="CropClass" component={CropClass} /> 
              <Stack.Screen name="Disease" component={Disease} />
              <Stack.Screen name="Guide" component={Guide} />
              <Stack.Screen name="forecast" component={Forecast} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Linkss" component={Linkss} />
              <Stack.Screen name="Weather" component={Weatherr} />
              <Stack.Screen name="About" component={AboutUs} />
              <Stack.Screen name="Contact Us" component={ContactUs} />
              <Stack.Screen name="Log Out" component={LogOut} />
              <Stack.Screen name="Explore" component={Explore} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}