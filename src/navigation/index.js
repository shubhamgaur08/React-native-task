import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import Welcome from '../screens/Welcome';
import Categories from '../screens/Categories';
import { Colors } from '../constants/Colors'; // Assuming you have a Colors constant
import { View } from 'react-native';
import Header from '../components/Header';
import BottomBar from '../components/Bottom';

const Tab = createMaterialTopTabNavigator();

export default function RootNavigator() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.tabBarColor, // Active tab color
          tabBarInactiveTintColor: 'gray', // Inactive tab color
          tabBarStyle: {
            backgroundColor: '#ffffff', // Tab bar background
            elevation: 5, // Shadow for Android
            shadowColor: '#000', // Shadow for iOS
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            height: 40, // Adjust tab bar height
          },
          tabBarIndicatorStyle: {
            backgroundColor: Colors.tabBarColor, // Indicator color (underline)
            height: 2, // Height of the indicator (underline)
            borderRadius: 2, // Rounded indicator
          },
          tabBarLabelStyle: {
            fontSize: 10, // Label text size
            fontWeight: 'bold', // Label text weight
            textTransform: 'none', // Disable default uppercase
          },
         
          
        }}
      >
        <Tab.Screen
          key="welcome-tab" // Explicit key
          name="WELCOME"
          component={Welcome}
        />
        <Tab.Screen
          key="categories-tab" // Explicit key
          name="CATEGORIES"
          component={Categories}
        />
      </Tab.Navigator>
      <BottomBar />
    </View>
  );
}
