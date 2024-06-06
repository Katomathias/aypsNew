import React from 'react';

// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'; //old import
// import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation'; //new import
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';      //very important...it can cause an app in production to crash

//import HomeScreen from '.components/screens/HomeScreen';
// import DetailsScreen from './screens/DetailsScreen';
// import ExploreScreen from './screens/ExploreScreen';
// import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './HomeScreen';
import CropClass from './CropClass';
import Disease from './Disease';
import Explore from './Explore';


// const HomeStack = createStackNavigator();
// const DetailsStack = createStackNavigator();

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
  
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="green"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={CropClass}
        options={{
          tabBarLabel: 'Predict crop',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="leaf" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Disease}
        options={{
          tabBarLabel: 'Predict disease',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="camera" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="apps" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    
  
);


export default MainTabScreen;

